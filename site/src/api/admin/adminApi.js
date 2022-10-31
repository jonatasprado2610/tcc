import { API_URL } from '../config';
import axios  from 'axios';
const api = axios.create({
    baseURL: API_URL
})

export async  function loginADM (login, senha){
    const r = await api.post('/admin/login' ,{
        login: login, 
        senha: senha
       });
       return r.data;

}

export async  function PerfilADM (id){
    const r = await api.get(`/admin/perfil/${id}` );
       return r.data;
}