import './index.scss';
import CardPedid from '../../components/cardPedid';
import { useEffect, useState } from 'react';
import storage from 'local-storage'
import { carregarPedidoPorId,ListarPs, listarSt,  } from '../../api/pedido';
import Cabecario from '../../components/cabeçario';

export default function MeusPedidos() {

    const [pedido, setPedidos] = useState([]);
    const id = storage('cliente-logado').id;
    console.log(id)



   
    async function Listarx() {
        const r = await carregarPedidoPorId(id);
        console.log(r);
        setPedidos(r)
    }

    useEffect(() => {
        Listarx();
    }, [])



    return (
        <main >
            <Cabecario/>
            <section className='c1'>
                <div>

                    <h1>Meus Pedidos</h1>
                </div>

                <div>
                    {pedido.map(item =>
                        <CardPedid pedidoId={item.id} item={item.produtos} />
                    )}

                </div>

            </section>
        </main>
    )
}