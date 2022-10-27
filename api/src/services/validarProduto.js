import { buscarCategoriaPorId } from "../repository/categoriaRepository.js";
import { buscarMarcaPorId } from "../repository/marcarepository.js";
import { buscarTamanhoPorId } from "../repository/tamanhoRepository.js";
import { buscarCorPorId } from "../repository/corRepository.js";

export async function validarProduto(produto){

    if (produto.nome == undefined || produto.nome == '') {
        throw new Error('Nome do produto é obrigatório!');
    }
    else if (isNaN(produto.precoDe) || produto.precoDe <= 0) {
        throw new Error('Preço inicial do produto é obrigatório!');
    }
    else if (isNaN(produto.precoPor) || produto.precoPor <= 0) {
        throw new Error('Preço Por do produto é obrigatório!');
    }
    else if (produto.maxParcelas == undefined  || isNaN(produto.maxParcelas)) {
        throw new Error('max Parcelas o é obrigatório!');
    }


    else if (produto.descricao == undefined || produto.descricao == '') {
        throw new Error('Descricao é obrigatório!');
    }



    const marca = await buscarMarcaPorId(produto.marcas);
    if (marca == undefined) {
        throw new Error('marca inválida');
    }

    const tam = await buscarTamanhoPorId(produto.tamanhos);
    if (tam == undefined) {
        throw new Error('tamanho inválido');
    }

    const co= await buscarCorPorId(produto.cores);
    if (co == undefined) {
        throw new Error('cor inválida');
    }

    const cat = await buscarCategoriaPorId(produto.categorias);
    if (cat == undefined) {
        throw new Error('categoria inválida');
    }

}
