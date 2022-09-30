import { API_URL } from './config';

import axios from 'axios'
const api = axios.create({
    baseURL: API_URL
})

export async function listarCores() {
    const r = await api.get('/api/cores');
    return r.data;
}