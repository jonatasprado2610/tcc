import './index.scss'
import EstoqueProduto from '../../components/produtoEstoque';


export default function Estoque(){

    return(
        <main>
            <div className='container1'>
                <div> ESTOQUE</div>
               

            
                <input className='busca' type="text" placeholder='Buscar produtos'>
                
                </input>

                <EstoqueProduto/>
                <EstoqueProduto/>
                <EstoqueProduto/>
                <EstoqueProduto/>
                <EstoqueProduto/>
                <EstoqueProduto/>
                <EstoqueProduto/>
                <EstoqueProduto/>
                <EstoqueProduto/>
                <EstoqueProduto/>
            </div>
        </main>
    );
}