import './index.scss'
import { useNavigate } from 'react-router-dom'

export default function Voltar(props) {
    const navigate = useNavigate();
    function voltar() {
        navigate(props.pag);
    }

    return(
        <main className='div-botao'>
           <button onClick={voltar} className="btvoltar">Voltar</button>
        </main>
    )
}