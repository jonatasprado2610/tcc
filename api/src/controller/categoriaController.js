import { listarCategorias } from "../repository/categoriaRepository.js";


import { Router } from "express";
const server = Router();


server.get('/api/categoria', async (req, resp) => {
    try {
        const linhas = await listarCategorias();
        resp.send(linhas);
    }
    catch (err) {
        resp.status(400).send({
            erro: err.message
        })
    }
})


export default server;


