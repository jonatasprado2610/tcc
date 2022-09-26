import './index.scss'
import { Link } from 'react-router-dom'
import storage from 'local-storage'
import { useNavigate } from 'react-router-dom'
import CabecarioAdmin from '../../components/cabeçarioAdmin'
import { useState, useEffect } from 'react'
import { listarMarcas } from '../../api/marca'
import { listarCategorias } from '../../api/categoria'
import { salvarProduto } from '../../api/produto'

export default function Cadastrar(){

        const navigate = useNavigate();
        const [nome, setNome] = useState('');
        const [precoDe, setPrecoDe] = useState();
        const [precoPor, setPrecoPor] = useState();
        const [maxParcelas, setMaxParcelas] = useState();
        const [qtdItens, setQtdItens] = useState();
        const [categoriaDiaria, setCategoriaDiaria] = useState(false);
        const [descricao, setDescricao] = useState('');
        const [idCategoria, setIdCategoria] = useState();
        const [categorias, setCategorias] = useState('');
        const [marcas, setMarcas] = useState('');
        const [tamanho, setTamanho] = useState('');

        const [catSelecionadas, setCatSelecionadas] = useState([]);


    function sairClick(){
        storage.remove('usuario-logado')
            navigate('/loginadm');
    }

    async function salvar() {
        try {
            const prevoProduto = Number(precoDe.replace(',', '.'));

            const r = await salvarProduto (nome, precoDe, precoPor, maxParcelas,qtdItens,categoriaDiaria,descricao, catSelecionadas);
            alert('Produto cadastrado com sucesso');
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

    return(
        <main className='page-cadastrar'> 
        <div onClick={sairClick}>
              <Link to="/loginadm">Sair</Link> 
        </div>
     
        <CabecarioAdmin/>

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
                    <input type='text' placeholder='Produto x' value={nome} onChange={e => setNome(e.target.value) } />
                </div>
                 <div className="containercar">
                     <div className="sub1">
                         <h3>Imagem Principal</h3>
                         <div className="ss1">
                             <img src="./assets/images/bx_upload 1.png"  alt=""/>
                         </div>
                     </div>


                     <div className="containercar2">
                         <h3>Imagens secundarias</h3>
                         <div className="sub2">
                                    <div>
                                    <img src="./assets/images/bx_upload 1.png"  alt=""/>
                                </div>
                                 <div>
                                    <img src="./assets/images/bx_upload 1.png"  alt=""/>
                                </div>
                         </div>

                         <div className="sub2">
                                    <div>
                                    <img src="./assets/images/bx_upload 1.png"  alt=""/>
                                </div>
                                 <div>
                                    <img src="./assets/images/bx_upload 1.png"  alt=""/>
                                </div>
                         </div>
                         
                     </div>
                       

                 </div>

                 <div  className="containercar3">
                     <div>
                         <h3>Valor Inicial</h3>
                         <input type="text" placeholder='R$' value={precoDe} onChange={e => setPrecoDe(e.target.value) } />
                     </div>
                     <div>
                         <h3>Valor Parcelado</h3>
                         <input type="text" placeholder='R$' value={precoPor} onChange={e => setPrecoPor(e.target.value) } />
                     </div>
                     <div>
                         <h3>max de parcelas</h3>
                         <input type="text"  value={maxParcelas} onChange={e => setMaxParcelas(e.target.value) } />
                     </div>
                     <div>
                         <h3>Oferta diária</h3>
                         <input type="checkbox" value={categoriaDiaria} onChange={e => setCategoriaDiaria(e.target.checked) } />
                     </div>

                 </div>

                 <div className="containercar4">
                     <div>
                         <h3>Quantidade Disponivel</h3>
                         <input type="text" value={qtdItens} onChange={e => setQtdItens(e.target.value) }/>
                     </div>
                     <div>
                         <h3>Marca</h3>
                     <select name="select">
                            <option>Nike</option>
                            <option >Pulma</option>
                            <option >Adidas</option>
                            <option >Lacost</option>
                            <option >Evelest</option>
                            <option >Mizuno</option>

                       </select>
                     </div>
                 </div>

                 <div className="containercar5">

                    <div>
                    <label>Tamanhos pra roupa</label>
                        <select>
                        <option selected disabled hidden>Selecione</option>
                        <option>PP</option>
                        <option>P</option>
                        <option>M</option>
                        <option>G</option>
                        <option>GG</option>




                        </select>
                        <button>+</button>
                    </div>
                    

                     <div className="sub3">
                         <div>
                             <input type="checkbox" />
                             <h5>Masculino</h5>
                         </div>
                         <div>
                             <input type="checkbox" />
                             <h5>Femino</h5>
                         </div>
                         <div>
                             <input type="checkbox" />
                             <h5>Unissex</h5>
                         </div>
                     
                    
                     </div>

                     <div>
                    <label>Tamanhos</label>
                        <select>
                        <option selected disabled hidden>Selecione</option>
                        <option>30</option>
                        <option>32</option>
                        <option>34</option>
                        <option>36</option>
                        <option>40</option>
                        <option>42</option>
                        <option>44</option>


                        </select>
                        <button>+</button>
                    </div>
                     
                    

                     

                 </div>

                 <div className="containercar6">
      
                         <div>
                             <h3>Cadastrar uma nova cor </h3>
                             <input className="inputx" type="text" placeholder="nome" />
                             <input type="color" />

                             <button>+</button>
                         </div>

                         <div>
                           <h3>-cores- Cadastradas</h3>
                           <div>

                                 <select name="selecionar uma cor">
                                        <option > SlateBlue	#6A5ACD</option>
                                        <option > SlateBlue	#6A5ACDc</option>
                                        <option > SlateBlue	#6A5ACDc</option>
                                        <option > SlateBlue	#6A5ACDc</option>
                                        <option > SlateBlue	#6A5ACDa</option>
                                        <option > SlateBlue	#6A5ACD</option>
                                        <option > SlateBlue	#6A5ACD</option>
                              </select>
                           <button>+</button>
                                      
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