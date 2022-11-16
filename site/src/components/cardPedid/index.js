import { useEffect, useState } from 'react';
import './index.scss';
import storage from 'local-storage';
import { carregarPedidoPorId,ListarPs,alterarPedido,listarSt } from '../../api/pedido';
import { toast } from 'react-toastify';

export default function CardPedid(props) {
    const id = storage('cliente-logado').id;

     console.log(id)

     const[status, setStatus]= useState('entrega confirmada');

     async function alterarPedidox() {
         try{
             const pedidoId = props.pedidoId;

             const r = await alterarPedido(pedidoId, status)
             const a =  listarSt()
             console.log(a)
             
             toast.success  ('entrega confirmada com sucesso')
         }catch (err) {
             toast(err.response.data.erro)
         }
        }

    useEffect(() => {
        carregarPedidoPorId(id)
       
    }, [])

    return (
        <section className='page-pedidi-cliente'>
            
            <div className='div-tabela'>
                <table>
                    <thead>
                        <tr>
                            <th>ID-Pedido</th>
                          

                            <th>produto</th>

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
                            
                            <td>{produto.produto}</td>
                         
                            <td>{produto.id_endereo}</td>
                            <td>{produto.statuxs}</td>
                            <td>{produto.dataPedido}</td>
                            <td>{produto.tipoPagamento}</td>
                            <td>{produto.qtd}</td>
                            <td>{produto.valor}</td>
                        </tr>
                    )}




                    <input type="text" value={status} onChange={e => setStatus(e.target.value )} placeholder='digite o novo status do pedido' />

                    </tbody>
                </table>
            </div>
            <div className='div-button'>
                <button onClick={alterarPedidox}>Confimar Entrega</button>
            </div>
        </section>

    )
}