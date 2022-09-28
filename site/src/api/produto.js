import { API_URL } from './config'
import axios from 'axios'

const api = axios.create({
    baseURL: API_URL
})


export async function salvarProduto(categoria, marca, tamanho, cor, nome, precoDe,precoPor , maxParcelas , qtdItens, categoriaDiaria, descricao) {
    const r = await api.post('/admin/produto', { categoria, marca, tamanho, cor, nome, precoDe, precoPor, maxParcelas, qtdItens, categoriaDiaria, descricao });
    return r.data;
}


