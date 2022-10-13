import './index.scss'
import Rodape from '../../components/Rodape'
import CabecarioAdmin from '../../components/cabeçarioAdmin'

export default function PagametoBoleto(){



    return(
        <main className='page-boleto'>
            <CabecarioAdmin/>
            <section className='section'>
            <div className='sx1'>
                <h1>Pagameto via boleto</h1>
                <div className='sx2'>
                    <p>Baixar</p>
                    <img src='./assets/images/download-button.png' alt='' />
                </div>
                
                <div className='x3'>
                    <h3>Total R$:999,99</h3>
                    <button>Finalizar Compra</button>
                </div>
            </div>
            </section>
           
            <Rodape/>
        </main>
    )
}