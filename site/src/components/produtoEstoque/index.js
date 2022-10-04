import './index.scss'

import { useEffect, useState } from 'react';
import { buscarProdutos, removerProdutos } from '../../api/produto';
import { toast } from 'react-toastify';

export default function EstoqueProduto(){
const [produtos, setProdutos ] = useState([]);

async function carregarProdutos(){
    const r = await buscarProdutos();
    setProdutos(r);
    console.log(r)
    }
    
    async function deletarProduto(id) {
        try {
            await removerProdutos(id)
            await carregarProdutos();
            toast.dark('produto removido com sucesso');
        } catch (err) {
            toast.error(err.response.data.erro)
            }
    }

useEffect(() => {
    carregarProdutos();
}, [])

    return(
     <section>
            {produtos.map(item => 
                <div className='containerEstoque'>
                    <div className='textoProduto'>
                        <div>{item.produto} </div>
                        <div className='informacoesEstoque'>
                            <div> {item.id} </div>
                            <div> R$ {item.preco} </div>
                            <div> {item.marca} </div>
                        </div>
                    </div>
                    <div className='Estoque'>
                    <div> {item.quantidade} </div>
    
                    <div className='containerEstoque'>  </div>
                </div>
    
                <div className='imagensEstoque'>
                    <span>  <img src='./assets/images/alterarEstoque.png'/> </span> 
                    <span onClick={() => deletarProduto(item.id)}>  <img src='./assets/images/apagarEstoque.png'/> </span>
                </div>
            </div>
        )}
    
    </section>
            
    )
} 