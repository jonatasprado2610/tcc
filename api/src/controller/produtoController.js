import { Router } from "express";
import { listarProdutosInicio, procurarCategoriasPorId, procurarCorPorId, procurarImagemPorId, procurarMarcaPorId, procurarProdutoPorId, procurarTamanhoPorId, ProdutosCadastrados, listarProdutosporMarca, listarProdutosporTamanho, listarProdutosporGenero, listarProdutosporCategoria, listarProdutosInicioc } from "../repository/produtoRepository.js";
const server = Router();

server.get('/produto', async (req, resp) =>{
    try{
        const resposta = await listarProdutosInicio();
        if(!resposta){
            throw new Error('CREDENCIAIS INVALIDADAS')
        }
        resp.send(resposta)
        
    } catch(err){
         resp.status(401).send({
             erro:err.message
         });
    }
});

server.get('/produto/di', async (req, resp) =>{
    try{
        const resposta = await listarProdutosInicioc();
        if(!resposta){
            throw new Error('CREDENCIAIS INVALIDADAS')
        }
        resp.send(resposta)
        
    } catch(err){
         resp.status(401).send({
             erro:err.message
         });
    }
});


server.get('/api/produto/:id', async (req, resp) => {
    try {
        const id = req.params.id;

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
            cores: cores,
            categorias: categorias
        });

    } catch (err) {
        resp.status(400).send({
            erro: err.message
        })
    }
})

server.get('/produto/cadastrados', async (req, resp) =>{
    try{
        const resposta = await ProdutosCadastrados()
        resp.send(resposta)        
    } catch(err){
         resp.status(401).send({
             erro:err.message
         });
    }
});


server.get('/produtos/marca/:marca', async (req, resp) =>{

    try{
        const marca = req.params.marca
        const resposta = await listarProdutosporMarca(marca)
        resp.send(resposta)
        
    } catch(err){
         resp.status(401).send({
             erro:err.message
         });
    }
});

server.get('/produtos/tamanho/:tamanho', async (req, resp) =>{

    try{
        const tamanho = req.params.tamanho
        const resposta = await listarProdutosporTamanho(tamanho)
        resp.send(resposta)
        
    } catch(err){
         resp.status(401).send({
             erro:err.message
         });
    }
});

server.get('/produtos/gender/:genero', async (req, resp) =>{

    try{
        const genero = req.params.genero
        const resposta = await listarProdutosporGenero(genero)
        resp.send(resposta)
        
    } catch(err){
         resp.status(401).send({
             erro:err.message
         });
    }
});

server.get('/produtos/categoria/:categoria', async (req, resp) =>{

    try{
        const categoria = req.params.categoria
        const resposta = await listarProdutosporCategoria(categoria)
        resp.send(resposta)
        
    } catch(err){
         resp.status(401).send({
             erro:err.message
         });
    }
});
export default server;
        