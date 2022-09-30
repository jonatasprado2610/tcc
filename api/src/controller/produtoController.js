import { Router } from 'express';
import {
    novoProduto, salvarProdutoCategoria, salvarProdutoCor, salvarProdutoMarca,
    salvarProdutoTamanho
} from '../repository/produtoRepository.js';
import { buscarCategoriaPorId } from '../repository/categoriaRepository.js';
import { buscarCorPorId } from '../repository/corRepository.js';
import { buscarTamanhoPorId } from '../repository/tamanhoRepository.js';
import { buscarMarcaPorId } from '../repository/marcarepository.js';
import { validarProduto } from '../services/ValidarProduto.js';

const server = Router();


server.post('/admin/produto', async (req, resp) => {
    try {
        const produto = req.body;

        await validarProduto(produto);
        
        console.log(produto);

        const idProduto = await novoProduto(produto);


        for (const idMarca of produto.marca) {
            const cat = await buscarMarcaPorId(idMarca);

            if (cat != undefined)
                await salvarProdutoMarca(idMarca, idProduto);
        }
    
           
        

        for (const idTam of produto.tamanho) {
            const cat = await buscarTamanhoPorId(idTam);

            if (cat != undefined)
                await salvarProdutoTamanho(idTam, idProduto);
        }



        for (const idCor of produto.cor) {
            const cat = await buscarCorPorId(idCor);

            if (cat != undefined)
                await salvarProdutoCor(idCor, idProduto);
        }
        
        for (const idCateg of produto.categoria) {
            const cat = await buscarCategoriaPorId(idCateg);

            if (cat != undefined)
                await salvarProdutoCategoria(idCateg, idProduto);
        }


       

        resp.status(204).send();
    }
    catch (err) {
        return resp.status(400).send({
            erro: err.message
        })
    }
})

server.put('/admin/produto/:id', async (req, resp) => {
    try{

    }catch(err) {
        resp.status(400).send({
            erro: err.message
        })
    }
})
export default server;