
import { Router } from "express";
const server = Router();

import { loginAdm } from "../../repository/Adminrepository.js";

server.post('/admin/login', async (req, resp) =>{
    try{
        const {login, senha} = req.body;
        const resposta = await loginAdm(login, senha)
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