
import './index.scss'
import { API_URL } from '../../api/config';
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
import { useNavigate } from 'react-router-dom';


export default function OfertasDiarias(props) {

    const responsive = {
        desktop: {
          breakpoint: { max: 3000, min: 1024 },
          items: 3,
          slidesToSlide: 3 // optional, default to 1.
        },
        tablet: {
          breakpoint: { max: 1024, min: 464 },
          items: 2,
          slidesToSlide: 2 // optional, default to 1.
        },
        mobile: {
          breakpoint: { max: 464, min: 0 },
          items: 1,
          slidesToSlide: 1 // optional, default to 1.
        }
      };
 
      const navigate = useNavigate();

    function exibir(imagem) {
        if (!imagem)
            return `https://cdn-icons-png.flaticon.com/512/74/74375.png`;
        else
            return `${API_URL}/${imagem}`
    }

      function formatarPreco(preco){
         return preco.toFixed(2)
      }
      function formatarPreco2(precopar){
        return precopar.toFixed(2)
     }
      function abrir(id){
        navigate('/produto/'+ id +'/produtoIndividual')
      }


    return (
        <section className='page-oferta'>
          <div className='card' onClick={()=>abrir(props.item.id)} >
                <div>

                    <img src={exibir(props.item.imagem)} />

                </div>

                <p className='c1'> {props.item.nome}  </p>
                <p className='c2'> R${formatarPreco(props.item.preco)} ou 4x de R$ { formatarPreco2(props.item.precopar)} </p>
            </div>
         





        </section>
    )



}
