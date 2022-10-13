import './index.scss'
import { Link } from 'react-router-dom'



export default function Pagamento(){


    return(
        <main className='page-pagameto'>
             <h1>Escolha um metodo de Pagamento</h1>
             
            <div className='subx1'>
              
              <div className='cx1'>
                  
                  <h3>Cartao</h3>
                  <img className='img' src='./assets/images/cartaoa.png'  alt=''    />
              </div>

              <div className='cx1'>
                  <h3>pix</h3>
                  <img className='img1' src='./assets/images/pix.png'  alt=''    />
              </div>

              <div className='cx1'>
                  <h3>Boleto</h3>
                  <img className='img' src='./assets/images/boleto.png'  alt=''    />
              </div>
             
        

            </div>
          


       

        </main>
    )
}
