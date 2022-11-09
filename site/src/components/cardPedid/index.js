import { useState } from 'react';
import './index.scss';



export default function CardPedid() {
    const [img, setImg] = useState('');
    const [numerop, setNumerop] = useState('');
    const [descricao, setDescricao] = useState('');
    const [itens, setItens] = useState();
    const [valor, setValor] = useState();
    const [datapedido, setDatapedido] = useState();
    const [ dataentrega, setDataentrega] = useState();



    async function CarregarPedido () {
        

   }

    return(
        <section className='page-pedidi-cliente'>
           <div className='div-tabela'>
           <table>
                <thead>
                    <tr>
                        <th>ID-Pedido</th>
                        <th>ID-Produto</th>
                        <th>produto</th>
                    
                        <th>ID-endereço</th>
                        <th>status</th>
                        <th>Data-Pedido</th>
                        <th>pagamento</th>
                        <th>qtd</th>
                        <th>Valor</th>
                    </tr>
                </thead>
                <tbody>
                   
                        <tr>
                            <td>#01</td>
                            <td>#01</td>
                            <td>tenis</td>                            
                            <td>id_endereo</td>
                            <td>statuxs</td>
                            <td>dataPedido</td>
                            <td>tipoPagamento</td>
                            <td>qtd</td>
                            <td>valor</td>
                        </tr>
                    
                    


                </tbody>
            </table>
          </div>
          <div className='div-button'>
           <button>Confimar Entrega</button>  
          </div>        
        </section>
        
    )
}