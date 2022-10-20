import { useState } from 'react';
import { API_URL } from '../../api/config'
import './index.scss'
import Storage from 'local-storage'



export default function Car({item:{produto:{info,imagens } , qtd }, removerItem, carregarCarrinho}){
         const [qtdproduto, setQtdproduto]= useState(qtd)



         function remover(){
             removerItem(info.id);
         }


        function exibirImagem(){
            if(imagens.length>0){
                return API_URL + '/' + imagens[0];
            }
            else{
                return 'https://cdn-icons-png.flaticon.com/512/74/74375.png'
            }
        }

        function calcularSub1(){
           const subtotal =  qtdproduto * info.precoInicial
           return subtotal
        }

        function alterarQuantidade(novaQtd){
                setQtdproduto(novaQtd)
                let carrinho = Storage('carrinho')

                let itemStorage= carrinho.find(item => item.id == info.id);
                itemStorage.qtd=novaQtd;
                Storage('carrinho', carrinho);
                carregarCarrinho();
        }
        
      
    return(
        <section className='paga-compcar'>

               <div className='cx'>
                        <div className='card'>
                            <div>
                                
                            </div>
                            <div className='imgxx'>
                                <img src={exibirImagem()} />
                            </div>
                            <p>{info.nome}</p>
                            <p>R$:{info.precoInicial}</p>

                        </div>


                        <div>
                            <label>Qtd</label>
                            <select onChange={e => alterarQuantidade(e.target.value)}  value={qtdproduto} >
                                <option>1</option>
                                <option>2</option>
                                <option>3</option>
                                <option>4</option>
                            </select>
                        </div>

                        <div className='subtotal'>
                            <div>Subtotal</div>
                            <div>R${calcularSub1()}</div>
                        </div>
                        <div>
                            <p onClick={remover}>Excluir </p>
                        </div>


                    </div>

                   



        </section>
    )
}