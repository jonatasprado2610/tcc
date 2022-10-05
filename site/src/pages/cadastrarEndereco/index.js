import Cabecario from "../../components/cabeçario";
import Rodape from "../../components/Rodape";
import './index.scss';
import {useState} from 'react';
import { cadastrarEndereco } from "../../api/cadastrarEndereco";


export default function Endereco () {
    const [idUsuario, setIdUsuario] = useState()
    const [logradouro, setLogradouro] = useState('');
    const [cep, setCep] = useState('');
    const [rua, setRua] = useState('');
    const [bloco, setBloco] = useState('');
    const [complemento, setComplemento] = useState('');

    const [numero, setNumero] = useState('');

    async function salvarEndereco() {
        try{
            const r = cadastrarEndereco(idUsuario, logradouro, cep, rua, bloco, numero) 
            alert('Endereço cadastrado ;)');
        }
        catch(err) {
            alert(err.message);
        }
    }
    
    localStorage.getItem('usuario-logado');
    console.log(id);

   
    return (
        <section className="page-endereco">
            <Cabecario></Cabecario>
            <div className="div-subgeral">            
                <h1 className="titulo-endereco">Cadastrar novo endereço</h1>
                <div className="div-dados">
                    <div className="dds">
                       
                        <div className="infos">
                            <h3>RUA:</h3>
                            <input type='text' value={rua} onChange={e => setRua(e.target.value)} />
                        </div>
                        <div className="infos">
                            <h3>NÚMERO:</h3>
                            <input type='text'value={numero} onChange={e => setNumero(e.target.value)} />
                        </div> 
                        <div className="infos"> 
                            <h3>CASA OU APARTAMENTO:</h3>
                            <input type='text' value={logradouro} onChange={e => setLogradouro(e.target.value)} />
                        </div>
                    </div>
                    <div className="dds">
                        <div className="infos">
                            <h3>CEP:</h3>
                            <input type='text' value={cep} onChange={e => setCep(e.target.value)} />
                        </div>
                        <div className="infos">        
                            <h3>BLOCO:</h3>
                            <input type='text' value={bloco} onChange={e => setBloco(e.target.value)} />
                            </div>
                        <div className="infos">
                            <h3>COMPLEMENTO:</h3>
                            <input type='text' value={complemento} onChange={e => setComplemento(e.target.value)} />
                        </div>
                    </div>
                   
                </div>
            
                <div className="div-botao ">
                     <button className="botao" onClick={salvarEndereco}><p className="texto-botao">Cadastrar</p></button>
                </div>
            </div>
            <Rodape/>
        </section>

    )
}