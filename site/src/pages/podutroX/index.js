import './index.scss'
import Storage from 'local-storage'
import Cabecario from '../../components/cabeçario';
import Rodape from '../../components/Rodape'
import { Navigate, useParams } from 'react-router-dom'
import { useEffect, useState } from 'react';
import { carregarProdutosPorId, Avaliar, ListarA } from '../../api/produtoApi';
import { API_URL } from '../../api/config';
import { toast } from 'react-toastify';
import { useNavigate } from 'react-router-dom';
import storage from 'local-storage'

export default function Produtrox() {

    const [produto, setProduto] = useState({ categorias: [], cores: [], imagens: [], info: {}, marcas: [], tamanhos: [] })
    const [imagemPrincipal, setImagemPrincipal] = useState(0)
    const { id } = useParams();
    const navigate = useNavigate();
    const [ava, setAva] = useState('');
    const [avaliacao, setAvaliacao] = useState('');
    const [varX, setVarx] = useState([])




    async function AvaliarX() {
        const cliente = storage('cliente-logado').id;

        try {
            const r = await Avaliar(cliente, id, ava, avaliacao,)
            toast.dark('Produto avaliado')
        } catch (err) {
            toast(err.response.data.erro)
        }




    }

    function lerEstrelas(valor, estrela) {
        if (valor > 5) {
            valor = Math.floor(valor / 2);
        }
        if (valor <= estrela)
            return 'star-icon ativo'
        else
            return 'star-icon'
    }

    function exibirImagem() {

        return 'https://cdn-icons-png.flaticon.com/512/1828/1828884.png'

    }

    function exibirImagem2() {

        return '/circulo.png'

    }
    async function carregarAVa() {
        const r = await ListarA(id)
        setVarx(r)
        console.log(r)




    }

    async function carregarPagina() {
        const r = await carregarProdutosPorId(id)

        setProduto(r)
    }
    useEffect(() => {
        carregarPagina();
        carregarAVa();
    }, [])

    function exibirImagemPrincipal() {

        if (produto.imagens.length >= 0) {
            return API_URL + '/' + produto.imagens[imagemPrincipal]
        }

        else {
            return '/assets/images/tenis1.png';
        }

    }
    function exibirImagens(imagem) {
        return API_URL + '/' + imagem;
    }


    function comprarDireta() {

        let comprax = []
        if (Storage('compra')) {
            comprax = Storage('compra')
        }
        if (!comprax.find(item => item.id === id)) {
            comprax.push({
                id: id,
                qtd: 1,
            })
            Storage('compra', comprax);

        }
        navigate('/ende')
        toast.dark('Produto escolhido')

    }

    function adicionarAoCarrinho() {

        let carrinho = []
        if (Storage('carrinho')) {
            carrinho = Storage('carrinho')
        }
        if (!carrinho.find(item => item.id === id)) {
            carrinho.push({
                id: id,
                qtd: 1,
            })
            Storage('carrinho', carrinho);

        }
        toast.dark('Produto adicionado ao carrinho')

    }


    return (

        <main className='page-px'>
            <Cabecario></Cabecario>


            <section className='xsection'>
                <div className='container1'>
                    <div className='subx'>
                        <div className='sub1'>
                            <img className='img1' src={exibirImagemPrincipal()} alt='' />
                        </div>


                        <div className='img2'>
                            {produto.imagens.map((item, pos) =>
                                <img src={exibirImagens(item)} onClick={() => setImagemPrincipal(pos)}
                                />
                            )}


                        </div>
                        <div className='subdes'>
                            <h1>Descrição</h1>
                            <p className='p1'>{produto.info.descricao}</p>
                        </div>


                    </div>

                    <div className='container2'>
                        <div className="sub2">
                            <p>Novo  |  1701 vendidos</p>


                            <div>

                                <h1>{produto.info.nome}</h1>
                            </div>

                            <div className='s'>
                                <img src={exibirImagem()} alt='' />
                                <img src={exibirImagem()} alt='' />
                                <img src={exibirImagem()} alt='' />
                                <img src={exibirImagem()} alt='' />
                                <img src={exibirImagem()} alt='' />
                            </div>

                            <div>
                                <p className='preço1'>R$ {produto.info.precoInicial}</p>
                                <p className='preço2'>ou 4x de {produto.info.precoFinal}</p>
                            </div>

                            <div className="sub3">
                                <div>
                                    <h4>Cores</h4>

                                    <select>
                                        <option selected disabled hidden>Selecione</option>
                                        <option>verde</option>

                                    </select>
                                </div>

                                <div>
                                    <h4>Tamanho</h4>
                                    <select>
                                        <option selected disabled hidden>Selecione</option>

                                    </select>
                                </div>

                            </div>

                            <div className='sub4'>
                                <h4>Quantidae disponivel:</h4>
                                <h3> {produto.info.quantidade}</h3>

                            </div>

                            <div className='sub5'>
                                <button onClick={comprarDireta} className='bt2'>Comprar agora </button><br></br>
                                <button onClick={adicionarAoCarrinho} className='bt3'>Adicionar no carrinho</button>
                            </div>

                            <div className='sub6'>
                                <div>
                                    <img src={exibirImagem2()} alt="" />
                                </div>
                                <div>
                                    <p className='p2'>Devolução grátis.</p>
                                    <p>Você tem 30 dias a partir da data de recebimento</p>
                                </div>
                            </div>

                            <div className='sub6'>
                                <div>

                                </div>
                                <div>
                                    <p className='p2'>Devolução grátis.</p>
                                    <p>Você tem 30 dias a partir da data de recebimento</p>
                                </div>
                            </div>


                        </div>
                    </div>




                </div>



                <div className='container3'>
                    <p className='p3'>Opiniões sobre o Produto</p>

                    <div className='sub7'>
                        <div className='sub8'>
                            <input className='x' type="text" value={avaliacao} onChange={e => setAvaliacao(e.target.value)} placeholder='Digite aqui sua opinião sobre o produto' />
                            <div className='s'>
                                <label>Dê uma nota para o produto</label>
                                <input className='x2' value={ava} onChange={e => Number(setAva(e.target.value))} />

                                <div className='cont-avaliacao-star'>

                                    <button onClick={AvaliarX} >Publicar</button>
                                </div>



                            </div>


                        </div>






                        <div className='sx'>
                            {varX.map(item =>


                                <div className='sub39'>
                                   <p>Nota: {item.Avaliacao}</p>
                                  <p>Avaliação: {item.DsAvalicao}</p>
                                </div>






                            )}

                        </div>
                        <div className='s'>

                        </div>







                    </div>

                    <div className='sub7'>



                    </div>

                </div>

            </section>

            <div className='subx1'>

                <Rodape />
            </div>





        </main>
    )
}