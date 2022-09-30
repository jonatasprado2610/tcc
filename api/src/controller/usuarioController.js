import { CriarConta, LoginUsuario } from "../repository/usuarioRepository.js";
import { Router } from "express";
import { validarCadastro } from "../services/validarCadastro.js";
const server = Router();



server.post('/criarconta', async (req, resp) =>{
      try{
           const  criconta = req.body;
           
          await validarCadastro(criconta)
         

           const x = await CriarConta(criconta);
           resp.send(x)

         
      }catch(err){
        resp.status(400).send({
            erro: err.message
        });
   }


})

server.post('/usuario/login', async (req, resp) =>{
    try{
        const {email, senha} = req.body;
        const resposta = await LoginUsuario(email, senha)
        if(!resposta){
            throw new Error('CREDENCIAIS INVALIDADAS')
        }
        resp.send(resposta)

    } catch(err){
         resp.status(401).send({
             erro:err.message
         });
    }
});



export default server;