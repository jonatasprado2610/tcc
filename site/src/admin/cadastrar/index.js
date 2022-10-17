import './index.scss'
import { Link, useNavigate,useParams } from 'react-router-dom'
import storage from 'local-storage'
import CabecarioAdmin from '../../components/cabeçarioAdmin'
import { useState, useEffect } from 'react'
import { listarMarcas } from '../../api/admin/marca'
import { listarCategorias } from '../../api/admin/categoria'

import {alterarProduto, carregarProdutosPorId, salvarImagem, salvarProduto } from '../../api/admin/produto'

import { listarTamanhos } from '../../api/admin/tamanho'
import { listarCores } from '../../api/admin/cor'
import { toast } from 'react-toastify';
import { API_URL } from '../../api/config'


export default function Cadastrar() {
    const navigate = useNavigate();
    const [idProduto, setIdProduto] = useState();
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
    const [marcas, setMarcas] = useState([]);
    const [idTamanho, setIdTamanho] = useState('');
    const [tamanho, setTamanho] = useState([]);
    const [cor, setCor] = useState([]);
    const [idCor, setIdcor] = useState('');

    const [imagem1, setImagem1]= useState();
    const [imagem2, setImagem2]= useState();
    const [imagem3, setImagem3]= useState();
    const [imagem4, setImagem4]= useState();
    const [imagem5, setImagem5]= useState();

    const [catSelecionadas, setCatSelecionadas] = useState([]);
    const [marcasSelecionadas, setMarcasSelecionadas] = useState([]);
    const [tamanhosSelecionados, setTamanhosSelecionados] = useState([]);
    const [coresSelecionadas, setCoresSelecionadas] = useState([]);
    const { id } = useParams();


    function sairClick() {
        storage.remove('usuario-logado')
        navigate('/loginadm');
    }



    
    async function salvar() {
        try {
            const prevoProduto = Number(precoDe.replace(',', '.'));
            
            if(!id){
            const r = await salvarProduto( nome, precoDe, precoPor, maxParcelas, qtdItens, categoriaDiaria, descricao,
                 marcasSelecionadas, tamanhosSelecionados, coresSelecionadas, catSelecionadas );
                 
                 await salvarImagem(r.id, imagem1,imagem2,imagem2,imagem3,imagem4,imagem5);

            toast.dark('Produto cadastrado com sucesso');
            }else{
                    await alterarProduto( id, nome, precoDe, precoPor, maxParcelas, qtdItens, categoriaDiaria, descricao,
                    marcasSelecionadas, tamanhosSelecionados, coresSelecionadas, catSelecionadas );
                    
                await salvarImagem(id, imagem1, imagem2, imagem2, imagem3, imagem4, imagem5);
               toast.dark('Produto alterado com sucesso');
            }


        }
        catch (err) {
            toast.error(err.response.data.erro);
        }

    }

    function removerCategoria(id) {
        const x = catSelecionadas.filter(item => item != id);
        setCatSelecionadas(x);
    }
    function removerTamanhos(id){
        const x = tamanhosSelecionados.filter(item => item != id);
        setTamanhosSelecionados(x)
    }
    function removerMarcas(id){
        const x = marcasSelecionadas.filter(item => item != id );
        setMarcasSelecionadas(x)
    }

    function removerCores(id) {
        const x = coresSelecionadas.filter(item => item != id);
        setCoresSelecionadas(x);
    }

    function buscarNomeCategoria(id) {
        const cat = categorias.find(item => item.id == id);
        return cat.categoria;
    }

    function buscarNomeTamanho(id) {
        const tam = tamanho.find(item => item.id == id);
        return tam.tamanho;
    }

    
    function buscarNomeMarca(id) {
        const marc = marcas.find(item => item.id == id);
        return marc.marca;
    }

    
    function buscarNomeCores(id) {
        const co = cor.find(item => item.id == id);
        return co.cor;
    }


    async function carregarCores() {
        const respo = await listarCores();
        setCor(respo);
    }


    async function carregarTamanhos() {
        const resp = await listarTamanhos();
        setTamanho(resp);
    }

    async function carregarMarcas() {
        const re = await listarMarcas();
        setMarcas(re);
    }

    async function carregarCategorias() {
        const r = await listarCategorias();
        setCategorias(r);
    }
    
    function adicionarMarcas() {
        if (!idMarcas) return;
        if (!marcasSelecionadas.find(item => item == idMarcas)) {
            const marca = [...marcasSelecionadas, idMarcas];
            setMarcasSelecionadas(marca);
        }
    }

    function adicionarCores() {
        if (!idCor) return;
        if (!coresSelecionadas.find(item => item == idCor)) {
            const cor = [...coresSelecionadas, idCor];
            setCoresSelecionadas(cor);
        }
    }
    
    
    function adicionarTamanhos() {
        if (!idTamanho) return;
        if (!tamanhosSelecionados.find(item => item == idTamanho)) {
            const tamanhoss = [...tamanhosSelecionados, idTamanho];
            setTamanhosSelecionados(tamanhoss);
        }
    }


    function adicionarCategoria() {
        if (!idCategoria) return;

        if (!catSelecionadas.find(item => item == idCategoria)) {
            const categorias = [...catSelecionadas, idCategoria];
            setCatSelecionadas(categorias);
        }
    }

    async function carregarProduto() {
        if (!id) return
        const r = await carregarProdutosPorId(id);

        setIdProduto(r.info.id);
        setNome(r.info.nome);
        if (r.imagens.length > 0) {
            setImagem1(r.imagens[0]);
        }
        if (r.imagens.length > 1) {
            setImagem2(r.imagens[1]);
        }
        if (r.imagens.length > 2) {
            setImagem3(r.imagens[2]);
        }
        if (r.imagens.length > 3) {
            setImagem4(r.imagens[3]);
        }
        if (r.imagens.length > 4) {
            setImagem5(r.imagens[4]);
        }
        setPrecoDe(r.info.precoInicial.toString());
        setPrecoPor(r.info.precoFinal.toString());
        setMaxParcelas(r.info.parcelas);
        setQtdItens(r.info.quantidade);
        setCategoriaDiaria(r.info.diaria);
        setDescricao(r.info.descricao);
        setMarcasSelecionadas(r.marcas);
        setTamanhosSelecionados(r.tamanhos)
        setCoresSelecionadas(r.cores)
        setCatSelecionadas(r.categorias);
}

    function escolherImagem(inputId){
        document.getElementById(inputId).click();
    }
    
    function exibirImagem(imagem){
        if(imagem== undefined){

            return'/assets/images/pngwing.com.png'

        }
        else if (typeof (imagem) == 'string') {
            return `${API_URL}/${imagem}`
        }
        else {
               return URL.createObjectURL(imagem);
        }  
    }

    useEffect(() => {
        carregarCategorias();
        carregarMarcas();
        carregarTamanhos();
        carregarCores();
        carregarProduto();
    }, [])

    return (
        <main className='page-cadastrar'>
           
            
            <div onClick={sairClick}>
                <Link to="/loginadm">Sair</Link>
            </div>

            <CabecarioAdmin />

            <div className="containermar">

                

                <div className="containerx">
                    <div><h2> {id ? 'Alterar Produto' : 'Novo Produto'} </h2></div>
                    <div className='containercar3xx'>
                        <h3> Nome Produto: </h3>
                        <input className='input' type='text' placeholder='Nome' value={nome} onChange={e => setNome(e.target.value)} />
                    </div>
                    <div className="containercar">
                        <div className="sub1">
                            <h3>Imagem Principal</h3>
                            <div className="ss1">

                                <img src={exibirImagem(imagem1)} alt="" onClick={()=>escolherImagem('imagem1')} />
                                {imagem1 ? <span onClick={() => setImagem1()}>Remover</span> : ''}
                                
                            </div>
                            <div>
                            <input className='teste'  type='file' id='imagem1' onChange={e => setImagem1(e.target.files[0])}             />
                            <input className='teste' type='file' id='imagem2' onChange={e => setImagem2(e.target.files[0])}             />
                            <input className='teste'  type='file' id='imagem3' onChange={e => setImagem3(e.target.files[0])}             />
                            <input className='teste'  type='file' id='imagem4' onChange={e => setImagem4(e.target.files[0])}             />
                            <input className='teste' type='file' id='imagem5' onChange={e => setImagem5(e.target.files[0])}             />
                            </div>
                        </div>


                        <div className="containercar2">
                            <h3>Imagens secundarias</h3>
                            <div className="sub2">
                                <div className='paraBaixo'>
                                    <img src={exibirImagem(imagem2)}alt=""  onClick={()=>escolherImagem('imagem2')} />
                                    {imagem2 ? <span onClick={() => setImagem2()}>Remover</span> : ''}

                                </div>
                                <div className='paraBaixo'>
                                    <img src={exibirImagem(imagem3)} alt="" onClick={()=>escolherImagem('imagem3')} />
                                    {imagem3 ? <span onClick={() => setImagem3()}>Remover </span> : ''}
                                </div>
                            </div>

                            <div className="sub2">
                                <div className='paraBaixo'>
                                    <img src={exibirImagem(imagem4)} alt=""  onClick={()=>escolherImagem('imagem4')}/>
                                    {imagem4 ? <span onClick={() => setImagem4()}>Remover</span> : ''}
                                </div>
                                <div className='paraBaixo'>
                                    <img src={exibirImagem(imagem5)} alt="" onClick={()=>escolherImagem('imagem5')} />
                                    {imagem5 ? <span onClick={() => setImagem5()}>Remover</span> : ''}
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
                        <div  className='opx'>
                            <h3>descricao</h3>
                            <textarea type="text" value={descricao} onChange={e => setDescricao(e.target.value)} />
                        </div>
                        <div className='opx'>
                            <h3>Marca</h3>
                            <select value={idMarcas} onChange={e => setIdMarcas(e.target.value)} name="select">
                                <option selected hidden> Selecione </option>  

                                {marcas.map(item =>
                                        <option value={item.id}> {item.marca} </option>
                                )}

                            </select>
                            <button className='btx2'  onClick={adicionarMarcas} >+</button>
                            
                            {marcasSelecionadas.map(id =>
                                <div className='selecionados' onClick={() => removerMarcas(id)}>
                                    {buscarNomeMarca(id)}
                                </div>
                            )}
                        
                        </div>
                       
                       
                    </div>
                    <div className="containercar6">
                      <div  className='opx'>
                            <h3>Tamanhos </h3>
                            <select value={idTamanho} onChange={e => setIdTamanho(e.target.value)} >
                                <option selected hidden> Selecione </option>
                                
                                        {tamanho.map(item =>
                                            <option value={item.id}> {item.tamanho} </option>
                                        )}

                            </select>
                            <button className='btx2'  onClick={adicionarTamanhos} > +</button>
                            
                            <div className='cat-conteiner'>
                            {tamanhosSelecionados.map(id =>
                                <div className='selecionados' onClick={()=> removerTamanhos(id)}>
                                    {buscarNomeTamanho(id)}
                                </div>
                            )}
                        </div>
                        </div>

                        <div  className='opx'>
                            <h3>cores </h3>
                            <div>
                                <select value={idCor} onChange={e => setIdcor(e.target.value)} name="selecionar-uma-cor">
                                            <option selected hidden>Selecione</option>
                                            {cor.map(item =>
                                                <option value={item.id}> {item.cor} </option>
                                            )}
                                </select>
                                <button className='btx2'  onClick={adicionarCores}  >+</button>
                                <div>
                        <div className='cat-conteiner'>
                            {coresSelecionadas.map(id =>
                                <div className='selecionados' onClick={()=> removerCores(id)}>
                                    {buscarNomeCores(id)}
                                </div>
                            )}
                        </div>

                    </div>
                            </div>
                        </div>
                       
                         <div  className='opx'>
                         <h3>Categoria</h3>
                            <select value={idCategoria} onChange={e => setIdCategoria(e.target.value)} >
                                <option selected hidden>Selecione</option>

                                {categorias.map(item =>
                                    <option value={item.id}> {item.categoria} </option>
                                )}
                            </select>
                            <button onClick={adicionarCategoria} className='btx2' >+</button>
                            <div className='cat-conteiner'>
                            {catSelecionadas.map(id =>
                                <div className='selecionados' onClick={() => removerCategoria(id)}>

                                    {buscarNomeCategoria(id)}
                                </div>
                            )}
                        </div>
                        </div>
                    
                    <div>
                        

                    </div>
                       
                </div>
                    <div className="SX">
                        <button onClick={salvar}> Salvar </button>
                    </div>


                </div>

            </div>
        </main>
    )
}