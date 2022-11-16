import { useState } from 'react';

import { alterarPedido, listarSt } from '../../api/pedido';
import './index.scss';
import { toast } from 'react-toastify';
import { useEffect } from 'react';

export default function PedidoSc(props) {
    const[status, setStatus]= useState();

        async function alterarPedidox() {
            try{
                const pedidoId = props.pedidoId;

                const r = await alterarPedido(pedidoId, status)
                const a =  listarSt()
                console.log(a)
                
                toast('Status alterado com sucesso')
            }catch (err) {
                toast(err.response.data.erro)
            }

       
        
    }

    useEffect(() => {
        listarSt();
    }, [])

    return (
        <section className='page-pedc'>
            <div  className='teste'>
            <table>
                <thead>
                    <tr>
                        <th>ID-Pedido</th>
                        <th>ID-Produto</th>
                        <th>produto</th>
                        <th>Cliente</th>
                        <th>ID-endereço</th>
                        <th>status</th>
                        <th>Data-Pedido</th>
                        <th>pagamento</th>
                        <th>qtd</th>
                        <th>Valor</th>
                    </tr>
                </thead>
                <tbody>
                    {props.item.map(produto => 
                        <tr>
                            <td>{produto.id}</td>
                            <td>#01</td>
                            <td>{produto.produto}</td>
                            <td>{produto.Cliente}</td>
                            <td>{produto.id_endereo}</td>
                            <td>{produto.statuxs}</td>
                            <td>{produto.dataPedido}</td>
                            <td>{produto.tipoPagamento}</td>
                            <td>{produto.qtd}</td>
                            <td>{produto.valor}</td>
                        </tr>
                    )}
                    


                </tbody>
            </table>
            <div className='cx2'>
                <div className='cx'>
                    <h3>Alterar status do Pedido</h3>
                    <input type="text" value={status} onChange={e => setStatus(e.target.value )} placeholder='digite o novo status do pedido' />
                </div>
                <div>

                    <button className="buttom" onClick={alterarPedidox}>Alterar</button>
                </div>
            </div>
        </div>
        </section>
    )
}