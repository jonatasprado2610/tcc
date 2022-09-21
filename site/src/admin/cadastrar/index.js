import './index.scss'
import CabecarioAdmin from '../../components/cabeçarioAdmin'




export default function Cadastrar(){


    return(
        <main className='page-cadastrar'> 
        <CabecarioAdmin/>

        <div className="containermar">

            <div className="container1">
                    <p>aaa</p>
                    <p>aaa</p>
                    <p>aaa</p>
                    <p>aaa</p>


            </div>

            <div className="containerx">
                <div><h2>Cadastrar produto</h2></div>

                 <div className="containercar">
                     <div className="sub1">
                         <h3>Imagem Principal</h3>
                         <div className="ss1">
                             <img src="./assets/images/bx_upload 1.png"  alt=""/>
                         </div>
                     </div>


                     <div className="containercar2">
                         <h3>Imagens secundarias</h3>
                         <div className="sub2">
                                    <div>
                                    <img src="./assets/images/bx_upload 1.png"  alt=""/>
                                </div>
                                 <div>
                                    <img src="./assets/images/bx_upload 1.png"  alt=""/>
                                </div>
                         </div>

                         <div className="sub2">
                                    <div>
                                    <img src="./assets/images/bx_upload 1.png"  alt=""/>
                                </div>
                                 <div>
                                    <img src="./assets/images/bx_upload 1.png"  alt=""/>
                                </div>
                         </div>
                         
                     </div>
                       

                 </div>

                 <div  className="containercar3">
                     <div>
                         <h3>Valor Inicial</h3>
                         <input type="text" placeholder='R$' />
                     </div>
                     <div>
                         <h3>Valor Parcelado</h3>
                         <input type="text" placeholder='R$' />
                     </div>
                     <div>
                         <h3>max de parcelas</h3>
                         <input type="text"  />
                     </div>
                     <div>
                         <h3>Oferta diária</h3>
                         <input type="checkbox" />
                     </div>

                 </div>

                 <div className="containercar4">
                     <div>
                         <h3>Quantidade Disponivel</h3>
                         <input type="text" />
                     </div>
                     <div>
                         <h3>Marca</h3>
                     <select name="select">
                            <option>Nike</option>
                            <option >Pulma</option>
                            <option >Adidas</option>
                            <option >Lacost</option>
                            <option >Evelest</option>
                            <option >Mizuno</option>

                       </select>
                     </div>
                 </div>

                 <div className="containercar5">
                    

                     <div className="sub3">
                         <div>
                             <input type="checkbox" />
                             <h5>Masculino</h5>
                         </div>
                         <div>
                             <input type="checkbox" />
                             <h5>Femino</h5>
                         </div>
                         <div>
                             <input type="checkbox" />
                             <h5>Unissex</h5>
                         </div>
                     
                    
                     </div>
                     
                    

                     

                 </div>

                 <div className="containercar6">
      
                         <div>
                             <h3>Cadastrar uma nova cor </h3>
                             <input className="inputx" type="text" placeholder="nome" />
                             <input type="color" />
                         </div>

                         <div>
                           <h3>-cores- Cadastradas</h3>
                           <div>
                                 <select name="selecionar uma cor">
                                        <option > SlateBlue	#6A5ACD</option>
                                        <option > SlateBlue	#6A5ACDc</option>
                                        <option > SlateBlue	#6A5ACDc</option>
                                        <option > SlateBlue	#6A5ACDc</option>
                                        <option > SlateBlue	#6A5ACDa</option>
                                        <option > SlateBlue	#6A5ACD</option>
                                        <option > SlateBlue	#6A5ACD</option>
                           </select>
                           <button>add</button>
                                      
                           </div>
                         
                                        
                         </div>
                     </div>
                                       
                 <div className="SX">
                     <button>Cadastrar Produto</button>
                 </div>


            </div>
            </div>
       

 

        </main>
    )
}