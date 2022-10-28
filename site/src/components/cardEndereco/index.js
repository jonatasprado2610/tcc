import { useNavigate } from 'react-router-dom'
import './index.scss'
import Storage from 'local-storage'

export default function CrdEndereco({item : {id, referencia,logradouro,cep,bairro,cidade,estado,numero,complemento }}){

    const navigate = useNavigate();

    function avancar() {
        Storage('endereco', id);
        navigate('/pagamento/cartao');
    }


    return(
        <main onClick={avancar} >
            
                <div className='cxx'>
                   <div><img src='./assets/images/ps.png ' /></div>        
                    
                <div>
                    <h3>{referencia}</h3>
                </div>
                <div>
                    <p>{logradouro}, {numero}, {complemento}</p>
                    <p>{cep} {bairro} {cidade}/{estado}</p>
                </div>

            </div> 
        </main>
         
    )
}