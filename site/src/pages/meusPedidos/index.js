import './index.scss';
import CardPedid from '../../components/cardPedid';
import { useEffect, useState } from 'react';
import Storage from 'local-storage'
import { carregarPedidoPorId } from '../../api/pedido';


export default function MeusPedidos() {

    const [pedido, setPedidos] = useState([]);

    let cliente = Storage('cliente-logado');
    

   
   async function Listarx() {
    const r = await carregarPedidoPorId(cliente);
    
    setPedidos(r)
   }


   useEffect(()=>{
   Listarx()
   },[])

   
    return (
        <main >
            <section>
                <div>
                    
                    <h1>Meus Pedidos</h1>
                </div>

                <div>
                    {pedido.map (item =>
                       <CardPedid pedidoId={item.id} item={item.produtos} />   
                    )}
               
                </div>
             
            </section>
        </main>
    )
}