import { Router } from 'express';

import { alterarProduto, buscarProdutos,consultarMarcas,consultarProdutos, novoProduto,  procurarCorPorId, procurarImagemPorId, 
    procurarMarcaPorId, procurarProdutoPorId, procurarTamanhoPorId,procurarCategoriasPorId, removerProduto, removerProdutoCategorias, removerProdutoCores, removerProdutoImagens, 
removerProdutoMarcas, removerProdutoTamanhos, salvarProdutoCategoria,  salvarProdutoCor, salvarProdutoImagem, salvarProdutoMarca, salvarProdutoTamanho,
 } from '../repository/produtoRepository.js';
import { buscarCategoriaPorId } from '../repository/categoriaRepository.js';
import { buscarCorPorId } from '../repository/corRepository.js';
import { buscarTamanhoPorId } from '../repository/tamanhoRepository.js';
import { buscarMarcaPorId } from '../repository/marcarepository.js';
import { validarProduto } from '../services/ValidarProduto.js';
import multer from 'multer'

import { con } from '../repository/connection.js';

const server = Router();
const upload = multer({dest:'storage/produto'})





server.post('/admin/produto', async (req, resp) => {
    try {
        const produto = req.body;
        
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
        resp.send({
            id:idProduto
        });
    }
    catch (err) {
        return resp.status(400).send({
            erro: err.message
        })
    }
})

server.put('/admin/produto/:id', async (req, resp) => {
    try{
        const {id} = req.params;
        const produto = req.body;
        console.log(id)
        console.log(produto)

        const resposta = await alterarProduto(id, produto)
        if( resposta != 1 )
        throw new Error ('produto não pode ser alterado')
        else 
         resp.status(204).send();

    }catch(err) {
        resp.status(400).send({
            erro: err.message
        })
    }
})

server.put('/admin/produtoimg/:id', upload.array('imagens'), async (req,resp) =>{
    try{
        const id = req.params.id;
        const imagens = req.files;
        console.log(imagens)

        for(const imagem of imagens)
        {
               await salvarProdutoImagem(id, imagem.path);
        }
        resp.status(204).send();



    }catch(err) {
        resp.status(400).send({
            erro: err.message
        })
    }

})


server.get('/admin/produto' , async (req, resp) => {
    try{
        const respo = await consultarProdutos() ;
         resp.send(respo);

    }catch(err) {
        resp.status(400).send({
            erro: err.message
        })
    } 
})

server.get('/admin/produto/estoque', async (req,resp) => {
    try{
        const r = await buscarProdutos();
        resp.send(r);
    }catch(err){
        resp.status(400).send({
            erro: err.message
        })
    }
})


server.delete('/admin/produto/:id', async (req,resp) => {
    try{
        const id = Number(req.params.id);
        await removerProdutoImagens(id);
        await removerProdutoMarcas(id);
        await removerProdutoTamanhos(id);
        await removerProdutoCores(id);
        await removerProdutoCategorias(id);
        await removerProduto(id);
        resp.status(204).send()
    }catch(err){
        resp.status(400).send({
            erro: err.message
        })
    }
})

server.get('/admin/produto/:id', async (req, resp) => {

    try{
        const id = Number(req.params.id);
        const produto = await procurarProdutoPorId(id);
        const imagens = await procurarImagemPorId(id);
        const marcas = await procurarMarcaPorId(id);
        const tamanhos = await procurarTamanhoPorId(id);
        const cores = await procurarCorPorId(id);
        const categorias = await procurarCategoriasPorId(id);
        resp.send({
            info: produto,
            imagens: imagens,
            marcas: marcas,
            tamanhos: tamanhos,
            cores:cores,
            categorias: categorias
        });
    }catch(err){
        resp.status(400).send({
            erro: err.message
        })
    }
})

export default server;