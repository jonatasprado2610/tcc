import './index.scss';
import Cabecario from '../../components/cabeçario'
import Rodape from '../../components/Rodape';


export default function Carrinho(){

    return(
        <main className='pge-carrinho' >
            <Cabecario/>

            <div className='sx'>
                <div  >
                    <div className='s2'>
                        <div className='s3'>
                            <div>
                                <img className='img1' src='./assets/images/tenis1.png' alt=''/>

                            </div>
                            <div>
                                 <h2>Tênis Esportivo On Shoes Masculino/feminino </h2>
                            </div>
                            <div>
                                 <img className='img2'  src='./assets/images/lixeira1.png' alt=''/>

                            </div>  

                        </div>
                              <div className='s4'>
                                <div><h3>Quantidade</h3></div>
                                <div><img src='./assets/images/-.png' alt=''/>   </div>
                                <div><button className='button'>1</button></div>
                                <div><img src='./assets/images/+.png' alt=''/></div>
                                 <div>
                                     <h4>Valor total</h4>
                                     <p>R$ 229,99</p>
                                 </div>

                                 <div>
                                     <h4>Valor unitário</h4>
                                     <p>R$ 229,99</p>
                                 </div>
                                
                             </div>


                    </div>

                    <div className='s2'>
                        <div className='s3'>
                            <div>
                                <img className='img1' src='./assets/images/tenis1.png' alt=''/>

                            </div>
                            <div>
                                 <h2>Tênis Esportivo On Shoes Masculino/feminino </h2>
                            </div>
                            <div>
                                 <img className='img2'  src='./assets/images/lixeira1.png' alt=''/>

                            </div>  

                        </div>
                              <div className='s4'>
                                <div><h3>Quantidade</h3></div>
                                <div><img src='./assets/images/-.png' alt=''/>   </div>
                                <div><button className='button'>1</button></div>
                                <div><img src='./assets/images/+.png' alt=''/></div>
                                 <div>
                                     <h4>Valor total</h4>
                                     <p>R$ 229,99</p>
                                 </div>

                                 <div>
                                     <h4>Valor unitário</h4>
                                     <p>R$ 229,99</p>
                                 </div>
                                
                             </div>


                    </div>

                   
                </div>
                <div className='s5'>
                    <h3>Resumo da compra</h3>

                    <div className='div'>
                        <p>Subtotal        R$ 128, 99</p>
                    </div>
                    

                    <div className='div'>
                        <p>Frete xxxx</p>
                    </div>

                    <div className='div'>
                        <p>Desconto xxxx</p>
                    </div >

                    <div className='div'>
                        <p>Total xxxx</p>
                    </div>
                    <div>
                        <button className='button2'>Continuar pedido </button>
                    </div>

                </div>
            </div>
            <Rodape/>

        </main>
    )
}