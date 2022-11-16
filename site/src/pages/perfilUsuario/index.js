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
                <div>
                    <h3> Sobre os seus dados </h3>
                    <p className="texto"> Seus dados são tratados para as finalidades descritas neste documento. Nesse sentido, nós nunca comercializamos ou compartilhamos seus dados pessoais com fins lucrativos ou econômicos.
                        Ressalta-se que podemos compartilhar seus dados pessoais com empresas que prestam serviços para nós, conforme determinado com base na logística e organização interna da empresa. Tomaremos as medidas disponíveis no mercado e ao nosso alcance para que sejam observadas todas as normas de segurança da informação e para que o tratamento seja realizado com observância estrita das finalidades aqui descritas.
                        Na Overland, seus dados serão acessados apenas por profissionais devidamente autorizados, respeitando sempre os princípios da finalidade, adequação e necessidade para a realização dos nossos serviços.
                        Nós te avisaremos caso ocorra qualquer incidente de segurança ou de privacidade envolvendo o tratamento de seus dados pessoais, bem como quais medidas foram adotadas para conter o incidente e como este evento pode impactar você diretamente.
                        Seus dados pessoais serão armazenados pelo período de tempo necessário para o cumprimento das finalidades do tratamento em questão. O portal do titular sempre está disponível para que você solucione dúvidas em relação ao tratamento de seus dados pessoais, a justificativa de armazenamento, finalidade do tratamento e o tempo que podemos reter seus dados. </p>
                </div>

            </div>
            <Rodape />
        </div>
    )
}