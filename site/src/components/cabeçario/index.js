
import './index.scss';

import { Link, useNavigate } from 'react-router-dom';
import { useState } from 'react';
import Menuusario from '../menuususario/header'
import { filtroporNome } from '../../api/produtoApi';

export default function Cabecario(props) {

    //const [Produtos, setProdutos] = useState([]);
    const [Nome, setNome] = useState('');
    const navigate= useNavigate();

    async function filtrarNome() {
        const resp = await filtroporNome(Nome);
        props.filtrarPorNome(resp);
    }

    return (

        <section className='xpage-cabecario'>
            <div className='cxcxx'>
                <div className='xx1'>

                    <div className='xsub1'>
                        <Link to="/"> <img className='imagi' src="/assets/images/image 1067.png" /> </Link>
                        <h1> Overland</h1>

                    </div>

                    <div className='xsub2'>
                            <input type="text" className='search-txt' placeholder='O que você procura? ;-;' value={Nome} onChange={e => setNome(e.target.value)} />
                            <Link to = '/produtoy' onClick={filtrarNome}> <img src='/assets/images/lupa2.png' /> </Link>

                    </div>

                    <div className='xsubx'>
                        <div className='imagenzinhas'> 
                        <Link to="/perfil/usuario"> <img src='/assets/images/image 1066.png' alt='1' /> </Link>
                        </div>
                        <div className='imagenzinhas'>
                        <Link to="/carrinho"> <img src='/assets/images/image 1065.png' alt='1' /> </Link>
                        </div>
                        <div className='imagenzinhas'>
                        <Menuusario />
                        </div>
                    </div>
                </div>
                <div className={props.esconder}>


                    <div className='xx2'>
                        <p>ESPORTES</p>
                        <hr className='barra'/>
                        <p>MASCULINO</p>
                        <hr className='barra'/>
                        <p>FEMININO</p>
                        <hr className='barra'/>
                        <p>INFANTIL</p>
                        <hr className='barra'/>
                        <p>CALÇADOS</p>
                        <hr className='barra'/>
                        <p>ROUPAS</p>
                        <hr className='barra'/>
                        <p>ACESSÓRIOS</p>
                        <hr className='barra'/>
                        <p>EQUIPAMENTOS</p>
                        <hr className='barra'/>
                        <p>MARCAS</p>


                    </div>
                </div>
            </div>

        </section>
    )
}

