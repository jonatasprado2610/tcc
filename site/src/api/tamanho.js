import { API_URL } from './config';

import axios from 'axios'
const api = axios.create({
    baseURL: API_URL
})

export async function listarTamanhos() {
    const r = await api.get('/api/tamanho');
    return r.data;
}
