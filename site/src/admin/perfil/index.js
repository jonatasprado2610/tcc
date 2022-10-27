import './index.scss'
import Navegacaoadm from "../../components/navegacaoadm";

import { useEffect, useState } from 'react';
import { removerProdutos } from '../../api/admin/produto';
import { toast } from 'react-toastify';
import { useNavigate } from 'react-router-dom';
import { listarProdutosCadastrados } from "../../api/produtoApi";


import CabecarioAdmin from '../../components/cabeçarioAdmin';


export default function PerfilADMIN() {


export default function PerfilADMIN() {
    const [produto, setProduto] = useState([]);
    const navigate  = useNavigate();
    async function carregarProdutos(){
        const r = await listarProdutosCadastrados();
        setProduto(r);
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
        

    return (
        <section>
            <Navegacaoadm />
            
            {produto.map(item =>
                <tr>
                        <td>{item.imagem}</td>
                        <td>{item.id}</td>
                        <td>{item.nome}</td>
                        <td>{item.precopar}</td>
                        <td>{item.qtd}</td>
                        <td>{item.marca}</td>
                        <span onClick={() => editar(item.id)}>  <img  className='imagens' src='/assets/images/alterarEstoque.png'/> </span> 
                        <span onClick={() => deletarProduto(item.id)}>  <img className='imagens' src='/assets/images/apagarEstoque.png'/> </span>
                        </tr>

            )}    
            
        </section>
        <main className='m'>

            <CabecarioAdmin />
            <div className='lads'>
                <div>
                    <Navegacaoadm />
                    <h1>MenuZinho</h1>
                </div>
                <div className='mural'>
                    <div className='perfil'>
                        <div>
                            <h1>Perfil</h1>
                            <div>
                                <img src='' alt='back-gorund'/>
                            </div>
                        </div>
                        <div className='info-adm'>
                            <div>
                                 <img src='' alt='imagem'/>
                            </div>
                            <div>
                                <h3>
                                    MATHEUS
                                </h3>
                                <h4>
                                    @matheus
                                </h4>
                            </div>
                              
                        </div>
                        <div>
                            <h1>
                                Área
                            </h1>
                            <h2>
                                administração
                            </h2>
                        </div>
                        <div>
                            <h1>
                                Atua desde
                            </h1>
                            <h2>
                                11/11/2009
                            </h2>
                        </div>
                        <div>
                            <h1>
                                Nascido em
                            </h1>
                            <h2>
                                20/05/2006
                            </h2>
                        </div>
                        
                    </div>
                    <div>
                        <h1>Produtos Cadastrados</h1>
                    </div>
                </div>
            </div>



        </main>
    );
}