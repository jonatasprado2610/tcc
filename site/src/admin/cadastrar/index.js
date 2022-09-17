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
                     <div>
                         <h3>Tamanho Pra Roupa</h3>
                         <div className="sub4">
                             <div>
                                 <button>P</button>
                                 <button>M</button>
                             </div>
                             <div>
                                 <button>G</button>
                                 <button>GG</button>
                             </div>
                         </div>
                     </div>

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
                     
                     <div>
                         <h3>Tamanho para tenis</h3>
                         <div>
                             <button>20</button> <button>22</button>  <button>24</button> <button>26</button> <button>28</button>
                            
                         </div>
                         <div>
                            <button>30</button> <button>32</button>  <button>34</button> <button>36</button> <button>38</button>
                         </div>

                         <div>
                            <button>40</button> <button>42</button>  <button>44</button> <button>46</button> <button>48</button>
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