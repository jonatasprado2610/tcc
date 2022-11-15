import CabecarioAdmin from '../../components/cabeçarioAdmin';
import './index.scss';
import { HistoricoComprass } from '../../api/pedido';
import { useEffect, useState } from 'react';


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
        <main className='.page-pedc'>

            <CabecarioAdmin />

            <div> <h1>Historico de Compras</h1> </div>



            <section className='section'>
                <div c> 
           
                
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
                            {pedido.map(produto =>
                                <tr>
                                    <td>{produto.ID_PEDIDO}</td>
                                    <td>{produto.ID_USUARIO}</td>
                                    <td>{produto.ID_USUARIO_ENDERECO}</td>
                                    <td>{produto.COD_NOTAL_FISCAL}</td>
                                    <td>{produto.TP_FRETE}</td>
                                    <td>{produto.VL_FRETE}</td>
                                    <td>{produto.NR_NUMERO_PEDIDO } </td>
                                    <td>{produto.DS_STATUS}</td>
                                    <td>{produto.TP_PAGAMENTO}</td>
                                </tr>
                            )}

                        </tbody>
                    </table>
                  
                  </div>
            </section>



        </main>
    )
}