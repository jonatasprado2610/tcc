
import './index.scss'
import Cabecario from '../../components/cabeçario'
import { useNavigate } from 'react-router-dom';
import { useEffect, useState } from 'react';
import { API_URL } from '../../api/config';
import { carregarProdutosPorId } from '../../api/produtoApi';
import Storage from 'local-storage'
import Rodape from '../../components/Rodape';
import { toast } from 'react-toastify';
import { salvarNovoPedido } from '../../api/pedido';

export default function PagamentoCartao() {
    const navigate = useNavigate();

    const [itens, setItens] = useState([]);
    const [cupom, setCupom] = useState('');
    const [frete, setFrete] = useState('');

    const [nome, setNome] = useState('');
    const [numero, setNumero] = useState('');
    const [vencimento, setVencimento] = useState('');
    const [codSeguranca, setCodSeguranca] = useState('');
    const [tipo, setTipo] = useState('');
    const [parcela, setParcela] = useState('');




    function navi() {
        navigate('/pagamento/cartao')
    }

    async function carregarItenx() {

        let carrinho = Storage('carrinho');
        let comprax = Storage('compra');
        


        if (comprax) {

            let tempx = [];

            for (let produto of comprax) {
                let p = await carregarProdutosPorId(produto.id);

                tempx.push({
                    produto: p,
                    qtd: produto.qtd
                })
            }
            console.log(tempx);
            setItens(tempx);
        }

        

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

    function calcularTotal() {
        let total = 0

        for (let item of itens) {
            total = item.qtd * item.produto.info.valor
        }
        return total
    }

    function exibirImagem(item) {
        if (item.produto.imagens.length > 0)
            return API_URL + '/' + item.produto.imagens[0];
        else
            return 'https://image.shutterstock.com/image-vector/cross-sign-element-red-x-260nw-567030823.jpg';
    }

    async function salvarPedido() {

        try {
            let ende = Storage('endereco');
            let produtos = Storage('carrinho');
            let id = Storage('cliente-logado').id;

            let pedido =
            {
                cupom: cupom,
                frete: frete,
                idEndereco: ende,
                tipoPagamento: 'Cartão',
                cartao: {
                    nome: nome,
                    numero: numero,
                    vencimento: vencimento,
                    codSeguranca: codSeguranca,
                    formaPagamento: tipo,
                    parcelas: parcela
                },
                produtos: produtos

            }

            const r = await salvarNovoPedido(id, pedido);
            toast.dark('Pedido foi inserido com sucesso');
            Storage('carrinho', []);

            navigate('/');

        }
        catch (err) {
            alert(err.response.data.erro);
        }

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
                            <input className='ip1' value={nome} onChange={e => setNome(e.target.value)} type="text" placeholder='Digite o Nome do Propretario ' />
                        </div>

                        <div>
                            <h3>Numero do cartao</h3>
                            <input className='ip1' value={numero} onChange={e => setNumero(e.target.value)} type="text" placeholder='Digite o numero do cartao' />
                        </div>

                    </div>

                    <div className='x2'>
                        <div>
                            <h3>Data de vencimento</h3>
                            <input className='ip1 ' value={vencimento} onChange={e => setVencimento(e.target.value)} type="date" placeholder='Digite o numero do cartao' />

                        </div>

                        <div>
                            <h3>Codigo de Segurança</h3>
                            <input className='ip1' value={codSeguranca} onChange={e => setCodSeguranca(e.target.value)} type="text" placeholder='Digite o codigo de segurança' />
                        </div>

                    </div>


                    <div className='x2'>

                        <div>
                            <h3>Tipo de Pagamento:</h3>
                            <select className='ip1' value={tipo} onChange={e => setTipo(e.target.value)}   >
                                <option disabled hidden selected>Selecione</option>
                                <option>Crédito</option>
                                <option>Débito</option>
                            </select>
                        </div>

                        <div>
                            <h3> Cupom </h3>
                            <input type='text' className='ip1' value={cupom} onChange={e => setCupom(e.target.value)} />

                        </div>
                    </div>
                    <div className='x2'>

                        <div>
                            <h3>Parcela</h3>

                            <select className='ip1' value={parcela} onChange={e => setParcela(e.target.value)}  >
                                <option disabled hidden selected>Selecione</option>
                                <option value={1}>01x à Vista</option>
                                <option value={1}>01x com Juros</option>
                                <option value={2}>02x com Juros</option>
                                <option value={3}>03x com Juros</option>
                            </select>

                        </div>


                        <div>
                            <h3>frete</h3>
                            <select className='ip1' value={frete} onChange={e => setFrete(e.target.value)}  >
                                <option disabled hidden selected>Selecione</option>
                                <option value={'Normal'}>Normal - R$ 10,00</option>
                                <option value={'Sedex'}>Sedex - R$ 25,00</option>
                            </select>
                        </div>



                    </div>


                    <div className='x3'>
                        <input />

                        <h3>Total:{calcularTotal()}</h3>
                        <button onClick={salvarPedido} >Finalizar Compra</button>
                    </div>


                </div>
                
                <div>
                    
                <div className='itens'>
                <h1>Resumo do pedido</h1>
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
                                        <img  />
                                        <div>
                                            <h3> {item.produto.info.nome} </h3>

                                        </div>
                                    </div>
                                </td>
                                <td>
                                    {item.qtd}
                                </td>
                                <td>
                                    R$: {item.produto.info.valor}

                                </td>
                                <td>
                                    R$:  {item.qtd * item.produto.info.valor}
                                </td>
                            </tr>

                        )}


                    </tbody>
                </table>
            </div>


                </div>

            </section>


           

            <Rodape />
        </main>
    )
}