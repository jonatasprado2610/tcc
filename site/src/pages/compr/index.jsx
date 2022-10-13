import './index.scss'
import CabecarioAdmin from '../../components/cabeçarioAdmin'
import Rodape from '../../components/Rodape'


export default function CompraFinalizada(){

    return(
        <main className='page-pedidook'>
            <CabecarioAdmin/>

            <section className='section'>
                <div className='sx1'>
                    <div>
                        <img src='./assets/images/okay1.png' alt='' />
                    </div>
                    <h1>Pedido Finalizado</h1>
                    <p>Quantidade de itens 3 </p>
                    <p>Realizado em 22/09/22</p>
                    <p>Numero do Pedido:743287474290</p>
                    <p>Total: R$  684,23</p>
                </div>
            </section>
            <Rodape/>
        </main>
    )


}