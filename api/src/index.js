import 'dotenv/config'

import adminController from './controller/adminController.js';
import usuarioController from './controller/usuarioController.js';
import marcaController from './controller/marcacontroller.js'
import categoriaController from './controller/categoriaController.js'
import produtoController from './controller/produtoController.js'
import tamanhoController from './controller/tamanhoController.js'
import corController from './controller/corController.js'
import enderecoController  from './controller/enderecoController.js'

import express from 'express'
import cors from 'cors'

const server = express();

server.use(cors());
server.use(express.json());


// configuração dos endpoints
server.use(adminController);
server.use(usuarioController);
server.use(marcaController);
server.use(categoriaController);
server.use(produtoController);
server.use(tamanhoController);
server.use(corController);
server.use(enderecoController);
server.use('/storage/produto', express.static('storage/produto'))


server.listen(process.env.PORT, () => console.log(`API CONECTA NA PORTA ${process.env.PORT}`));
