import './index.scss'
import Filtros from '../../components/filtros'
import Cabecario from '../../components/cabeçario'
import Rodape from '../../components/Rodape'
import CardP from '../../components/cardProduto'
import { useEffect, useState } from 'react'
import { listarProdutosIncioxx } from '../../api/produtoApi'
import Storage from 'local-storage'
export default function  Produtoy() {

  
      const[produto,setProduto]=useState([]);

      async function listar(){
        const r  = await listarProdutosIncioxx();
        setProduto(r)
      }


      useEffect(()=>{
           listar();
      }, [])

    return (
        <main className='page-pr'       
        >
            <Cabecario />

            <div className='sx1'>
                <Filtros />


                <div className='sx2'>
                    <h1>Resultados para ? </h1>


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