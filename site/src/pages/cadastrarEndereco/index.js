import Cabecario from "../../components/cabeçario";
import Rodape from "../../components/Rodape";
import './index.scss';
import {useState} from 'react';



export default function Endereco () {
    const [casaap, setCasaap] = useState('');
    return (
        <section className="page-endereco">
            <Cabecario></Cabecario>
            <div className="div-subgeral">            
                <h1 className="titulo-endereco">Cadastrar novo endereço</h1>
                <div className="div-dados">
                    <div className="dds">
                        <div className="infos"> 
                            <h3>CASA OU APARTAMENTO:</h3>
                            <input type='text' number={casaap} onChange={e => setCasaap(e.target.value)} />
                        </div>
                        <div className="infos">
                            <h3>RUA:</h3>
                            <input type='text' number={casaap} onChange={e => setCasaap(e.target.value)} />
                        </div>
                        <div className="infos">
                            <h3>NÚMERO:</h3>
                            <input type='text' number={casaap} onChange={e => setCasaap(e.target.value)} />
                        </div>
                    </div>
                    <div className="dds">
                        <div className="infos">
                            <h3>CEP:</h3>
                            <input type='text' number={casaap} onChange={e => setCasaap(e.target.value)} />
                        </div>
                        <div className="infos">        
                            <h3>BLOCO:</h3>
                            <input type='text' number={casaap} onChange={e => setCasaap(e.target.value)} />
                            </div>
                        <div className="infos">
                            <h3>COMPLEMENTO:</h3>
                            <input className="input" type='text' number={casaap} onChange={e => setCasaap(e.target.value)} />
                        </div>
                    </div>
                   
                </div>
            
                <div className="div-botao ">
                     <button className="botao"><p className="texto-botao">Cadastrar</p></button>
                </div>
            </div>
            <Rodape/>
        </section>

    )
}