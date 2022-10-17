
import './index.scss'

import { useState , useEffect} from 'react';
import { listarProdutosIncioxx } from '../../api/produtoApi';
import { API_URL } from '../../api/config';


export default function OfertasDiarias(props) {

       
        function exibir(imagem){
                if(!imagem)
                return ``
                else 
                return `${API_URL}/${imagem}`
        }
    
     

      
   
    return (
        <section className='page-oferta'>

         
                 
                     <div className='card'>
                     
                        <div> <img src={exibir(props.item.imagem)} alt="" /> 
                        </div>    
                        <p className='c1'> {props.item.nome} </p>
                    
                        <p className='c2'>{props.item.preco} </p>
                     
                   </div>
                
                
 
            
            
          </section>
      )

       

    }
