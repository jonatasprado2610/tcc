import Cabecario from "../../components/cabeçario";
import Rodape from "../../components/Rodape";
import './index.scss';
import {useState} from 'react';



export default function Endereco () {
    const [casaap, setCasaap] = useState('');
    return (
        <section className="page-endereco">
            <Cabecario></Cabecario>
            <div>
                <h1 className="titulo-endereco">Cadastrar novo endereço</h1>
                <div className="div-dados">
                    <div>
                        <h3>CASA OU APARTAMENTO:</h3>
                        <input type='text' number={casaap} onChange={e => setCasaap(e.target.value)} />
                        <h3>RUA:</h3>
                      
                        <h3>NÚMERO:</h3>
                    </div>
                    <div>
                        <h3>CEP:</h3>
                        <h3>BLOCO:</h3>
                        <h3>COMPLEMENTO:</h3>
                    </div>
                   
                </div>
            
                <div>
                     <button>Cadastrar</button>
                </div>
            </div>
            <Rodape/>
        </section>

    )
}