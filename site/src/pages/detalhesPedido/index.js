import './index.scss';

import { Listar} from '../../api/cadastrarEndereco';
import { useEffect, useState } from 'react';


export default function MeusPedidos() {
    const [enderecos, setEnderecos] = useState([]);


    async function carregarEnderecos() {
        const r = await Listar(1);
        setEnderecos(r);
    }

    useEffect(() => {
            carregarEnderecos();
    }, [])




    return(
        <main className='cont-detalhes'>
            <section className='section'>
                <div>
                    <h1>Detalhes do pedidos Pedidos</h1>
                </div>
                <div className='div-numPedido'> 
                    Número do pedido: 123456

                    <hr></hr>
                    <p>Kdkf</p>
                </div>

                <div className='infosProd'>
                    <img src='https://static.allianzparqueshop.com.br/produtos/tenis-adidas-breaknet-feminino/28/NQQ-4379-028/NQQ-4379-028_zoom1.jpg?ts=1661862763&ims=544x' alt='' />
                    <div >
                        <h3>Tenis Tesla - Masculino </h3>
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
                    <div className='cards'>
                        <h3>Pagamento</h3>
                        <div>
                            <p>Boleto bancário   R$</p>
                        </div>
                    </div>
                    
                    <div className='cards'>
                        <h3>Entrega</h3>
                        <div>
                            <p>Entrega normal</p>
                        </div>

                        {enderecos.map(item =>
                           
                             <div>
                                <div>
                                    <p>Rua</p>
                                    <p>CEP 5727539867</p>
                                </div>
                                <div>
                                    <p>Jardim bairro bairro</p>
                                    <p>São Paulo - SP</p>
                                </div>
                                <div>
                                    <p>thtfddh</p>
                                </div>
                            </div>
                            )}
                           
                        
                    </div> 

                </div>
            </section>
        </main>
       
    )
}