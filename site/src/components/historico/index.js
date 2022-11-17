import './index.scss'


import './index.scss';
import { HistoricoComprass } from '../../api/pedido';
import { useEffect, useState } from 'react';




export default function His (props){

const [pedido, setPedidos] = useState([]);

async function Listar() {
    const r = await HistoricoComprass();
    setPedidos(r)
}

useEffect(() => {
    Listar();
}, [])

return (
    <main className='page-pedc'>

       

       



        <section className='section'>
            <div > 
       
            
                <table>
                    <thead>
                        <tr>
                            <th>ID PEDIDO</th>
                            <th>USUARIO</th>
                            <th>PRODUTO</th>
                            <th>CEP</th>
                            <th>STATUS PEDIDO</th>
                            <th>DATA PEDIDO</th>
                            <th>TIPO DE PAGAMENTO </th>
                            <th>QUANTIDADE ITENS</th>
                            <th> VALOR TOTAL</th>
                        </tr>
                    </thead>
                    <tbody>
                    {props.item.map(produto => 
                        <tr>
                            <td>{produto.id}</td>
                            <td>{produto.Cliente}</td>
                            <td>{produto.produto}</td>
                            <td>{produto.CEP}</td>
                            <td>{produto.statuxs}</td>
                            <td>{produto.dataPedido.substr(0,10)}</td>
                            <td>{produto.tipoPagamento}</td>
                            <td>{produto.qtd}</td>
                            <td>{produto.valor}</td>
                        </tr>
                    )}

                    </tbody>
                </table>
              
              </div>
        </section>



    </main>
)}
                     