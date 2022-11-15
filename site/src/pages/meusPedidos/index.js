import './index.scss';
import CardPedid from '../../components/cardPedid';
import { useEffect, useState } from 'react';
import Storage from 'local-storage'
import { carregarPedidoPorId } from '../../api/pedido';


export default function MeusPedidos() {

    const [pedido, setPedidos] = useState([]);
    const [id, setId] = useState(0);

    const cliente = Storage('cliente-logado').id;



    async function Listarx() {
        
            const r = await carregarPedidoPorId(setId(r.id));
            console.log(r)
            setPedidos(r)
        

    }


    useEffect(() => {
        Listarx()
    }, [])


    return (
        <main >
            <section>
                <div>

                    <h1>Meus Pedidosx</h1>
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