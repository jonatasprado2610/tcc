
import './index.scss'
import Cabecario from '../../components/cabeçario'


export default function PagamentoCartao(){



    return(
        <main className='page-cartao'>
 
          <section className='section'>
          <div className='x1'>
            <h1>Pagamento via cartao</h1>
        
                <div className='x2'>
                        <div>
                            <h3>Nome do Propretario</h3>
                            <input className='ip1'  type="text" placeholder='Digite o Nome do Propretario ' />
                        </div>

                        <div>
                            <h3>Numero do cartao</h3>
                            <input className='ip1'  type="text" placeholder='Digite o numero do cartao' />
                        </div>    

                </div>
              
                <div className='x2'>
                     <div>
                     <h3>Data de vencimento</h3>
                    <input className='ip1'   type="date" placeholder='Digite o numero do cartao' />
                    
                     </div>

                     <div>
                     <h3>Codigo de Segurança</h3>
                     <input  className='ip1'  type="text" placeholder='Digite o codigo de segurança' />
                     </div>

                </div>
                <div className='x3'>
                    <h3>Total R$:999,99</h3>
                    <button>Finalizar Compra</button>
                </div>
            </div>

          </section>
          

        </main>
    )
}