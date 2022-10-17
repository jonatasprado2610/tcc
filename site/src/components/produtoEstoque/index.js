import './index.scss'

import { useEffect, useState } from 'react';
import { buscarProdutos, removerProdutos,buscarProPorNome } from '../../api/admin/produto';
import { toast } from 'react-toastify';
import { useNavigate } from 'react-router-dom';


export default function EstoqueProduto(){
    const [produtos, setProdutos ] = useState([]);
    const [filtro, setFiltro]= useState('');
    const navigate  = useNavigate();

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
        navigate( `/cadastrar/${id}` )
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

            <div>
            <table >
                <thead>
                <tr>
                            <th>ID</th>
                            <th>Produto</th>
                            <th>Preço</th>
                            <th>Parcelado</th>
                            <th>quantidade</th>
                            <th>destaque</th>
                           
                            <th>QTD categoria</th>
                            <th>marca</th>
                
                

            </tr>

                </thead>
                <tbody>
                    {produtos.map(item =>
                        <tr>
                        <td>{item.id}</td>
                        <td>{item.nome}</td>
                        <td>{item.preco}</td>
                        <td>{item.precopar}</td>
                        <td>{item.qtd}</td>
                        <td>{item.destaque ? 'sim':'nao'}</td>
                        <td>{item.qtd_categoria}</td>
                        <td>{item.marca}</td>
                        <span onClick={() => editar(item.id)}>  <img  src='./assets/images/alterarEstoque.png'/> </span> 
                        <span onClick={() => deletarProduto(item.id)}>  <img src='./assets/images/apagarEstoque.png'/> </span>
                        </tr>

                        )}    

                </tbody>
             
            
        </table>

            </div>

           
           </main>
    )

}