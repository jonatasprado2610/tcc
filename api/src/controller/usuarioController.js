import { CriarConta, LoginUsuario, PedidosEmAndamento, PerfilUsuario, ProdutosUsuario } from "../repository/usuarioRepository.js";
import { Router } from "express";
import { validarCadastro } from "../services/validarCadastro.js";
const server = Router();

server.get('/usuario/perfil/produtos/:id', async (req, resp) => {
    try {
        const id = req.params.id;
        const r = await ProdutosUsuario(id);
        resp.send(r)
    } catch (err) {
         resp.status(401).send({
             erro:err.message
         });
    }
})
server.get('/usuario/perfil/pedido/:id', async (req, resp) => {
    try {
        const id = req.params.id;
        const r = await PedidosEmAndamento(id);
        resp.send(r)
    } catch (err) {
         resp.status(401).send({
             erro:err.message
         });
    }
})

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
        resp.send({
            id: resposta.id,
            nome:  resposta.nome
        })
        
    } catch(err){
         resp.status(401).send({
             erro:err.message
         });
    }
});

server.get('/usuario/perfil/:id' ,async(req,resp) => {
    try{
        const id = req.params.id
        const resposta = await PerfilUsuario(id);
        resp.send(resposta)
    } catch(err){
         resp.status(401).send({
             erro:err.message
         });
    }
});



export default server;