import { useEffect, useRef, useState } from 'react';
import { removerProdutos } from '../../api/admin/produto';
import { toast } from 'react-toastify';
import { useNavigate, useParams } from 'react-router-dom';
import CabecarioAdmin from '../../components/cabeçarioAdmin';
import { listarProdutosCadastrados } from "../../api/produtoApi";
import { API_URL } from '../../api/config'
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
    
    //const { id } = useParams();

    async function carregarProdutos() {
        const r = await listarProdutosCadastrados();
        setProduto(r);

        if (r.length > 0) {
            setImagem1(r[0].imagem);
        }
    }
    async function carregarInfoAdm() {
        const id = storage('usuario-logado').id
        const r = await PerfilADM(id);
        setInfo(r);
    }

    function exibirImagem(imagem) {
        if (imagem == undefined) {
            return '/assets/images/pngwing.com.png'            
        }
        else if (imagem.substr(0, 4) == 'http') {
            return imagem;
        }
        else if (typeof (imagem) == 'string') {
            console.log(`${API_URL}/${imagem}`)
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
        if(!storage('usuario-logado')){
            navigate('/loginadm')
        }else{
            const usuarioLogado = storage('usuario-logado').id;
            setUsuario(usuarioLogado.login);
        }
    }, [])
    useEffect(() => {
        carregarProdutos();
        carregarInfoAdm();
    }, [])
    return (
        <main className="tudoo">

            <div className='cabecario'>
                <CabecarioAdmin />
            </div>
            <div className="lado">
 
                <div className="menu">
                 
                </div>

                <div className='mural'>
                        <div>

                            <div className="perfilAdm">
                            <h1>Perfil Administrador</h1>
                                {info.map(item =>
                                    <div className="perfilAdm">
                                        <img className="imagem" src={exibirImagem(item.imagem)} alt="" /> 
                                        <div className="info"> <h1 className="inicialAdm" > NOME :</h1> <p>{item.nome.toUpperCase()} </p> </div>
                                        <div className="info"> <h1 className="inicialAdm" >ÁREA : </h1>  <p> {item.area} </p> </div>
                                        <div className="info"> <h1 className="inicialAdm" > ATUA DESDE DE  :</h1> <p> {item.atua.substr(0,10)} </p> </div>
                                        <div className="info"> <h1 className="inicialAdm" > NASCIDO EM :</h1> <p> {item.nascimento.substr(0,10)} </p> </div>
                                    </div>)}
                            </div>

                    </div>

                </div>
                <div className="pra-baixo" >
                    <h1>Ultimos Produtos Cadastrados</h1>
                    {produto.map(item =>
                        <div className="card">
                            <img className="imagensProdutos" src={exibirImagem(item.imagem)} alt="" />
                            <div className="infos"> <p className="inicial" > ID :</p> {item.id}</div>
                            <div className="infos"> <p className="inicial" >NOME : </p> {item.nome}</div>
                            <div className="infos"> <p className="inicial" > PREÇO :</p> {item.precopar}</div>
                            <div className="infos"> <p className="inicial" > MARCA :</p> {item.marca}</div>
                            <hr className="traco" />
                            <div className="infos"> <p className="inicial" > DISPONIVEIS : </p> {item.qtd}</div>
                            <div className='fundo'> 
                            <span onClick={() => editar(item.id)}>  <img className='imagens' src='/assets/images/alterarEstoque.png' /> </span>
                            <span onClick={() => deletarProduto(item.id)}>  <img className='imagens' src='/assets/images/apagarEstoque.png' /> </span>
                            </div>
                        </div>
                    )}
                </div>
            </div>
        </main>
    )
}

