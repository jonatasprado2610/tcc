import './index.scss'
import { useState, useEffect } from 'react'

export default function Filtros() {
   
     const [Marca, setMarca] = useState();
     const [Resposta, setResposta] = useState();

    
     return (
          <main className='page-filtros'>

               <h3>Marcas</h3>
               <div className='c1'>
                    <div className='c2'>
                         <div>
                              <p onClick={filtrarMarca}>Adidas</p>
                         </div>
                    </div>

                    <div className='c2'>
                         <div>
                              <input type="checkbox" value={Marca} onChange={e => setMarca(e.target.value)}/>
                         </div>
                         <div>
                              <p>Umbro</p>

                         </div>
                    </div>

                    <div className='c2'>
                         <div>
                         <input type="checkbox" value={Marca} onChange={e => setMarca(e.target.value)}/>
                         </div>
                         <div>
                              <p>Puma</p>

                         </div>
                    </div>

                    <div className='c2'>
                         <div>
                         <input type="checkbox" value={Marca} onChange={e => setMarca(e.target.value)}/>
                         </div>
                         <div>
                              <p>Nike</p>

                         </div>
                    </div>
                    <div className='c2'>
                         <div>
                         <input type="checkbox" value={Marca} onChange={e => setMarca(e.target.value)}/>
                         </div>
                         <div>
                              <p>Asics</p>

                         </div>
                    </div>
                    <div className='c2'>
                         <div>
                         <input type="checkbox" value={Marca} onChange={e => setMarca(e.target.value)}/>
                         </div>
                         <div>
                              <p>Mizuno</p>

                         </div>
                    </div>
                    <div className='c2'>
                         <div>
                         <input type="checkbox" value={Marca} onChange={e => setMarca(e.target.value)}/>
                         </div>
                         <div>
                              <p>Everlast</p>

                         </div>
                    </div>
                    <div className='c2'>
                         <div>
                         <input type="checkbox" value={Marca} onChange={e => setMarca(e.target.value)}/>
                         </div>
                         <div>
                              <p>Under Armour</p>

                         </div>
                    </div>
                    <div className='c2'>
                         <div>
                         <input type="checkbox" value={Marca} onChange={e => setMarca(e.target.value)}/>
                         </div>
                         <div>
                              <p>Lacoste</p>

                         </div>
                    </div>
                    <div className='c2'>
                         <div>
                         <input type="checkbox" value={Marca} onChange={e => setMarca(e.target.value)}/>
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

               <h3>Genero</h3>

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