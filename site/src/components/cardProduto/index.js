



import './index.scss'
import { API_URL } from '../../api/config';
import { useNavigate } from 'react-router-dom';
import Storage from 'local-storage'
import { useParams } from 'react-router-dom';
import { toast } from 'react-toastify';

export default function CardP(props) {
    const {id }= useParams();
    function adicionarAoCarrinho(){

        let carrinho= []
        if  (Storage('carrinho')){
            carrinho= Storage('carrinho')
        }
        if(!carrinho.find(item => item.id === id)){
             carrinho.push({
                 id: id,
                 qtd: 1 ,
             })
             Storage('carrinho', carrinho);
            
        }
        toast.dark('Produto adicionado ao carrinho')
        
       }


    const navigate = useNavigate();

    function abrir(id){
        navigate('/produto/'+ id +'/produtoIndividual')
      }
    function exibir(imagem) {
        if (!imagem)
            return `https://cdn-icons-png.flaticon.com/512/74/74375.png`;
        else
            return `${API_URL}/${imagem}`
    }

    return (
        <main className="page-p">

            <div  className='card'>
                <div className='sx3'>
                    <img className='sximg' src='./assets/images/Star 14.png' alt='' />
                    <img className='sximg' onClick={adicionarAoCarrinho} src='./assets/images/carinho.png' alt='' />
                </div>
                <div  onClick={()=>abrir(props.item.id)}>
                    <img className='imgx' src={exibir(props.item.imagem)}  />
                    <p className='sxp'>{props.item.nome} </p>
                    <div>
                        <img src='./assets/images/star1.png' alt='' />
                        <img src='./assets/images/star1.png' alt='' />
                        <img src='./assets/images/star1.png' alt='' />
                        <img src='./assets/images/star1.png' alt='' />
                        <img src='./assets/images/star1.png' alt='' />
                    </div>
                    <p>R${props.item.preco}</p>
                    <p>ou 4x de R${props.item.precopar}</p>
                </  div>



            </div>
        </main>
    )
}

