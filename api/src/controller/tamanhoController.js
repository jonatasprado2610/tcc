import { listarTamanhos } from "../repository/tamanhoRepository.js";


import { Router } from "express";
const server = Router();


server.get('/api/tamanho', async (req, resp) => {
    try {
        const linhas = await listarTamanhos();
        resp.send(linhas);
    }
    catch (err) {
        resp.status(400).send({
            erro: err.message
        })
    }
})


export default server;