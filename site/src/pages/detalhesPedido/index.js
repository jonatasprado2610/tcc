import './index.scss';

import { Listar} from '../../api/cadastrarEndereco';
import { useEffect, useState } from 'react';
import storage from 'local-storage'
import { carregarProdutosPorId } from '../../api/produtoApi';
import Voltar from '../../components/voltar';


export default function DetalhesPedidos(props) {
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

                <Voltar pag={'/'}></Voltar>


                <div>
                    <h1>Detalhes do Pedido</h1>
                </div>

                <div className='div-numPedido'> 
                    Número do pedido: 123456

                    <hr></hr>
                    <p>Kdkf</p>
                </div>

             

                    <div className='infosProd'> 
                        <div className='descricoes' >
                            <img className='img-produto' src='https://static.allianzparqueshop.com.br/produtos/tenis-adidas-breaknet-feminino/28/NQQ-4379-028/NQQ-4379-028_zoom1.jpg?ts=1661862763&ims=544x' alt='' />
                            <div>
                                <h3>Tenis Adidas Campus hair nothion cfh</h3>
                                <p>Tamanho: 42</p>
                                <p>Cor: Preto, refletivo</p>
                                <id>876</id>
                            </div>
                        </div>

                        <div className='descricoes2'>
                            <h3>Realizado em 22/07/2022</h3>
                            <button className='botao-confirmar'>Confirmar entrega</button>
                        </div>
                    </div>
                
                <div className='div-cards'>
                    <div className='cards'>
                    <h2 className='titulo-entrega'> VALOR </h2>
                        <div className='div-infosende'>
                            <h3 className='infosende'>Valor total: _________  R$249,99</h3>
            
                            <h3 className='infosende'>Valor total R$ </h3>
                            
                            <h3 className='infosende'>Frete Grátis</h3>
            
                            <h3 className='infosende'>Valor total</h3>
                        </div>
                    </div>
                   {/*<div className='cards'>
                        <h3>Pagamento</h3>
                        <div>
                            <p>Boleto bancário   R$</p>
                        </div>
                    </div>*/}
                    
                    <div className='cards'>
                      <h2 className='titulo-entrega'> ENTREGA </h2>
                        <div>
                            <p>Entrega Normal</p>
                        </div> 

                        {enderecos.map(item =>
                            <div classname= "div-infosende" >
                                {/*PERGUNTAR PRO BRUNO*/}
                                {/*como fazer para formatar no scss so as <h3> dessa div?? */ }

                                <h3 className='infosende'>{item.logradouro} {item.numero} </h3>
                                
                                <h3 className='infosende'>{item.bairro} {item.estado} {item.cidade}</h3>
                                
                                <h3 className='infosende'>{item.cep} </h3>
                                                                                             
                                <h3 className='infosende'>{item.referencia}</h3>
                                                               
                                <h3 className='infosende'>{item.complemento}:</h3>
                            </div>
                           
                            )}
                       
                    </div> 

                </div>
            </section>
        </main>
       
    )
}