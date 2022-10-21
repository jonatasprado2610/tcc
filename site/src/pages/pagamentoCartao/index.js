
import './index.scss'
import Cabecario from '../../components/cabeçario'
import { useNavigate } from 'react-router-dom';
import { useEffect, useState } from 'react';
import { API_URL } from '../../api/config';
import { carregarProdutosPorId } from '../../api/produtoApi';
import Storage from 'local-storage'
import Rodape from '../../components/Rodape';
export default function PagamentoCartao() {
    const navigate = useNavigate();

    const [itens, setItens] = useState([]);

    function navi() {
        navigate('/pagamento/cartao')
    }

    async function carregarItenx() {

        let carrinho = Storage('carrinho');
        if (carrinho) {

            let temp = [];

            for (let produto of carrinho) {
                let p = await carregarProdutosPorId(produto.id);

                temp.push({
                    produto: p,
                    qtd: produto.qtd
                })
            }
            console.log(temp);
            setItens(temp);
        }

    }

   function calcularTotal(){
       let total = 0

       for(let item of  itens){
           total =  item.qtd * item.produto.info.precoInicial
       }
       return total
   }

    function exibirImagem(item) {
        if (item.produto.imagens.length > 0)
            return API_URL + '/' + item.produto.imagens[0];
        else
            return '/produto-padrao.png';
    }


    useEffect(() => {

        carregarItenx();
    }, [])

    return (
        <main className='page-cartao'>

            <section className='section'>
                <div className='x1'>
                    <h1>Pagamento via cartao</h1>

                    <div className='x2'>
                        <div>
                            <h3>Nome do Propretario</h3>
                            <input className='ip1' type="text" placeholder='Digite o Nome do Propretario ' />
                        </div>

                        <div>
                            <h3>Numero do cartao</h3>
                            <input className='ip1' type="text" placeholder='Digite o numero do cartao' />
                        </div>

                    </div>

                    <div className='x2'>
                        <div>
                            <h3>Data de vencimento</h3>
                            <input className='ip1' type="date" placeholder='Digite o numero do cartao' />

                        </div>

                        <div>
                            <h3>Codigo de Segurança</h3>
                            <input className='ip1' type="text" placeholder='Digite o codigo de segurança' />
                        </div>
                        
                    </div>
                    <div className='x3'>
                    <input/>

                        <h3>Total:{calcularTotal()}</h3>
                        <button>Finalizar Compra</button>
                    </div>
                </div>

            </section>

            
                <div className='itens'>
                    <table>
                        <thead>
                            <tr>
                                <th>Item</th>
                                <th>Quantidade</th>
                                <th>Preço Unitário</th>
                                <th>Total</th>
                            </tr>
                        </thead>
                        <tbody>

                            {itens.map(item =>
                                <tr>
                                    <td>
                                        <div className='celula-item'>
                                            <img />
                                            <div>
                                                <h3> {item.produto.info.nome} </h3>
                                                
                                            </div>
                                        </div>
                                    </td>
                                    <td>
                                    {item.qtd}
                                    </td>
                                    <td>
                                       R$: {item.produto.info.precoInicial}
                                        
                                    </td>
                                    <td>
                                    R$:  {item.qtd* item.produto.info.precoInicial}
                                    </td>
                                </tr>

                            )}


                        </tbody>
                    </table>
                </div>
            

<Rodape/>
        </main>
    )
}