import 'dotenv/config'

import adminController from './controller/adminController.js';
import usuarioController from './controller/usuarioController.js';

import express from 'express'
import cors from 'cors'

const server = express();

server.use(cors());
server.use(express.json());


// configuração dos endpoints
server.use(adminController);
server.use(usuarioController)






server.listen(process.env.PORT, () => console.log(`API CONECTA NA PORTA ${process.env.PORT}`));
