import CabecarioAdmin from '../../components/cabeçarioAdmin';
import'./index.scss';

export default function pedidoClientes() {
    return (
        <main className='cont-pedidoClientes'>
            <section className='section' >
                <CabecarioAdmin></CabecarioAdmin>

                <div> <h1>Pedidos Clientes</h1></div>
                <div>
                    <input type='text'></input>
                </div>

                <div className='div-tabela'>
                    <table className='tabela'>
                        <tr>
                            <th>Produtos</th>
                            <th>ID</th>
                            <th>Categotria</th>
                            <th>Valor</th>
                            <th>Cliente</th>
                        </tr>
                        <tr>
                             <td>Tênis Esportivo On Shoes Masculino/feminino</td>
                             <td>666666</td>
                             <td>Calçados</td>
                             <td>R$ 269, 99</td>
                             <td>Nicolas</td>
                        </tr>
                        <tr>
                             <td>Bola nike</td>
                             <td>55555</td>
                             <td>Chuteira e camisa adidas</td>
                             <td>R$ 89, 90</td>
                             <td>Ana Julia  </td>
                        </tr>
                    </table>
                </div>

                <div>
                    <div>ID:</div>
                    <div className='card'>
                        <div>card casa</div>
                        <div>Valor total</div>
                    </div>
                </div>

                <div>____________________Barra status da entrega __________________</div>
    
                    <button className='botao'>Alterar situação</button>
             
            </section>
        </main>
    )
}