import axios  from 'axios';

const api = axios.create({
    baseURL: 'http://localhost:5000'
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