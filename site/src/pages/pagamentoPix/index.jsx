import './index.scss'
import Rodape from '../../components/Rodape'
import CabecarioAdmin from '../../components/cabeçarioAdmin'

export default function PagamentoPix(){

    return(
        <main className="paga-pix">
            <CabecarioAdmin/>
            <section className='section'>
               <div className='sx1'>
                <h1>Pagameto via Pix</h1>
                <div>
                    <img src="./assets/images/qrcode.png" alt="" />
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