import { API_URL } from './config';

import axios  from 'axios';

const api = axios.create({
    baseURL: API_URL 
})




export async  function listarProdutosIncioxx(){
    const r = await api.get('/produto'); 
       return r.data;

}

