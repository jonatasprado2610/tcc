import { API_URL } from './config';

import axios  from 'axios';

const api = axios.create({
    baseURL: API_URL 
})



export async function cadUsu(nome,nascimento,rg,cpf,email,senha){
     const resposta = await api.post('/criarconta', {
        nome:  nome ,
        nascimento:  nascimento,
        rg: rg,
        cpf:   cpf   ,
        email:   email,
        senha:   senha
     })

     return resposta.data;
     

}

export async  function loginU(email, senha){
    const r = await api.post('/usuario/login',{ email: email, senha: senha }); 
       return r.data;

}

export async  function PerfilADM (id){
    const r = await api.get(`/usuario/perfil/${id}` );
       return r.data;
}