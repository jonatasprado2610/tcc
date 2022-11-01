import { useEffect, useRef, useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import CabecarioAdmin from '../../components/cabeçarioAdmin';
import { API_URL } from '../../api/config'
import './index.scss'
import storage from 'local-storage';
import { salvarCupom, listarCupom } from '../../api/admin/cupom'
import { toast } from 'react-toastify';

export default function CadastrarCupom() {

    const [cupom, setCupom] = useState([])
    const [codigo, setCodigo] = useState('');
    const [valor, setValor] = useState(0);
    const [qtd, setQtd] = useState(0);

    async function cadastracupomx() {
        try {
            const r = await salvarCupom(codigo, valor, qtd)
            carregarCupom();
            toast('cupom cadastrado')

        } catch (err) {
            toast(err.response.data.erro)
        }
    }

    async function carregarCupom() {
        const r = await listarCupom();
        setCupom(r);
    }

    useEffect(() => {
        carregarCupom();
    }, [])

    return (
        <main className="tudo">

            <div className='cabecario'>
                <CabecarioAdmin />
            </div>
            <div className="pagina">

                <div className='mural'>
                    <div className='lado'>
                        <div className='baixo'>
                            <h1>Cadastrar Cupom</h1>
                            <h2>Nome Cupom </h2>
                            <input className='teste' type='text' value={codigo} onChange={e => setCodigo(e.target.value)} />
                            <h2>Valor Cupom </h2>
                            <input className='teste' type='text' value={valor} onChange={e => setValor(Number(e.target.value))} />
                            <h2>quantidade </h2>
                            <input className='teste' type='text' value={qtd} onChange={e => setQtd(Number(e.target.value))} />

                        </div>
                        <div>

                            <h2> Cupons Registrados </h2>

                            <div className='xx1'>
                            {cupom.map(item =>
                        <tr>
                        <td>{item.id}</td>
                        <td>{item.codigo}</td>
                        <td>{item.valor}</td>
                        <td>{item.qtd}</td>
                       
                        <img className='imagens' src='/assets/images/apagarEstoque.png'/> 
                        </tr>

                        )}  

                               
                            </div>


                        </div>
                    </div>

                    <div>
                        <button onClick={cadastracupomx}> Cadastrar Cupom   </button>

                    </div>


                </div>
            </div>
        </main>
    )
}

