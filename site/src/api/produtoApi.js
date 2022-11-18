import { API_URL } from './config';

import axios  from 'axios';
import { FaUncharted } from 'react-icons/fa';

const api = axios.create({
    baseURL: API_URL 
})




export async  function listarProdutosIncioxx(){
    const r = await api.get('/produto'); 
       return r.data;

}
export async  function listarProdutosIncioxxc(){
    const r = await api.get('/produto/di'); 
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

export async function filtroporNome(nome) {
    const r = await api.get(`/produtos/nome?nome=${nome}` );
    return r.data;
}

export async function Avaliar(idUsuario,idProduto,AvaliacaoX,dsAva){
    const r = await api.post('/avaliacao', {idUsuario,idProduto,AvaliacaoX,dsAva})
}

export async function ListarA(id){
    const r = await api.get('/ava/' + id)
    return r.data;
}


