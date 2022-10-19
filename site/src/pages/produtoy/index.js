import './index.scss'
import Filtros from '../../components/filtros'
import Cabecario from '../../components/cabeçario'
import Rodape  from '../../components/Rodape'
import { listarProdutosIncioxx } from '../../api/produtoApi';
import { useEffect, useState } from 'react';
import { API_URL } from '../../api/config';

export default function Produtoy(props){

      const [produtos, setProdutos] = useState([]);

      function exibir(imagem) {
            
            if (!imagem)
                return ``;
            else
                return `${API_URL}/${imagem}`
                
        }


    async function listar(){
        
        const r = await listarProdutosIncioxx();
        setProdutos(r);
        console.log(r);
    }

    useEffect(() =>{
       listar();
    }, [])



    return(
        <main className='page-pr'
                  {...produtos.map(item =>
                        item={item}                
                  )}
        >
            <Cabecario/>
           
            <div className='sx1'>
             <Filtros/>


              <div className='sx2'>
                 <h1>Resultados para ? </h1>


                  <div className='sxD'
                            
       
                   
                  >
                     <div className='card'>
                          <div className='sx3'>
                                <img className='sximg' src='./assets/images/Star 14.png' alt=''/>
                                <img className='sximg' src='./assets/images/carinho.png' alt=''/>
                          </div>
                          <div>
                            <img className='imgx'  src={exibir(props.item.imagem)} />
                           <p className='sxp'>{props.item.nome} </p>
                          <div>
                          <img src='./assets/images/star1.png' alt=''/>
                          <img src='./assets/images/star1.png' alt=''/>
                          <img src='./assets/images/star1.png' alt=''/>
                          <img src='./assets/images/star1.png' alt=''/>
                          <img src='./assets/images/star1.png' alt=''/>
                          </div>
                          <p>R${props.item.preco}</p>
                          <p>ou 4x de {props.item.precopar}</p>    
                          </div>
                                                   
                     </div>

                     
                 
                 

           
                    
                    
                 </div>
             </div>
            </div>
            
                
            
            
        </main>
    )
}