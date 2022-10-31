import { useEffect, useRef, useState } from 'react';
import { removerProdutos } from '../../api/admin/produto';
import { toast } from 'react-toastify';
import { useNavigate, useParams } from 'react-router-dom';
import CabecarioAdmin from '../../components/cabeçarioAdmin';
import { listarProdutosCadastrados } from "../../api/produtoApi";
import { API_URL } from '../../api/config'
import Menusidebar from '../../components/menusidebar/header'
import { PerfilADM } from '../../api/admin/adminApi';
import './index.scss'
import storage from 'local-storage';

export default function PerfilADMIN() {
    const [usuario, setUsuario] = useState('-');
    const [produto, setProduto] = useState([]);
    const [imagem1, setImagem1] = useState();
    const [info, setInfo] = useState([]);
    const navigate = useNavigate();
    const ref = useRef();
    const { id } = useParams();

    
    async function carregarProdutos() {
        const r = await listarProdutosCadastrados();
        setProduto(r);
        if (r.imagens.length > 0) {
            setImagem1(r.imagens[0]);
        }
    }
    async function carregarInfoAdm() {
        const r = await PerfilADM(storage('usuario-logado').id);
        setInfo(r);
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
        carregarInfoAdm();
    }, [])

    useEffect(() => {
        if(!storage('usuario-logado')){
            navigate('/loginadm')
        }else{
            const usuarioLogado = storage('usuario-logado').id;
            setUsuario(usuarioLogado.login);
        }
    }, [])

    return (
        <main className="tudo">

            <div className='cabecario'>
                <CabecarioAdmin />
            </div>
            <div className="lado">
 
                <div className="menu">
                 
                </div>

                <div className='mural'>
                        <div>
                            <h1>Perfil</h1>
                            <div>
                            {usuario}
                                {info.map(item =>
                                    <div className="">
                                        <img className="imagem" src={exibirImagem(item.imagem)} alt="" /> 
                                        <div className="infos"> <h1 className="inicial" > NOME :</h1> {item.nome} {usuario} </div>
                                        <div className="infos"> <h1 className="inicial" >ÁREA : </h1> {item.area}</div>
                                        <div className="infos"> <h1 className="inicial" > ATUA DESDE DE  :</h1> {item.atua.substr(0,10)}</div>
                                        <div className="infos"> <h1 className="inicial" > NASCIDO EM :</h1> {item.nascimento.substr(0,10)}</div>
                                    </div>)}
                            </div>

                    </div>

                </div>
                <div className="pra-baixo" >
                    <h1>Produtos Cadastrados</h1>
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

