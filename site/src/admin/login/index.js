
import {  useNavigate } from 'react-router-dom';
import { loginADM } from '../../api/admin/adminApi';
import storage from 'local-storage'

import LoadingBar  from 'react-top-loading-bar'
import { useState ,useRef, useEffect} from 'react';


import './index.scss'
import '../../common/common.scss'

   






export default function Login(){
    const [login, setLogin] = useState('');
    const [senha, setSenha] = useState('');
    const [carregando, setCarregando] = useState(false);
    const [erro, setErro] = useState('');

    const navigate= useNavigate();

    const ref = useRef();

    useEffect(() =>{
        if(storage('usuario-logado')){
                navigate('/perfiladmin')
        }
 
    }, [])
    useEffect(() =>{
        if(!storage('usuario-logado')){
                navigate('/loginadm')
        }
 
    }, [])

    async function entrarClick(){

        ref.current.continuousStart()
        setCarregando(true);
         
        try{
            const r = await  loginADM(login,senha);
           
            storage('usuario-logado',r)


        setTimeout(() => {
            navigate('/perfiladmin')
        },3000);
       
        
       }catch (err){
        ref.current.complete();
        setCarregando(false);
            if(err.response.status===401){  
             setErro(err.response.data.erro)
        }

      }
    }



    return(
        <main className='login-admin'>
            <LoadingBar color='#0B4E6B' ref={ref} />
            <head>
            <meta charset="UTF-8"/>
            </head>

            <div className='container1'>
                <div>
                    <h1>Login Administrador</h1>
                </div>

                <div>
                    <h2>Email</h2>
                    <input type="text" placeholder='Digite seu email'  value={login} onChange={e => setLogin(e.target.value) } />
                </div>

                <div>
                    <h2>Senha</h2>
                    <input type="password" placeholder='Digite sua senha'   value={senha} onChange={e => setSenha(e.target.value) } />
                </div>

                <div>
                    <button onClick={entrarClick} disabled={carregando  }>ENTRAR</button>
                </div><br></br>
                <h2>
                      {erro}
                </h2>
                

              
                <h2>Overlend</h2>

              
                



            </div>



        </main>
    )
}