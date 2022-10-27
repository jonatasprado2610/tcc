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