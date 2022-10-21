import { API_URL } from './config';
import axios from 'axios';

const api = axios.create({
    baseURL: API_URL
})

export async function cadastrarEndereco(idUsuario, referencia,  cep, logradouro, bairro, cidade, estado, numero, complemento) {

     const r = await api.post('/api/usuario/' + idUsuario +'/indereco', { referencia, cep, logradouro, bairro, cidade, estado, numero, complemento}); 
       return r.data;
}

export async function Listar(idUsuario) {

    const r = await api.get('/api/usuario/' + idUsuario +'/indereco'); 
    return r.data;
}