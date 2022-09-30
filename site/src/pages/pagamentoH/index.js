import './index.scss'
import Cabecario from '../../components/cabeçario'
import { Link } from 'react-router-dom';



export default function PagamentoH(){


      return(
      <main className='page-dinhero'>
        <Cabecario/>
        <div className='xs1'>
            <h1>Selecione o Metado de pagamento</h1>
            

           
            <select>
            <option selected disabled hidden>Selecione</option>
                <option>Cartao </option>
              
                  
                
                <option>Boleto</option>
            </select>

            <div>
                <img className='im'  src='./assets/images/dinheiro.png' alt='' />
            </div>
        </div>


      </main>)
}