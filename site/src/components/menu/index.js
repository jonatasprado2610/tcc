
import './index.scss'
import { useNavigate } from 'react-router-dom'




export default function Menu(){

   const navigate = useNavigate();

   function navegacaoPerfiladmin(){
      navigate('/perfiladmin');
   }

   


   function navegacaoCadastrar(){
      navigate('/cadastrar');
   }




    return(
      <section className='paga-menux'>
          
                    <div className='xvx'>
                    <div>
                        <img src='./assets/images/admin.png'  />
                    </div>

                    <div >
                        <h2>ADMIN </h2>
                        <h5>Bem-Vindo de volta XXX</h5>

                    </div>
                    </div>

            <div className='links'>       
                 <div className='xv1x'>
                    <div>
                      <p onClick={navegacaoPerfiladmin}>Perfil</p>
                    </div>
                    <div> 
                    <img  src="./assets/images/seta1.png" /> 
                    </div>
                 </div>

                    
   
                    
                 <div className='xv1x'>
                    <div>
                      <p> Produtos </p>

                      <select > 
                        <option  >
                        </option>
                      </select>
                    </div>
                    <div> 
                    <img  src="./assets/images/seta1.png"  /> 
                    </div>
                 </div>



                 <div className='xv1x'>
                    <div>
                     <p>Categorias</p>
                      <select>
                        <option hidden></option>
                        <option onClick={navegacaoCadastrar}>Ver Categorias</option>
                        <option> cadastrar Categorias</option>
                      </select>
                    </div>
                    <div> 
                    <img  src="./assets/images/seta1.png"  /> 
                    </div>
                 </div>



                 <div className='xv1x'>
                    <div>
                      <p> Entregas </p>
                    </div>
                    <div> 
                    <img  src="./assets/images/seta1.png"  /> 
                    </div>
                 </div>


                 <div className='xv1x'>
                    <div>
                      <p>Pedidos</p>
                    </div>
                    <div> 
                    <img  src="./assets/images/seta1.png"/> 
                    </div>
                 </div>


                    
                 <div className='xv1x'>
                    <div>
                      <p>Estoque</p>
                    </div>
                    <div> 
                    <img  src="./assets/images/seta1.png" /> 
                    </div>
                 </div>


                    
                 <div className='xv1x'>
                    <div>
                      <p>Cupons</p>
                    </div>
                    <div> 
                    <img  src="./assets/images/seta1.png"  /> 
                    </div>
                 </div>



                 <div className='xv1x'>
                    <div>
                      <p>Gráficos</p>
                    </div>
                    <div> 
                    <img  src="./assets/images/seta1.png"  /> 
                    </div>
                 </div>






                 <div className='xv1x'>
                    <div>
                      <p>Avaliação Clientes</p>
                    </div>
                    <div> 
                    <img  src="./assets/images/seta1.png"  /> 
                    </div>
                 </div>



      
         

                 <div className='sair'>

                    <img src="./assets/images/sx.png"/> 
                    <div>
                      <p>Sair</p>
                    </div>
                  
                 </div>

               </div>
               
   </section>
   )
}