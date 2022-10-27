import Navegacaoadm from "../../components/navegacaoadm";
import { useEffect, useState } from 'react';
import { removerProdutos } from '../../api/admin/produto';
import { toast } from 'react-toastify';
import { useNavigate } from 'react-router-dom';
import { listarProdutosCadastrados } from "../../api/produtoApi";


export default function PerfilADMIN() {
    const [produto, setProduto] = useState([]);
    const navigate  = useNavigate();
    async function carregarProdutos(){
        const r = await listarProdutosCadastrados();
        setProduto(r);
        }
        
        async function deletarProduto(id) {
            try {
    
                await removerProdutos(id)
                await carregarProdutos();
    
                toast.dark('produto removido com sucesso');
            } catch (err) {
                toast.error(err.response.data.erro)
                }
        }
        function editar(id) {
            navigate( `/cadastrar/${id}` )
    }
    
        useEffect(() => {
            carregarProdutos();
        }, [])
        

    return (
        <section>
            <Navegacaoadm />
            
            {produto.map(item =>
                <tr>
                        <td>{item.imagem}</td>
                        <td>{item.id}</td>
                        <td>{item.nome}</td>
                        <td>{item.precopar}</td>
                        <td>{item.qtd}</td>
                        <td>{item.marca}</td>
                        <span onClick={() => editar(item.id)}>  <img  className='imagens' src='/assets/images/alterarEstoque.png'/> </span> 
                        <span onClick={() => deletarProduto(item.id)}>  <img className='imagens' src='/assets/images/apagarEstoque.png'/> </span>
                        </tr>

            )}    
            
        </section>
    );
 }