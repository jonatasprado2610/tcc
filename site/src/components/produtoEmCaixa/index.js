import './index.scss'
import { buscarProdutos } from '../../api/admin/produto';
import { useState, useEffect } from 'react';

export default function ProdutoEmCaixa(props) {
    const [produtos, setProdutos] = useState([]);

    async function carregarProdutos() {
        const r = await buscarProdutos();
        setProdutos(r);
    }

    useEffect(() => {
        carregarProdutos();
    }, [])
    return (
        <main className="caixa">
            {produtos.map(item =>
                <div className='ladinho'>
                    <div className='info'>{item.imagem} imagem</div>
                    <div>
                        <div className='info'>{item.nome}</div>
                        <div className='info'>{item.precopar}</div>
                    </div>
                    <hr className='barra' />
                    <div className='info'>{item.tamanho} tamanho</div>
                </div>
            )}
        </main>
    )
}