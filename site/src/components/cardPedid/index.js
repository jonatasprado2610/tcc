import { useEffect, useState } from 'react';
import './index.scss';
import Storage from 'local-storage';
import { carregarPedidoPorId } from '../../api/pedido';


export default function CardPedid(props) {
    let cliente = Storage('cliente-logado');
    const id = props.item.id;




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






                    </tbody>
                </table>
            </div>
            <div className='div-button'>
                <button>Confimar Entrega</button>
            </div>
        </section>

    )
}