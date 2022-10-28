import './index.scss'
import Navegacaoadm from "../../components/navegacaoadm";

import { useEffect, useState } from 'react';
import { removerProdutos } from '../../api/admin/produto';
import { toast } from 'react-toastify';
import { useNavigate } from 'react-router-dom';
import CabecarioAdmin from '../../components/cabeçarioAdmin';
import { listarProdutosCadastrados } from "../../api/produtoApi";
import { API_URL } from '../../api/config'
import Menusidebar from '../../components/menusidebar/header'
import './index.scss'

export default function PerfilADMIN() {
    const [produto, setProduto] = useState([]);
    const [imagem1, setImagem1] = useState();
    const navigate = useNavigate();
    async function carregarProdutos() {
        const r = await listarProdutosCadastrados();
        setProduto(r);
        if (r.imagens.length > 0) {
            setImagem1(r.imagens[0]);
        }
    }
    function exibirImagem(imagem) {
        if (imagem == undefined) {

            return '/assets/images/pngwing.com.png'

        }
        else if (typeof (imagem) == 'string') {
            return `${API_URL}/${imagem}`
        }
        else {
            return URL.createObjectURL(imagem);
        }
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
        navigate(`/cadastrar/${id}`)
    }

    useEffect(() => {
        carregarProdutos();
    }, [])


    return (
        <main className="tudo">

            <div className='cabecario'>
                <CabecarioAdmin />
            </div>
            <div className="lado">
                <div className="menu">
                    <Menusidebar />
                </div>

                <div className='mural'>
                    <div className='perfil'>
                        <div>
                            <h1>Perfil</h1>
                            <div>
                                <img src='' alt='back-gorund' />
                            </div>
                        </div>
                        <div className='info-adm'>
                            <div>
                                <img src='' alt='imagem' />
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
                <div className="pra-baixo" >
                    {produto.map(item =>
                        <tr className="card">
                            <img className="imagem" src={exibirImagem(item.imagem)} alt="" />
                            <td className="infos"> <p className="inicial" > ID :</p> {item.id}</td>
                            <td className="infos"> <p className="inicial" >NOME : </p> {item.nome}</td>
                            <td className="infos"> <p className="inicial" > PREÇO :</p> {item.precopar}</td>
                            <td className="infos"> <p className="inicial" > MARCA :</p> {item.marca}</td>
                            <hr className="traco" />
                            <td className="infos"> <p className="inicial" > DISPONIVEIS : </p> {item.qtd}</td>
                            <span onClick={() => editar(item.id)}>  <img className='imagens' src='/assets/images/alterarEstoque.png' /> </span>
                            <span onClick={() => deletarProduto(item.id)}>  <img className='imagens' src='/assets/images/apagarEstoque.png' /> </span>
                        </tr>

                    )}
                </div>
            </div>
        </main>
    )
}    
