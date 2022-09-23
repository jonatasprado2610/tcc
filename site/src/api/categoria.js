import { API_URL } from './config';

import axios from 'axios'
const api = axios.create({
    baseURL: API_URL
})

export async function listarCategorias() {
    const r = await api.get('/api/categoria');
    return r.data;
}