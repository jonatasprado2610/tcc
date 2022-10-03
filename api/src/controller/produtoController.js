import { Router } from 'express';
import {
    alterarImagem,
    alterarProduto,
    consultarMarcas,
    consultarProdutos,
    novoProduto, salvarProdutoCategoria, salvarProdutoCor, salvarProdutoMarca,
    salvarProdutoTamanho
} from '../repository/produtoRepository.js';
import { buscarCategoriaPorId } from '../repository/categoriaRepository.js';
import { buscarCorPorId } from '../repository/corRepository.js';
import { buscarTamanhoPorId } from '../repository/tamanhoRepository.js';
import { buscarMarcaPorId } from '../repository/marcarepository.js';
import { validarProduto } from '../services/ValidarProduto.js';
import multer from 'multer'

const server = Router();
const upload = multer({dest:'storage/imagesP'});



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

server.get('/admin/produtos' , async (req, resp) => {
    try{
        const respo = await consultarProdutos() ;
         resp.send(respo);

    }catch(err) {
        resp.status(400).send({
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

server.put('/admin/produto:id/imagem', upload.array('imgp','img2','img3','img4','img5') , async(req,resp) =>{
    try{
        const{id} = req.params;
        const [imagem1,imagem2,imagem3,imagem4,imagem5] = req.file.path;
        const resposta= await alterarImagem(imagem1,imagem2,imagem3,imagem4,imagem5,id)
        if(resposta !=4)
        throw new Error('A IMAGEM NAO PODE SER SALVA.');
        resp.send(204).send();
    }catch(err) {
        resp.status(400).send({
            erro: err.message
        })
    }
})

export default server;