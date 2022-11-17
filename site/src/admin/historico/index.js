
import His from "../../components/historico";
import { HistoricoComprass } from "../../api/pedido";
import CabecarioAdmin from '../../components/cabeçarioAdmin';
import { useEffect, useState } from 'react';
import "./index.scss"
export default function HistoricoCompras() {

    const [pedido, setPedidos] = useState([]);

    async function Listar() {
        const r = await HistoricoComprass();
        setPedidos(r)
    }

    useEffect(() => {
        Listar();
    }, [])

    return (
        <main className='pa'>

            <CabecarioAdmin className="ba"/>

            <div className="MA"> <h1>Historico de Compras</h1> </div>



            <section className='section'>

                {pedido.map(item =>

                    <div>
                        <His className='PedidoSc' pedidoId={item.id} item={item.produtos} />
                    </div>
                )}


            </section>



        </main>
    )
}