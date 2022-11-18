import './index.scss'
import Cabecario from '../../components/cabeçario';
import Rodape from '../../components/Rodape'
import CardP from '../../components/cardProduto'
import { useEffect, useState } from 'react'
import { listarProdutosIncioxxc} from '../../api/produtoApi'




export default function  Produtoy() {
    
    
    const[produto,setProduto]=useState([]);

      async function listar(){
        const r  = await listarProdutosIncioxxc();
        setProduto(r)
      }

      function filtrarPorNome(produtos) {
        setProduto(produtos);
      }


      useEffect(()=>{
           listar();
      }, [])

    return (
        <main className='page-pr'       
        >
            <Cabecario esconder='sai' filtrarPorNome={filtrarPorNome} />

            <div className='sx1'>


                <div className='sx2'>
                    <h1>Resultados para </h1>


                    <div className='sxD'>
                        {produto.map(
                            item =>

                            <CardP  item={item}/>
                        )}

          



                    </div>
                </div>
            </div>
            <Rodape/>




        </main>
    )
}