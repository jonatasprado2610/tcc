import { buscarTamanhoPorIdx, listarTamanhos } from "../../repository/tamanhoRepository.js";


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

server.get('/api/tamanho/:id', async (req, resp) => {
    try {

        const linhas = await buscarTamanhoPorIdx(req.params.id);
        resp.send(linhas);
        
    }
    catch (err) {
        console.log(err)
        resp.status(400).send({
            erro: err.message
        })
    }
})


export default server;