import { listarCores } from "../repository/corRepository.js";


import { Router } from "express";
const server = Router();


server.get('/api/cores', async (req, resp) => {
    try {
        const linhas = await listarCores();
        resp.send(linhas);
    }
    catch (err) {
        resp.status(400).send({
            erro: err.message
        })
    }
})


export default server;