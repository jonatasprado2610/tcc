
import './index.scss';

import { useNavigate } from 'react-router-dom';
import storage from 'local-storage';
import { useEffect } from 'react';



export default function Cabecario(){
    
    const navigate = useNavigate();

        
        useEffect(() => {
            if(!storage('usuario-logado')) {
                navigate('/');
            }
        }, [])

        return(

            <section className='page-cabecario'>
                <div className='x1'>
                    
                     
                <div className='sub1'>
                    <img src="./assets/images/image 1067.png" />
                    <h1> Overland</h1>

                </div>
                        
                <div className='sub2'>

                    <input type="text" placeholder="O que você procura? ;-;" />
     
                </div>

                <div className='subx'>
                    <img src='./assets/images/image 1066.png' alt='1' />
                    

                    <img src='./assets/images/image 1065.png' alt='1' />
                    

                    <img src='./assets/images/Star 14.png' alt='1' />
                  
                    
                </div>
                </div>
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
              


                
            </section>
        )
        }

