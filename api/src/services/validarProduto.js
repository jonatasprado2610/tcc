import { buscarCategoriaPorId } from "../repository/categoriaRepository.js";
import { buscarMarcaPorId } from "../repository/marcarepository.js";
export async function validarProduto(produto){

    if (produto.nome == undefined || produto.nome == '') {
        throw new Error('Nome do produto é obrigatório!');
    }
    else if (isNaN(produto.precoDe) || produto.precoDe <= 0) {
        throw new Error('Preço do produto é obrigatório!');
    }
    else if (isNaN(produto.precoPor) || produto.precoPor <= 0) {
        throw new Error('Preço do produto é obrigatório!');
    }
    else if (produto.maxParcelas == undefined  || isNaN(produto.maxParcelas)) {
        throw new Error('max Parcelas o é obrigatório!');
    }

    else if (produto.qtdItens == undefined || isNaN(produto.qtdItens)) {
        throw new Error('qtdItens o é obrigatório!');
    }

    else if (produto.descricao == undefined) {
        throw new Error('Descricao é obrigatório!');
    }



    const marca = await buscarMarcaPorId(produto.marca);
    if (marca == undefined) {
        throw new Error('categoria inválida');
    }

    const tam = await buscarMarcaPorId(produto.tamanho);
    if (tam == undefined) {
        throw new Error('categoria inválida');
    }

    const cat = await buscarCategoriaPorId(produto.categoria);
    if (cat == undefined) {
        throw new Error('categoria inválida');
    }

}
