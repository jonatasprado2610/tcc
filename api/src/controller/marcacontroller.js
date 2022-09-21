import { listarMarcas} from "../repository/marcarepository.js";


import { Router } from "express";
const server = Router();


server.get('/api/marca', async (req, resp) => {
    try {
        const linhas = await listarMarcas();
        resp.send(linhas);
    }
    catch (err) {
        resp.status(400).send({
            erro: err.message
        })
    }
})


export default server;