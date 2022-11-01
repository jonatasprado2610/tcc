import { Router } from "express";

import { cadastracupom,listarCupom } from "../repository/cupomRepository.js";

const server = Router();

server.post('/admin/cupom', async (req, resp) => {
    try{

        const cupom = req.body;

        const r = await cadastracupom(cupom);

        resp.status(204).send();
        

    }
    catch (err) {
        return resp.status(400).send({
        erro: err.message
        });
    }
})

server.get('/admin/cupom', async (req, resp) => {
    try {
        const linhas = await listarCupom();
        resp.send(linhas);
    }
    catch (err) {
        resp.status(400).send({
            erro: err.message
        })
    }
})



export default server;