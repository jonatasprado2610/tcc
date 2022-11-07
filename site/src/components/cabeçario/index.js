
import './index.scss';

import { Link, useNavigate } from 'react-router-dom';
import storage from 'local-storage';
import { useEffect,useState } from 'react';

export default function Cabecario(props){
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
        return(

            <section className='page-cabecario'>
                <div className='x1'>
                    
                     
                <div className='sub1'>
                <Link to="/"> <img src="/assets/images/image 1067.png" /> </Link> 
                    <h1> Overland</h1>

                </div>
                        
                <div className='sub2'>

                    <input type="text" placeholder="O que você procura? ;-;" />
     
                </div>

                <div className='subx'>

                    <Link to="/perfil/usuario"> <img src='/assets/images/image 1066.png' alt='1' /> </Link>

                    
                    

                    <Link to="/carrinho"> <img src='/assets/images/image 1065.png' alt='1' /> </Link>
                    

                    <img src='/assets/images/Star 14.png' alt='1' />
                  
                    
                </div>
                </div>
                <div className={props.esconder}>


                <div className='x2'>
                    <p>ESPORTES</p>
                    <p>MASCULINO</p>
                    <p>FEMININO</p>
                    <p>INFANTIL</p>
                    <p>CALÇADOS</p>
                    <p>ROUPAS</p>
                    <p>ACESSÓRIOS</p>
                    <p>EQUIPAMENTOS</p>
                    <p>MARCAS</p>
                    
                    
                </div>
                </div>


                
            </section>
        )
        }

