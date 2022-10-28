import './index.scss'
import { Link } from 'react-router-dom'
import { useNavigate } from 'react-router-dom'
import Rodape from '../../components/Rodape';
import Cabecario from '../../components/cabeçario';
export default function Pagamento(){

 const navigate= useNavigate();

 function navi(){
    navigate('/pagamento/cartao')
  }

    return(
        <main className='page-pagameto'>
            <Cabecario/>
            <h1 className='h1'>Escolha um metodo de Pagamento</h1>
             
             
            <div className='subx1'>
                
              
              <div onClick={navi} className='cx1'>
                  
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
          


       
<Rodape/>
        </main>
    )
}
