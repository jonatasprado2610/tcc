import { Router } from 'express';
import { novoProduto, salvarProdutoCategoria } from '../repository/produtoRepository.js';
const server = Router();


server.post('/admin/produto', async (req, resp) => {
    try {
        const produto = req.body;

        const idProduto = await novoProduto(produto);
        const x = await salvarProdutoCategoria(produto);
        
        resp.status(204).send();
    }
    catch (err) {
        return resp.status(400).send({
            erro: err.message
        })
    }
})



export default server;