
import Teste from "../../components/teste";
import OfertasDiarias from "../../components/ofertas diarias";
import CategoriaDestaque from '../../components/CategoriaDestaque';
import Rodape from "../../components/Rodape";
import Carrossel from '../../components/carrssel';
import Cabecario from "../../components/cabeçario";
import { useEffect, useState } from 'react';
import { listarProdutosIncioxx } from '../../api/produtoApi';
import Carousel from 'react-multi-carousel';
import CarrosselMarca from "../../components/carrosselMarca";
import 'react-multi-carousel/lib/styles.css';
import './index.scss'

function App( ) {

    const responsive = {
        desktop: {
            breakpoint: { max: 3000, min: 1024 },
            items: 3,
            slidesToSlide: 1 // optional, default to 1.
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

    const [produtos, setProdutos] = useState([]);

    async function listar() {

     

          const r = await listarProdutosIncioxx();
          setProdutos(r)
          console.log(r)
        
      
       
      
        
    }

    useEffect(() => {
        listar();
    }, [])





    return (
        <div className="page-home">

            <Cabecario />
            <Carrossel />

           <h1 className="hx">Produtos  em Destaque</h1>
            < div className="x1xc">
                <Carousel

                    infinite={true}
                    responsive={responsive}>

                    {produtos.map(item =>
                        <OfertasDiarias item={item} />
                    )}

                </Carousel>
            </div>

        <h1 className="hx">Categorias em Destaque</h1>
          
         <div className="cd">
         
            <div className="card">
                <div><img src="./assets/images/imagemrelogio.png"  alt=""/></div>
                <h2>Acessórios</h2>
            </div>

            <div className="card">
                <div><img src="./assets/images/image40.png"  alt=""/></div>
                <h2>Tênis</h2>
            </div>

            <div className="card">
                <div><img src="./assets/images/image 41.png"  alt=""/></div>
                <h2>Calças</h2>
            </div>

            <div className="card">
                <div><img src="./assets/images/image 1448.png"  alt=""/></div>
                <h2>Blusas</h2>
            </div>

            
         </div>

         <h1 className="hx">Produtos em Ofertas</h1>
            < div className="x1xc">
                <Carousel

                    infinite={true}
                    responsive={responsive}>

                    {produtos.map(item =>
                        <OfertasDiarias item={item} />
                    )}

                </Carousel>
            </div>


           

            <div className="x1c">
                <h1 className="c1x">Principais Marcas</h1>
                <CarrosselMarca />
            </div>

            <div className="x1x2">
                <Rodape />
            </div>

        </div>

    );
}

export default App;