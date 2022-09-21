
import { useState } from 'react';
import './index.scss'
import { cadUsu} from '../../api/usuario'


export default function CadastarUsuario(){

    const [nome, setNome] = useState(''); 
    const [nascimento, setNascimento] = useState(''); 
    const [rg, setRg] = useState(''); 
    const [cpf, setCpf] = useState(''); 
    const [email, setEmail] = useState(''); 
    const [senha, setSenha] = useState(''); 

   async function criarClieck (){

        try{
            const r = await cadUsu(nome,nascimento,rg,cpf,email,senha)
            alert('foi');

        }catch(err){
                 alert(err.message);
        }

    }


    return(
        <main className='page-cadrastause'>
             
             <div className='container1'>
                 <div>
                     <img src="./assets/images/image 1067.png" alt=""/>
                 </div>
                 <h1>Informações da  conta </h1>
                 
                 <div className='c1'>
                     <div>
                         <h3>Nome Completo:</h3>
                         <input type="text" placeholder='Digite seu nome' value={nome} onChange={e => setNome(e.target.value)} />
                     </div>

                     <div>
                         <h3>Data de nascimento:</h3>
                         <input type="date" placeholder='Digite seu nome' value={nascimento} onChange={e => setNascimento(e.target.value)}/>
                     </div>
                 </div>

                 <div className='c1'>
                     <div>
                         <h3>RG:</h3>
                         <input type="text" placeholder='Digite seu RG' value={rg} onChange={e => setRg(e.target.value)}/>
                     </div>

                     <div>
                         <h3>CPF:</h3>
                         <input type="text" placeholder='Digite seu CPF' value={cpf} onChange={e => setCpf(e.target.value)}/>
                     </div>
                 </div>

                 <div className='c1'>
                     <div>
                         <h3>Email:</h3>
                         <input type="text" placeholder='Digite seu email' value={email} onChange={e => setEmail(e.target.value)}/>
                     </div>

                     <div>
                         <h3>Senha</h3>
                         <input type="password" placeholder='Digite seu Senha' value={senha} onChange={e => setSenha(e.target.value)}/>
                     </div>
                 </div>

                    <div className="c2">
                        <button onClick={criarClieck}>
                         Criar conta
                        </button>
                       
                    </div>

                    <p className="cx">Já tem uma conta? <a>Clique aqui </a>e faça login</p>


             </div>

        </main>
    )
}