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

                <div>
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
                        </tr>
                        <tr>
                             <td>Ola</td>
                             <td>Bola nike</td>
                             <td>Chuteira e camisa adidas</td>
                        </tr>
                    </table>
                </div>

                <div>
                    <div>ID:</div>
                    <div>
                        <div>card casa</div>
                        <div>Valor total</div>
                    </div>
                </div>

                <div>____________________Barra status da entrega __________________</div>
                <div>
                    <button>Alterar situação</button>
                </div>
            </section>
        </main>
    )
}