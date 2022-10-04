import './index.scss'

import { useEffect, useState } from 'react';
import { buscarProdutos } from '../../api/produto';

export default function EstoqueProduto(){
const [produtos, setProdutos ] = useState([]);

async function carregarProdutos(){
    const r = buscarProdutos();
    setProdutos(r);
}

useEffect(() => {
    carregarProdutos();
}, [])

    return(
     <section>
        {produtos.map(item =>{
            <div className='containerEstoque'>
                    <div className='textoProduto'>
                        <div>{item.produto} </div>
                        <div className='informacoesEstoque'>
                            <div> {item.id} </div>
                            <div> R$ {item.preco} </div>
                            <div> {item.marca} </div>
                        </div>
                    </div>

                <hr/>
                    
                <div className='Estoque'>
                    <div> {item.quantidade} </div>
    
                    <div className='containerEstoque'> ? </div>
                </div>
    
                <div className='imagensEstoque'>
                    <span>  <img src='./assets/images/alterarEstoque.png'/> </span> 
                    <span>  <img src='./assets/images/apagarEstoque.png'/> </span>
                </div>
            </div>
        })}
    
    </section>
            
    )
} 