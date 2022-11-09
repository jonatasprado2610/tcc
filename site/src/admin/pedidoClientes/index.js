import CabecarioAdmin from '../../components/cabeçarioAdmin';
import './index.scss';
import PedidoSc from '../../components/pedido';
import { ListarPs } from '../../api/pedido';
import { useEffect, useState } from 'react';

export default function PedidoClientes() {

    const [pedido, setPedidos] = useState([]);

    async function Listarx() {
        const r = await ListarPs();
        console.log(r);
        setPedidos(r)
    }

    useEffect(() => {
        Listarx();
    }, [])

    return (
        <main className='cont-pedidoClientes'>

            <CabecarioAdmin />

            <div> <h1>Pedidos Clientes</h1></div>



            <section className='section'>
                {pedido.map(item =>

                    <PedidoSc pedidoId={item.id} item={item.produtos} />

                )}
            </section>














        </main>
    )
}