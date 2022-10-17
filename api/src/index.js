import 'dotenv/config'

import adminController from './controller/admin/adminController.js';
import usuarioController from './controller/usuarioController.js';
import marcaController from './controller/admin/marcacontroller.js'
import amincategoriaController from './controller/admin/categoriaController.js'
import adminprodutoController from './controller/admin/produtoController.js'
import tamanhoController from './controller/admin/tamanhoController.js'
import admincorController from './controller/admin/corController.js'
import enderecoController  from './controller/enderecoController.js'
import filtrosController from './controller/filtrosController.js'
import produtoController  from './controller/produtoController.js'

import express from 'express'
import cors from 'cors'

const server = express();

server.use(cors());
server.use(express.json());


// configuração dos endpoints
server.use(adminController);
server.use(usuarioController);
server.use(marcaController);
server.use(amincategoriaController);
server.use(adminprodutoController);
server.use(tamanhoController);
server.use(admincorController);
server.use(enderecoController);

server.use(filtrosController);
server.use(produtoController);

server.use('/storage/produto', express.static('storage/produto'))



server.listen(process.env.PORT, () => console.log(`API CONECTA NA PORTA ${process.env.PORT}`));
