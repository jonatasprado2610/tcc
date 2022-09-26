import './index.scss'
import Cabecario from '../../components/cabeçario'


export default function Produtrox(){



    return(
        <main className='page-px'>
          

            <div className='container1'>
               <div className='subx'>
                        <div className='sub1'>
                            <img className='img1' src='./assets/images/tenis1.png' alt=''/>
                        </div>

                        
                        <div>
                            <img className='img2' src='./assets/images/tenis2.png' alt=''/>
                            <img className='img2' src='./assets/images/tenis2.png' alt=''/>
                            <img className='img2' src='./assets/images/tenis2.png' alt=''/>
                            <img className='img2' src='./assets/images/tenis2.png' alt=''/>
                        </div>


               </div>

               <div className='container2'>
                  <div className="sub2">
                 <p>Novo  |  1701 vendidos</p>


                 <div>
                    
                 <h1>Tênis Esportivo On Shoes Masculino/feminino</h1>
                 </div>

                 <div>
                 <img  src='./assets/images/star1.png' alt=''/>
                 <img  src='./assets/images/star1.png' alt=''/>
                 <img  src='./assets/images/star1.png' alt=''/>
                 <img  src='./assets/images/star1.png' alt=''/>
                 <img  src='./assets/images/star1.png' alt=''/>
                 </div>

                 <div>
                    <p className='preço1'>R$ 299,99</p>
                    <p className='preço2'>ou 4x de 55,99</p>
                 </div>

                 <div className="sub3">
                    <div>
                    <h4>Cores</h4>

                    <select>
                        <option>verde</option>
                        <option>verde</option>
                        <option>verde</option>
                        <option>verde</option>
                        <option>verde</option>
                    </select>
                    </div>
                    
                    <div>
                       <h4>Tamanho</h4>
                    <select>
                        <option>22</option>
                        <option>22</option>
                        <option>22</option>
                        <option>22</option>
                        <option>22</option>
                        <option>22</option>    
                    </select> 
                    </div>
                    
                 </div>

                 <div>
                    <h5>Quantidae</h5>
                    <button>+</button>
                    <button>-</button>
                 </div>

                 <div>
                    <button>Comprar agora </button>
                    <button>Adicionar no carrinho</button>
                 </div>

                <div>
                    <div>
                     <img src="./assets/images/circulo.png" alt=""/>
                    </div>
                    <div>
                        <p>Devolução grátis.</p>
                        <p>Você tem 30 dias a partir da data de recebimento</p>
                    </div>
                </div>

                <div>
                    <div>
                     <img src="./assets/images/okay.png" alt=""/>
                    </div>
                    <div>
                        <p>Devolução grátis.</p>
                        <p>Você tem 30 dias a partir da data de recebimento</p>
                    </div>
                </div>


               </div>
               </div>




            </div>

            
        </main>
    )
}