

import './index.scss';
import { useState ,useRef, useEffect} from 'react';
import LoadingBar  from 'react-top-loading-bar'
import { loginU } from '../../api/usuario';

import storage from 'local-storage';
import {  useNavigate } from 'react-router-dom';


export default function LoginUsuarios(){

    const [email ,setEmail] = useState('');
    const [senha ,setSenha] = useState('');
    const [erro, setErro] = useState('');
    const [carregando, setCarregando] = useState(false);

    const navigate= useNavigate();
    const ref  = useRef();

    /*useEffect(() => {
         if(!storage('usuario-logado')) {
            navigate('/endereco')
        }
    }, [])
    */


    async function entrarClick(){
        
        ref.current.continuousStart()
        setCarregando(true);

            try{
                const r = await loginU(email,senha);
                storage('usuario-logado', r);

            setTimeout(() =>{
                navigate('/endereco')
            },3000)


                     
            }catch (err){
                ref.current.complete();     
                setCarregando(false);
                if(err.response.status === 401){  
                    setErro(err.response.data.erro)
               }
            }

         
        
          
          
           
           
    }




    return(
        <main className='page-loginusu'>
             <LoadingBar color='#0B4E6B' ref={ref} />
          <div className='container1'>
              <div>
              <img src="./assets/images/image 1067.png" alt=""/>
              </div>

              <h1>  Login </h1>

              <div>
                  <h3>Email:</h3>
                  <input type="email" placeholder='Digite seu email' value={email} onChange={e => setEmail(e.target.value)} />
              </div>

              <div>
                  <h3>Senha:</h3>
                  <input type="password" placeholder='Digite sua senha ' value={senha} onChange={e => setSenha(e.target.value)} />
              </div>

              <div className="cx">
                  <button onClick={entrarClick} disabled={carregando}  >
                      Entrar
                  </button>
              </div>
              {erro}
              <p>Não tem uma conta? <a>lique aqui</a>C e cadastre-se</p>

              <h1>Overland</h1>
          </div>

        </main>
    )
}