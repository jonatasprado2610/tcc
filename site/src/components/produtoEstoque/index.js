import './index.scss'

import { useEffect, useState } from 'react';
import { buscarProdutos, removerProdutos,buscarProPorNome } from '../../api/produto';
import { toast } from 'react-toastify';
import { Navigate } from 'react-router-dom';


export default function EstoqueProduto(){
const [produtos, setProdutos ] = useState([]);
    const [filtro, setFiltro]= useState('');



 async function Filtrar(){
     const resp= await buscarProPorNome(filtro);
    setProdutos(resp)
 }

 

async function carregarProdutos(){
    const r = await buscarProdutos();
    setProdutos(r);
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
    function editar(id) {
        Navigate( ` /admin/produto/${id}` )
    }


useEffect(() => {
    carregarProdutos();
}, [])

    return(
        <main>
                 <h1>ESTOQUE</h1>
            <div className='s1xx'>
             
                <div>
                    <input type="text" placeholder='BUSCAR EM ESTOQUE' value={filtro} onChange={e => setFiltro(e.target.value)} />
                </div>

                <div>
                    <img onClick={Filtrar}  src='./assets/images/lupa.png' alt=' ' />
                </div>
            </div>

            <section className='tudo'>

            <div className='.section'>
            {produtos.map(item => 
                <div className='containerEstoque'>
                    <div className='textoProduto'>
                        <div>{item.produto} </div>
                        <div className='informacoesEstoque'>
                            <div> {item.id} </div>
                            <div>  R$ {item.preco} </div>
                            <div> {item.marca} </div>
                        </div>
                    </div>
                    <div className='Estoque'>
                    <div> {item.quantidade} </div>

                    <div className='containerEstoque'>  </div>
                </div>

                <div className='imagensEstoque'>
                    <span onClick={() => editar(item.id)}>  <img src='./assets/images/alterarEstoque.png'/> </span> 
                    <span onClick={() => deletarProduto(item.id)}>  <img src='./assets/images/apagarEstoque.png'/> </span>
                </div>
            </div>
            )}
                
            </div>
            

            </section>
            


                    </main>
                )
     
} 