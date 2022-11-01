import './index.scss';

import { Listar} from '../../api/cadastrarEndereco';
import { useEffect, useState } from 'react';
import storage from 'local-storage'
import { carregarProdutosPorId } from '../../api/produtoApi';


export default function MeusPedidos() {
    const [enderecos, setEnderecos] = useState([]);
    
    
    /*const [itens, setItens] = useState([]);
    
     async function carregarItens() {
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
           
    }*/

    async function carregarEnderecos() {
        const id = storage('cliente-logado').id;  
        const r = await Listar(id);
        setEnderecos(r);
    }

   

    useEffect(() => {
            carregarEnderecos();
            /*carregarItens();*/
    }, [])


    return(
        <main className='cont-detalhes'>
            <section className='section'>
                <div>
                    <h1>Detalhes do Pedido</h1>
                </div>
                <div className='div-numPedido'> 
                    Número do pedido: 123456

                    <hr></hr>
                    <p>Kdkf</p>
                </div>

             

                    <div className='infosProd'>
                                        <img src='https://static.allianzparqueshop.com.br/produtos/tenis-adidas-breaknet-feminino/28/NQQ-4379-028/NQQ-4379-028_zoom1.jpg?ts=1661862763&ims=544x' alt='' />
                                        <div >
                                            <h3>Tenis Campus Adidas</h3>
                                            <p>Tamanho: 42</p>
                                            <p>Cor: Preto, refletivo</p>
                                            <id>876</id>
                                        </div>
                                        <div>
                                            <h3>Realizado em 22/07/2022</h3>
                                            <button>Confirmar entrega</button>
                                        </div>
                                    </div>
                
                <div className='div-cards'>
                    <div className='cards'>
                        <h3>Valor total</h3>

                        <div>
                            <p>Valor total R$ </p>
                        </div>
                        <div>Frete Grátis</div>
                        <br></br>
                        <div>Valor total</div>
                    </div>
                   {/*<div className='cards'>
                        <h3>Pagamento</h3>
                        <div>
                            <p>Boleto bancário   R$</p>
                        </div>
                    </div>*/}
                    
                    <div className='cards'>
                      <h3 className='titulo-entrega'>--- ENTREGA ---</h3>
                        <div>
                            <p>Etrega Normal</p>
                        </div> 

                        {enderecos.map(item =>
                            <div classname= "div-infosende" >
                                <h3>{item.logradouro} {item.numero} </h3>
                                
                                <h3>{item.bairro} {item.estado} {item.cidade}</h3>
                                
                                <h3>{item.cep} </h3>
                                                                                             
                                <h3>{item.referencia}</h3>
                                                               
                                <h3>{item.complemento}:</h3>
                            </div>
                           
                            )}
                       
                    </div> 

                </div>
            </section>
        </main>
       
    )
}