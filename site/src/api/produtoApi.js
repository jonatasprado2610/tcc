import { API_URL } from './config';

import axios  from 'axios';

const api = axios.create({
    baseURL: API_URL 
})




export async  function listarProdutosIncioxx(){
    const r = await api.get('/produto'); 
       return r.data;

}


export async function carregarProdutosPorId(id) {
    const r = await api.get('/admin/produto/' + id );
    return r.data;
}

export async function listarProdutosCadastrados() {
    const r = await api.get('/produto/cadastrados');
    return r.data;
}

export async function listarProdutosporMarca(marca) {
    const r = await api.get('/produtos/marca/' + marca );
    return r.data;
}

export async function listarProdutosporTamanho(tamanho) {
    const r = await api.get('/produtos/tamanho/' + tamanho );
    return r.data;
}

export async function listarProdutosporGenero(genero) {
    const r = await api.get('/produtos/gender/' + genero );
    return r.data;
}

export async function listarProdutosporcategoria(categoria) {
    const r = await api.get('/produtos/categoria/' + categoria );
    return r.data;
}