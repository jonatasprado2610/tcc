import { Router } from "express";
import {  Listar, salvar } from "../repository/enderecoRepository.js"; 
const server = Router();

server.get('/api/usuario/:id/indereco', async (req, resp) => {
    try{
        const id =req.params.id;
        const  r=  await Listar(id);

        resp.send(r);

        

    }
    catch (err) {
        return resp.status(400).send({
        erro: err.message
        });
    }
})

server.post('/api/usuario/:id/indereco', async (req, resp) => {
    try{

        const id = req.params.id;
        const endereco = req.body;

        const r = await salvar(id, endereco);
        resp.status(204).send();
        

    }
    catch (err) {
        return resp.status(400).send({
        erro: err.message
        });
    }
})

export default server; 