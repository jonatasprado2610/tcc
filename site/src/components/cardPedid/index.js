import { useState } from 'react';
import './index.scss';
import {Listar} from '../../api/'



export default function CardPedid() {
    const [img, setImg] = useState('');
    const [numerop, setNumerop] = useState('');
    const [descricao, setDescricao] = useState('');
    const [itens, setItens] = useState();
    const [valor, setValor] = useState();
    const [datapedido, setDatapedido] = useState();
    const [ dataentrega, setDataentrega] = useState();



    async function CarregarPedido () {
        

   }

    return(
        <div className='divPraApagar'>
        <section className='cont-cardPedido'>
            <div className='div-prim'>
                <div className='div-infos'>
                    <div>
                        <img  className='imgProduto' src='./assets/images/campusAdidas.jpg' />imagem
                    </div> 

                    <div>
                        <h3>Pedido número: 0123456</h3>
                        <ul>
                            <li>Camiseta Nike Academy 21 Top - Masculina;</li>
                            <li>Bola de Futebol de Campo Puma Big Cat 4;</li>
                            <li>Luva de Goleiro adidas Predator Treino - Infantil Bunita ; </li>
                        </ul>
                    </div>
                </div>

                <div className='div-valor'>
                    <h3>Quantidade de itens: "3 itens"</h3>
                    Linha_______________________________________________________________
                    <div className='valor'>
                        <p>Valor total:</p> <p>R$ 229,99</p>
                    </div>
                </div>
            </div>

            <div className='div-entrega'>
                <p>Realizado em "data do pedido e hora"</p>
                <p>Chegará em 1 a 2 dias</p>
                <button className='botao'>Ver detalhes do produto</button>
                <button className='botao-cancel'>Cancelar pedido</button>
            </div>
        </section>
        </div>
        
    )
}