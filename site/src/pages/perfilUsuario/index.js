import Cabecario from "../../components/cabeçario";
import './index.scss'
import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import 'react-multi-carousel/lib/styles.css';
import { PerfilUsuarioApi, PerfilUsuarioPedidosAndamento, PerfilUsuarioProdutosComprados } from "../../api/usuario";
import storage from 'local-storage';
import Rodape from "../../components/Rodape";

export default function PerfilUsuario() {


    const [usuario, setUsuario] = useState('-');
    const [infoPerfil, setInfoPerfil] = useState([]);
    const [comprados, setComprados] = useState([]);
    const [andamento, setAndamento] = useState([]);
    const [carrinho, setCarrinho] = useState([0]);
    const navigate = useNavigate();
    const [produtos, setProdutos] = useState([]);

    async function carregarInfoUsuario() {
        const id = storage('cliente-logado').id;
        const r = await PerfilUsuarioApi(id);
        setInfoPerfil(r);
    }
    async function carregarInfoUsuario() {
        const id = storage('cliente-logado').id;
        const r = await PerfilUsuarioApi(id);
        setInfoPerfil(r);
    }

    async function carregarProdutosComprados() {
        const id = storage('cliente-logado').id;
        const r = await PerfilUsuarioProdutosComprados(id);
        setComprados(r)
    }
    async function carregarPedidosAndamento() {
        const id = storage('cliente-logado').id;
        const r = await PerfilUsuarioPedidosAndamento(id);
        setAndamento(r)
    }

    async function carregarProdutosCarrinho() {
        const contador = storage('carrinho');
        const a = contador.length
        setCarrinho(a)
    }

    useEffect(() => {
        carregarInfoUsuario();
        carregarProdutosComprados();
        carregarPedidosAndamento();
        carregarProdutosCarrinho();
    }, [])

    useEffect(() => {
        if (!storage('cliente-logado')) {
            navigate('/loginusu')
        } else {
            const usuarioLogado = storage('cliente-logado').id;
            setUsuario(usuarioLogado.login);
        }
    }, [])

    return (
        <div className="main-container">

            <Cabecario esconder='sai' />
            <div className="lado">

                <div className="perfil">
                    {infoPerfil.map(item =>
                        <div>
                            <h3> Perfil "{item.nome}"</h3>
                        </div>
                    )}
                    <div>
                        <img className="baixoImagem" src="/assets/images/image 281.png" />
                    </div>
                    <div>
                        {infoPerfil.map(item =>
                            <div>
                                <h3> Usuario</h3>
                                <p> {item.nome} </p>
                                <h3> Email</h3>
                                <p> {item.email} </p>
                            </div>
                        )}
                    </div>
                    <div className="campos">
                        {comprados.map(item =>
                            <div>
                                <h3> Produtos Comprados </h3>
                                <p> {item.comprados} </p>
                            </div>
                        )}

                    </div>
                    <div className="campos">
                        {andamento.map(item =>
                            <div>
                                <h3>
                                    Pedidos em andamento
                                </h3>
                                <p>
                                    {item.pedidoEmAndamento}
                                </p>
                            </div>
                        )}
                    </div>
                    <div className="campos">

                        <h3>
                            Produtos no carrinho
                        </h3>
                        <p>
                            {carrinho}
                        </p>
                    </div>


                </div>

            </div>
            <Rodape/>
        </div>
    )
}