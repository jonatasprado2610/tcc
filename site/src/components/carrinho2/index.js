import { useState } from 'react';
import { API_URL } from '../../api/config';
import './index.scss'
import Storage from 'local-storage'

export default function Carrinho2({item: {produto:{info, categorias, imagens}, qtd},removerItem,}) {
    
    const [qtdProduto, setQtdProduto] = useState(qtd);


    function remover() {
        removerItem(info.id);
    }

    function calcularSubtotal() {
        const subtotal = qtdProduto * info.valor;
        return subtotal;
    }

   
    
    function exibirImagem() {
        if (imagens.length > 0) {
            return API_URL + '/' + imagens[0]; 
        }
        else {
            return 'https://icones.pro/wp-content/uploads/2021/08/icone-x-noir.png'
        }
    }

    

    function alterarContidade1(novaQtd){
        setQtdProduto(novaQtd);
        let carrinho = Storage('carrinho');
        let itemStorage = carrinho.find(item => item.id == info.id)
        itemStorage.qtd= novaQtd;

        Storage('carrinho', carrinho)





        
    
    };

   

    return (
        <section className="paga-carrinho2">

            <div className='c1mar'>
                <div className='c1xx' >
                    <div><img className='img' src={exibirImagem()} /></div>
                    <p>{info.nome}</p>
              
                    <div><img  onClick={remover}   src="./assets/images/lixeira1.png"/> </div>

                </div>
                <div className='c1xx2'>

                    
                    <div className='s1x'>

                   
                 
                 
                    

                       <div> <label>Qtd.</label>
                        <select onChange={e => alterarContidade1(e.target.value)} value={qtdProduto}>
                            <option>1</option>
                            <option>2</option>
                            <option>3</option>
                            <option>4</option>
                            <option>5</option>
                        </select>
                        </div>
                  
                       
                       
                       
                    </div>
                    <div className="xcx">
                        <div> <p>R$:{info.valor}</p></div>
                        <div><label>Subtotal</label></div>
                        <div><p>R$ {calcularSubtotal()}</p></div>

                        
                    </div>

                </div>



            </div>

        </section>
    )
}