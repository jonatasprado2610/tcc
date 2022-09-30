import { API_URL } from './config'
import axios from 'axios'

const api = axios.create({
    baseURL: API_URL
})


export async function salvarProduto(nome, precoDe,precoPor , maxParcelas , qtdItens,
     categoriaDiaria,descricao, marca, tamanho, cor, categoria) {
    const r = await api.post('/admin/produto', { nome, precoDe, precoPor, maxParcelas, qtdItens,
         categoriaDiaria, descricao, marca,tamanho,cor, categoria  });
    return r.data;
}


 