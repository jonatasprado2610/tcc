import Cabecario from "../../components/cabeçario";
import Rodape from "../../components/Rodape";
import './index.scss';
import {useState} from 'react';
import { cadastrarEndereco } from "../../api/cadastrarEndereco";
import Storage from 'local-storage'
import { toast } from "react-toastify";
import { Link } from "react-router-dom";
import {  useNavigate } from 'react-router-dom';

export default function Endereco () {

    const [referencia,setReferencia]= useState('')
    const [cep, setCep] = useState('');
    const [logradouro, setLogradouro] = useState('');
    const [numero, setNumero] = useState('');
    const [complemento, setComplemento] = useState('');
    const [bairro, setbairro] = useState('');
    const [cidade, setCidade] = useState('');
    const [estado, setEstado] = useState('');
   
    const navigate = useNavigate();
    

    /*  PROBLEMA PODE TA AQUI   */
    /*setIdusuario = storage('usuario-logado');*/


    function sairClick() {

        
        navigate('/ende');
    }

    async function salvarEndereco() {
        try{
           const id= Storage('cliente-logado').id;
           const r = await cadastrarEndereco(id, referencia,  cep, logradouro, bairro, cidade, estado, numero, complemento);
           
           toast.dark('Endereço cadastreado com sucesso')
        }
        catch(err) {
            toast.error(err.response.data.erro)
        }
    }
    
   
    return (
        <main className="page-endereco">
            <Cabecario></Cabecario>
            
        <div className="c1">
            <div>
            <button onClick={sairClick}>Novo</button>
            </div>
          <div>
                <div className="c2">
                    <div>
                        <h3>referencia</h3>
                        <input type='text'  value={referencia} onChange={e => setReferencia(e.target.value)} />
                    </div>

                    <div>
                        <h3>complemento</h3>
                        <input type='text'  value={complemento} onChange={e => setComplemento(e.target.value)}   />
                    </div>
                </div>

                <div  className="c2">
                    <div>
                        <h3>CEP:</h3>
                        <input type='text'  value={cep} onChange={e => setCep(e.target.value)}   />
                    </div>

                    <div>
                        <h3>logradouro</h3>
                        <input type='text'   value={logradouro} onChange={e => setLogradouro(e.target.value)}  />
                    </div>
                </div>

                <div  className="c2">
                    <div>
                        <h3>bairro</h3>
                        <input type='text'  value={bairro} onChange={e => setbairro(e.target.value)}   />
                    </div>

                    <div>
                        <h3>cidade</h3>
                        <input type='text'   value={cidade} onChange={e => setCidade(e.target.value)}  />
                    </div>
                </div>

                <div  className="c2">
                    <div>
                        <h3>estado</h3>
                        <input type='text'  value={estado} onChange={e => setEstado(e.target.value)}   />
                    </div>

                    <div>
                        <h3>numero</h3>
                        <input type='text'   value={numero} onChange={e => setNumero(e.target.value)}  />
                    </div>
                </div>
            </div>
            <div>
                 <button onClick={salvarEndereco}>Salvar</button>
            </div>
           
           </div>
           
            <Rodape/>
        </main >

    )
}