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
                            <th>ID-Pedido</th>
                            <th>ID-USUARIO</th>
                            <th>ID-USUARIO-ENDERECO</th>
                            <th>CODIGO NOTA FISCA</th>
                            <th>TIPO FRETE</th>
                            <th>VALOR DO FRETE</th>
                            <th>NUMERO PEDIDO</th>
                            <th>DS_STATUS</th>
                            <th>TIPO DE PAGAMENTO</th>
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
              
              </div>
        </section>



    </main>
)}
                     