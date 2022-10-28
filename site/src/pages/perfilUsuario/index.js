import Cabecario from "../../components/cabeçario";
import './index.scss'
import ProdutoEmCaixa from "../../components/produtoEmCaixa";
export default function PerfilUsuario() {

    return (
        <div className="main-container">

            <Cabecario esconder='sai' />
            <div className="lado">


                <div className="MENUZINHO">
                    MENU
                </div>
                <div className="perfil">
                    <div>
                        <h1> Perfil</h1>
                    </div>
                    <div> 
                        <img src="" alt="imagem" />
                        <h2> Usuario </h2>    
                        <p> @matheusCaldeira </p>
                    </div>
                    <div className="campos">
                        <h3>
                            Produtos Comprados
                        </h3>
                        <h4>
                            4
                        </h4>
                    </div>
                    <div className="campos">
                        <h3>
                            Produtos Favoritados
                        </h3>
                        <h4>
                            5
                        </h4>
                    </div>
                    <div className="campos">
                        <h3>
                            Pedidos em andamento
                        </h3>
                        <h4>
                            6
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