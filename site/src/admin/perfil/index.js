import './index.scss'
import Navegacaoadm from "../../components/navegacaoadm";
import CabecarioAdmin from '../../components/cabeçarioAdmin';


export default function PerfilADMIN() {


    return (
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