import axios  from 'axios';

const api = axios.create({
    baseURL: 'http://localhost:5000'
})

export async  function loginADM (login, senha){
    const r = await api.post('/admin/login' ,{
         login: login, 
        senha: senha
       });
       return r.data;

}