import { alterarPedido } from '../../api/pedido';
import './index.scss';


export default function PedidoSc(props) {



    return (
        <section className='page-pedc'>
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
                    <tr>
                        <td>{props.item.id}</td>
                        <td>#01</td>
                        <td>{props.item.produto}</td>
                        <td>{props.item.Cliente}</td>
                        <td>{props.item.id_endereo}</td>
                        <td>{props.item.statuxs}</td>
                        <td>{props.item.dataPedido}</td>
                        <td>{props.item.tipoPagamento}</td>
                        <td>{props.item.qtd}</td>
                        <td>{props.item.valor}</td>

                    </tr>



                </tbody>
            </table>
            <div className='cx2'>
                <div className='cx'>
                    <h3>Alterar status do Pedido</h3>
                    <input type="text" placeholder='digite o novo status do pedido' />
                </div>
                <div>

                    <button className="buttom">Alterar</button>
                </div>
            </div>

        </section>
    )
}