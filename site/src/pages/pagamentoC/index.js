import './index.scss'
import Cabecario from '../../components/cabeçario'



export default function PagamentoCartao(){


    return(
        <main className='page-cartao'>
            <Cabecario/>
            <div>
                 <h1 className='h1'> Selecione o metodo de pagamento</h1>
            </div>
           
            

           <div className='cx1'>

              <div>
                <div>
                     <select>
                                        <option selected disabled hidden>Selecione</option>
                                            <option>Cartao </option>
                                            <option>Boleto</option>
                            </select>
                </div>
                <div>
                    <img className='imgx' src='./assets/images/cartao.jpg' alt='' />
                </div>
                           

              </div>

              <div className='cx2'>
                <div>
                    <h4>Nome do Cartao</h4>
                    <input className='input' type='text' />
                </div>

                <div>
                    <h4>Numero do Cartão</h4>
                    <input className='input' type='text' />
                </div>
                <div className='cx3'>
                        <div >
                            <h4>Data de vencimento</h4>
                            <input className='input' type='text' />
                        </div>
                        <div  className='cxx'>
                            <h4>Codigo de segurança</h4>
                            <input className='input' type='text' />
                        </div>
                </div>

                <div className='cx4'>
                    <div>
                      <p>Total R$684,23</p>  
                    </div>
                    <div>
                        <button> Concluir Compra</button>
                    </div>
                    
                </div>

              </div>




           </div>

        </main>
    )
}
