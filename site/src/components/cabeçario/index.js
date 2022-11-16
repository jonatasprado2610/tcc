
import './index.scss';

import { Link, useNavigate } from 'react-router-dom';
import storage from 'local-storage';
import { useEffect, useState } from 'react';
import Menuusario from '../menuususario/header'

export default function Cabecario(props) {
    /* 
        const [filtro, setFiltro]= useState('');
        const [produtos, setProdutos ] = useState([]);
    
        async function Filtrar(){
            const resp= await buscarProPorNome(filtro);
           setProdutos(resp)
        }
    
        async function carregarProdutos(){
            const r = await buscarProdutos();
            setProdutos(r);
            }
        const navigate = useNavigate();
    
       useEffect(() =>{
            if(storage('asuario-logado')){
                    navigate('/perfil/usuario')
            }
     
        }, [])
        useEffect(() =>{
            if(!storage('asuario-logado')){
                    navigate('/loginusu')
            }
     
        }, [])
     
     */
    return (

        <section className='xpage-cabecario'>
            <div className='cxcxx'>
                <div className='xx1'>

                    <div className='xsub1'>
                        <Link to="/"> <img className='imagi' src="/assets/images/image 1067.png" /> </Link>
                        <h1> Overland</h1>

                    </div>

                    <div className='xsub2'>

                        <input type="text" placeholder="O que você procura? ;-;" />

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

