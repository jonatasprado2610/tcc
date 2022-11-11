import Cabecario from "../../components/cabeçario";
import './index.scss'
import { useState, useEffect } from "react";
import { Await, useNavigate } from "react-router-dom";
import ProdutoEmCaixa from "../../components/produtoEmCaixa";
import { PerfilUsuarioApi, PerfilUsuarioPedidosAndamento, PerfilUsuarioProdutos, PerfilUsuarioProdutosComprados } from "../../api/usuario";
import storage from 'local-storage';
export default function PerfilUsuario() {

    const [usuario, setUsuario] = useState('-');
    const [infoPerfil, setInfoPerfil] = useState([]);
    const [comprados, setComprados] = useState([]);
    const [andamento, setAndamento] = useState([]);
    const [carrinho, setCarrinho] = useState([]);
    const navigate = useNavigate();

    async function carregarInfoUsuario() {
        const id = storage('cliente-logado').id;
        const r = await PerfilUsuarioApi(id);
        setInfoPerfil(r);
    }
    async function carregarProdutosComprados(){
        const id = storage('cliente-logado').id;
        const r = await PerfilUsuarioProdutosComprados(id);
        setComprados(r)
    }
    async function carregarPedidosAndamento(){
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
        if(!storage('cliente-logado')){
            navigate('/loginusu')
        }else{
            const usuarioLogado = storage('cliente-logado').id;
            setUsuario(usuarioLogado.login);
        } }, [])
        
    return (
        <div className="main-container">

            <Cabecario esconder='sai' />
            <div className="lado">

                <div className="perfil">
                    <div>
                        <h1> Perfil</h1>
                    </div>
                    <div> 
                        {infoPerfil.map(item => 
                            <div>
                                <h1> Usuario</h1>
                                <p> {item.nome} </p>
                                <h1> Email</h1>
                                <p> {item.email} </p>
                        </div>
                        )}
                    </div>
                    <div className="campos">
                        {comprados.map(item =>
                        <div> 
                            <h3> Produtos Comprados </h3>
                            <h4> {item.comprados} </h4>
                        </div> 
                        )} 

                    </div>
                    <div className="campos">
                         {andamento.map( item =>
                        <div>
                        <h3>
                            Pedidos em andamento
                        </h3>
                        <h4>
                            {item.pedidoEmAndamento}
                        </h4>
                        </div>
                        )}
                    </div>
                    <div className="campos">
                        
                        <h3>
                            Produtos no carrinho
                        </h3>
                        <h4>
                            {carrinho}
                        </h4>
                    </div>

                        
                </div>
                <div className="Historico">
                    <ProdutoEmCaixa/>
                </div>



            </div>
        </div>
    )
}