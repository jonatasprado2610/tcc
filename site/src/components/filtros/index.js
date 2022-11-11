import './index.scss'
import { listarProdutosporMarca } from '../../api/produtoApi'
import { listarProdutosporTamanho } from '../../api/produtoApi'
import { listarProdutosporGenero } from '../../api/produtoApi'
import { listarProdutosporcategoria } from '../../api/produtoApi'
import { useState } from 'react'


export default function Filtros() {
   
     const [filtroMarca, setFiltoMarca] = useState();
     const [filtroTamaho, setFiltoTamanho] = useState();
     const [filtroGenero, setFiltoGenero] = useState();
     const [filtroCategoria, setFiltoCategoria] = useState();


     return (
          <main className='page-filtros'>

               <h3>Marcas</h3>
               <div className='c1'>
                    <div className='c2'>
                         <div>
                              <input type="checkbox"/>
                         </div>
                         <div>
                              <p>Adidas</p>

                         </div>
                    </div>

                    <div className='c2'>
                         <div>
                              <input type="checkbox" />
                         </div>
                         <div>
                              <p>Umbro</p>

                         </div>
                    </div>

                    <div className='c2'>
                         <div>
                              <input type="checkbox" />
                         </div>
                         <div>
                              <p>Puma</p>

                         </div>
                    </div>

                    <div className='c2'>
                         <div>
                              <input type="checkbox" />
                         </div>
                         <div>
                              <p>Nike</p>

                         </div>
                    </div>
                    <div className='c2'>
                         <div>
                              <input type="checkbox" />
                         </div>
                         <div>
                              <p>Asics</p>

                         </div>
                    </div>
                    <div className='c2'>
                         <div>
                              <input type="checkbox" />
                         </div>
                         <div>
                              <p>Mizuno</p>

                         </div>
                    </div>
                    <div className='c2'>
                         <div>
                              <input type="checkbox" />
                         </div>
                         <div>
                              <p>Everlast</p>

                         </div>
                    </div>
                    <div className='c2'>
                         <div>
                              <input type="checkbox"/>
                         </div>
                         <div>
                              <p>Under Armour</p>

                         </div>
                    </div>
                    <div className='c2'>
                         <div>
                              <input type="checkbox" />
                         </div>
                         <div>
                              <p>Lacoste</p>

                         </div>
                    </div>
                    <div className='c2'>
                         <div>
                              <input type="checkbox"  />
                         </div>
                         <div>
                              <p>Fila</p>

                         </div>
                    </div>


               </div>


               <h3>Tamanho</h3>
               <div className='c1'>
                    <div className='c2'>
                         <ul>
                              <li>
                                    <input type ='checkbox' />
                                        
                               </li>

                         </ul>
                    </div>

               </div>

               <h3>Gênero</h3>

               <div className="c3">


                    <div className='c2'>
                         <div>
                              <input type="checkbox" />
                         </div>
                         <div>
                              <p>Masculino</p>

                         </div>
                    </div>


                    <div className='c2'>
                         <div>
                              <input type="checkbox" id="scales" />
                         </div>
                         <div>
                              <p>Feminio</p>

                         </div>
                    </div>


                    <div className='c2'>
                         <div>
                              <input type="checkbox" id="scales" />
                         </div>
                         <div>
                              <p>Unissex</p>

                         </div>
                    </div>


               </div>

               <h3>Categoria</h3>
               <div className='c1'>
                    <div className='c2'>
                         <div>
                              <input type="checkbox" id="scales" />
                         </div>
                         <div>
                              <p>xxxxxx</p>

                         </div>
                    </div>

                    <div className='c2'>
                         <div>
                              <input type="checkbox" />
                         </div>
                         <div>
                              <p>xxxxxx</p>

                         </div>
                    </div>

                    <div className='c2'>
                         <div>
                              <input type="checkbox" />
                         </div>
                         <div>
                              <p>xxxxxx</p>

                         </div>
                    </div>
                    <div className='c2'>
                         <div>
                              <input type="checkbox" placeholder='vasco da gama' id="scales" />
                         </div>
                         <div>
                              <p>xxxxxx</p>

                         </div>
                    </div>
                    <div className='c2'>
                         <div>
                              <input type="checkbox" id="scales" />
                         </div>
                         <div>
                              <p>xxxxxx</p>

                         </div>
                    </div>
                    <div className='c2'>
                         <div>
                              <input type="checkbox" id="scales" />
                         </div>
                         <div>
                              <p>xxxxxx</p>

                         </div>
                    </div>
                    <div className='c2'>
                         <div>
                              <input type="checkbox" id="scales" />
                         </div>
                         <div>
                              <p>xxxxxx</p>

                         </div>
                    </div>
                    <div className='c2'>
                         <div>
                              <input type="checkbox" id="scales" />
                         </div>
                         <div>
                              <p>xxxxxx</p>

                         </div>
                    </div>
                    <div className='c2'>
                         <div>
                              <input type="checkbox" id="scales" />
                         </div>
                         <div>
                              <p>xxxxxx</p>

                         </div>
                    </div>




               </div>




          </main>
     )
}