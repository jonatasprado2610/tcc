import { Router } from "express";
import { cadastrarEndereco } from "../repository/enderecoRepository.js"; 
const server = Router();

server.post('/api/cadastrarendereco', async (req, resp) => {
    try{
        const endereco  = req.body;

        const linhas = await cadastrarEndereco(endereco)
        resp.send(endereco)
        

    }
    catch (err) {
        return resp.status(400).send({
        erro: err.message
        });
    }
})

export default server; 