import './index.scss'
import Cabecario from '../../components/cabeçario'
import Rodape from '../../components/Rodape'
import { Listar } from '../../api/cadastrarEndereco'
import { useEffect, useState } from 'react'
import CrdEndereco from '../../components/cardEndereco'
import Storage from 'local-storage'
import { Link } from 'react-router-dom'
import Endereco from '../cadastrarEndereco'

import { useNavigate } from 'react-router-dom';

export default function Ender() {
    const [enderecos, setEnderecos] = useState([]);
    const [exibirIndereco, setExibirIndereco] = useState(false)
    const [cupom, setCupom] = useState('');
    const [frete, setFrete] = useState('');

    const navigate = useNavigate();

    function sairClick() {


        navigate('/endereco');
    }
    async function carregarEnderecos() {
        const id = Storage('cliente-logado').id;

        const r = await Listar(id);
        setEnderecos(r);

    }
    function exibirNovoIndereço() {
        setExibirIndereco(true)
    }

    useEffect(() => {

        carregarEnderecos();
    }, [])
    console.log(CrdEndereco)
    return (

        <main className='page-ender'>
                   <h1>Selecione um local de entrega</h1>    

            <section>
             
                

                <div className='cx2'>
                    <div className='csx2'>
                        <div>
                            <img src='./assets/images/pointer.png' />
                        </div>
                        <p>Adicionar novo endereço </p>
                        <div>

                            <button onClick={sairClick}>Novo</button>


                        </div>



                    </div>

                    <div className='cs'>

                        {enderecos.map(item =>
                            <CrdEndereco item={item} />
                        )}



                    </div>


                </div>
                
               
                     <div className='cx1'>
                    <div>
                        <h1>Entrega 100% segurança</h1>
                    </div>
                    <div>
                        <img src='./assets/images/carro.png' />
                    </div>
                </div>
                
               


            </section>



            <Rodape />


        </main>
    )
}