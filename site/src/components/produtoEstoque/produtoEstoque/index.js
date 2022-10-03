import './index.scss'


export default function EstoqueProduto(){


    return(
    <div className='containerEstoque'>
        <img src='./assets/images/image produtoEstoqueTESTE.png'/>
            
            <div className='textoProduto'>
                <div>Tênis Esportivo On Shoes Masculino/feminino</div>
                <div className='informacoesEstoque'>
                    <div>ID: ?</div>
                    <div>R$ ?</div>
                    <div>CATEGORIA: ?</div>
                </div>
            </div>
        <hr/>

        <div className='Estoque'>
            <div>Em Estoque:</div>

            <div className='containerEstoque'> ? </div>
        </div>

        <div className='imagensEstoque'>
            <img src='./assets/images/alterarEstoque.png'/>
            <img src='./assets/images/apagarEstoque.png'/>
        </div>
    </div>
        
        
    )
} 