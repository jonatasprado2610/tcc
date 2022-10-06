import { API_URL } from './config'
import axios from 'axios'

const api = axios.create({
    baseURL: API_URL
})


export async function salvarProduto(nome, precoDe,precoPor , maxParcelas , qtdItens,
     categoriaDiaria,descricao, marca, tamanho, cor, categoria) {
    const r = await api.post('/admin/produto', { nome, precoDe, precoPor, maxParcelas, qtdItens,
         categoriaDiaria, descricao, marca,tamanho,cor, categoria  });
    return r.data;
}

export async function alterarProduto(id, nome, precoDe,precoPor , maxParcelas , qtdItens,
    categoriaDiaria,descricao, marca, tamanho, cor, categoria) {
   const r = await api.put('/admin/produto' + id, { nome, precoDe, precoPor, maxParcelas, qtdItens,
        categoriaDiaria, descricao, marca,tamanho,cor, categoria  });
   return r.data;
}


export async function salvarImagem(id,imagem1,imagem2,imagem3,imagem4,imagem5) {
    let form = new FormData();
    form.append('imagens', imagem1);
    form.append('imagens', imagem2);
    form.append('imagens', imagem3);
    form.append('imagens', imagem4);
    form.append('imagens', imagem5);

   const r = await api.put('/admin/produtoimg/' + id , form,{
       headers:{
           'Content-Type': 'multipart/form-data'
       }
   } );
   return r.data;
}


export async function removerProdutos(id) {
    const r = await api.delete('/admin/produto/' + id );
    return r.data;
}

export async function buscarProdutos() {
    const r = await api.get('/admin/produto/');
    return r.data;
 }
 

export async function carregarProdutosPorId(id) {
    const r = await api.get('/admin/produto/' + id );
    return r.data;
}


export async function buscarProPorNome(nome){
    const resposta = await api.get(`/produto/busca?nome=${nome}`);
    return resposta.data;
}
 