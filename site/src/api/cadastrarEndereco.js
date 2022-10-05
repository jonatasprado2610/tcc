import { API_URL } from './config';
import axios from 'axios';

const api = axios.create({
    baseURL: API_URL
})

export async function cadastrarEndereco(idUsuario, logradouro, cep, rua, bloco, numero) {
    const r = await api.post('/api/cadastrarendereco', {
        idUsuario: idUsuario,
        logradouro:logradouro,
        cep:cep,
        rua:rua,
        bloco:bloco, 
        numero:numero

    });
    return r.data;
}