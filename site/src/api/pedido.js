import { API_URL } from './config';

import axios from 'axios'
const api = axios.create({
    baseURL: API_URL
})


export async function salvarNovoPedido(idUsuario, novoPedido) {
    const r = await api.post('/api/pedido/' + idUsuario, novoPedido);
    return r.data;
}


export async function ListarPs(){
    const r = await api.get('/admin/pedido');
    return r.data;
}

export async function alterarPedido(id,status) {
   const r = await api.put('/pedido/status/' + id, {status});
   return r.data;
}