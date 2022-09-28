import './index.scss'
import { Link } from 'react-router-dom'
import storage from 'local-storage'
import { useNavigate } from 'react-router-dom'
import CabecarioAdmin from '../../components/cabeçarioAdmin'
import { useState, useEffect } from 'react'
import { listarMarcas } from '../../api/marca'
import { listarCategorias } from '../../api/categoria'
import { salvarProduto } from '../../api/produto'


export default function Cadastrar() {

    const navigate = useNavigate();
    const [nome, setNome] = useState('');
    const [precoDe, setPrecoDe] = useState();
    const [precoPor, setPrecoPor] = useState();
    const [maxParcelas, setMaxParcelas] = useState();
    const [qtdItens, setQtdItens] = useState();
    const [categoriaDiaria, setCategoriaDiaria] = useState(false);
    const [descricao, setDescricao] = useState('');
    const [idCategoria, setIdCategoria] = useState();
    const [categorias, setCategorias] = useState([]);
    const [idMarcas, setIdMarcas] = useState('');
    const [marcas, setMarcas] = useState('');
    const [idTamanho, setIdTamanho] = useState('');
    const [tamanho, setTamanho] = useState('');
    const [idCor, setIdcor] = useState('');

    const [catSelecionadas, setCatSelecionadas] = useState([]);


    function sairClick() {
        storage.remove('usuario-logado')
        navigate('/loginadm');
    }

    async function salvar() {
        try {
            const prevoProduto = Number(precoDe.replace(',', '.'));

            const r = await salvarProduto(nome, precoDe, precoPor, maxParcelas, qtdItens, categoriaDiaria, descricao, catSelecionadas);
            alert('Produto cadastrado com sucesso');
            console.log(r)
        }
        catch (err) {
            alert(err.response.data.erro);
        }

    }


    function buscarNomeCategoria(id) {
        const cat = categorias.find(item => item.id == id);
        return cat.categoria;
    }


    async function carregarMarcas() {
        const r = await listarMarcas();
        setMarcas(r);
    }

    async function carregarCategorias() {
        const r = await listarCategorias();
        setCategorias(r);
    }

    function adicionarCategoria() {
        if (!catSelecionadas.find(item => item == idCategoria)) {
            const categorias = [...catSelecionadas, idCategoria];
            setCatSelecionadas(categorias);
        }
    }

    useEffect(() => {
        carregarCategorias();
        carregarMarcas();
    }, [])

    return (
        <main className='page-cadastrar'>
            <div onClick={sairClick}>
                <Link to="/loginadm">Sair</Link>
            </div>

            <CabecarioAdmin />

            <div className="containermar">

                <div className="container1">
                    <p>aaa</p>
                    <p>aaa</p>
                    <p>aaa</p>
                    <p>aaa</p>


                </div>

                <div className="containerx">
                    <div><h2>Cadastrar produto</h2></div>
                    <div className='containercar3'>
                        <h3> Nome Produto: </h3>
                        <input type='text' placeholder='Produto x' value={nome} onChange={e => setNome(e.target.value)} />
                    </div>
                    <div className="containercar">
                        <div className="sub1">
                            <h3>Imagem Principal</h3>
                            <div className="ss1">
                                <img src="./assets/images/bx_upload 1.png" alt="" />
                            </div>
                        </div>


                        <div className="containercar2">
                            <h3>Imagens secundarias</h3>
                            <div className="sub2">
                                <div>
                                    <img src="./assets/images/bx_upload 1.png" alt="" />
                                </div>
                                <div>
                                    <img src="./assets/images/bx_upload 1.png" alt="" />
                                </div>
                            </div>

                            <div className="sub2">
                                <div>
                                    <img src="./assets/images/bx_upload 1.png" alt="" />
                                </div>
                                <div>
                                    <img src="./assets/images/bx_upload 1.png" alt="" />
                                </div>
                            </div>

                        </div>


                    </div>

                    <div className="containercar3">
                        <div>
                            <h3>Valor Inicial</h3>
                            <input type="text" placeholder='R$' value={precoDe} onChange={e => setPrecoDe(e.target.value)} />
                        </div>
                        <div>
                            <h3>Valor Parcelado</h3>
                            <input type="text" placeholder='R$' value={precoPor} onChange={e => setPrecoPor(e.target.value)} />
                        </div>
                        <div>
                            <h3>max de parcelas</h3>
                            <input type="text" value={maxParcelas} onChange={e => setMaxParcelas(e.target.value)} />
                        </div>
                        <div>
                            <h3>Oferta diária</h3>
                            <input type="checkbox" value={categoriaDiaria} onChange={e => setCategoriaDiaria(e.target.checked)} />
                        </div>

                    </div>

                    <div className="containercar4">
                        <div>
                            <h3>Quantidade Disponivel</h3>
                            <input type="text" value={qtdItens} onChange={e => setQtdItens(e.target.value)} />
                        </div>
                        <div>
                            <h3>Marca</h3>
                            <select name="select">
                                <option selected disabled hidden>Selecione</option>  
                            </select>
                            <button>+</button>
                        </div>
                        <div>
                            <h3>descricao</h3>
                            <textarea type="text" value={descricao} onChange={e => setDescricao(e.target.value)} />
                        </div>
                    </div>
  
                    
                    <div>

                    

                    <div className="containercar6">
                    <div >
                    <div>
                            <h3>Tamanhos </h3>
                            <select>
                                <option selected disabled hidden>Selecione</option>
                            </select>
                            <button>+</button>
                        </div>

                        <div>
                            <h3>cores </h3>
                            <div>
                                <select name="selecionar uma cor">
                                    <option selected disabled hidden>Selecione</option>
                                </select>
                                <button>+</button>

                            </div>


                        </div>
                    </div>


                        <label>Categoria:</label>
                        <div className='gpo-categoria'>
                            <select value={idCategoria} onChange={e => setIdCategoria(e.target.value)} >
                                <option selected disabled hidden>Selecione</option>

                                {categorias.map(item =>
                                    <option value={item.id}> {item.categoria} </option>
                                )}
                            </select>
                            <button onClick={adicionarCategoria} className='btn-categoria'>+</button>
                        </div>
                    </div>
                    <div>
                        <div className='cat-conteiner'>
                            {catSelecionadas.map(id =>
                                <div className='cat-selecionada'>
                                    {buscarNomeCategoria(id)}
                                </div>
                            )}
                        </div>

                    </div>
                    </div>
                    <div className="SX">
                        <button onClick={salvar}>Cadastrar Produto</button>
                    </div>


                </div>

            </div>
        </main>
    )
}