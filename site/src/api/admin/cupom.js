import { API_URL } from '../config'
import axios from 'axios'

const api = axios.create({
    baseURL: API_URL
})


export async function salvarCupom(codigo,valor,qtd) {

    const r = await api.post('/admin/cupom', {codigo,valor,qtd});
    return r.data;
}
export async function listarCupom() {
    const r = await api.get('/admin/cupom');
    return r.data;
}