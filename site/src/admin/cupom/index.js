import { useEffect, useRef, useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import CabecarioAdmin from '../../components/cabeçarioAdmin';
import { API_URL } from '../../api/config'
import './index.scss'
import storage from 'local-storage';

export default function CadastrarCupom() {
    const [cupom, setCupom] = useState([]);

    return (
        <main className="tudo">

            <div className='cabecario'>
                <CabecarioAdmin />
            </div>
            <div className="pagina">

                <div className='mural'>
                    <div className='lado'>
                        <div className='baixo'>
                            <h1>Cadastrar Cupom</h1>
                            <h2>Nome Cupom </h2>
                            <input className='teste' type='text' />
                            <h2>Valor Cupom </h2>
                            <input className='teste' type='text' />

                        </div>
                        <div>
                            <h2> Cupons Registrados </h2>
                            <div className='div'>
                                {cupom.map(item =>
                                    <div>
                                        <div>{item.nome}  </div>
                                        <hr className='barra'/>
                                        <div>{item.criado} </div>
                                        <hr  className='barra'/>
                                        <div>{item.Desconto} </div>
                                    </div>
                                )}
                            </div>

                        </div>
                    </div>

                    <div>
                        <button> Cadastrar Cupom   </button>
                        <button> Alterar Cupom  </button>
                    </div>


                </div>
            </div>
        </main>
    )
}

