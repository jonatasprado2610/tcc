
import './index.scss'



export default function CadastarUsuario(){


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
                         <input type="text" placeholder='Digite seu nome'/>
                     </div>

                     <div>
                         <h3>Data de nascimento:</h3>
                         <input type="date" placeholder='Digite seu nome'/>
                     </div>
                 </div>

                 <div className='c1'>
                     <div>
                         <h3>RG:</h3>
                         <input type="text" placeholder='Digite seu RG'/>
                     </div>

                     <div>
                         <h3>CPF:</h3>
                         <input type="text" placeholder='Digite seu CPF'/>
                     </div>
                 </div>

                 <div className='c1'>
                     <div>
                         <h3>Email:</h3>
                         <input type="text" placeholder='Digite seu email'/>
                     </div>

                     <div>
                         <h3>Senha</h3>
                         <input type="text" placeholder='Digite seu Senha'/>
                     </div>
                 </div>


             </div>

        </main>
    )
}