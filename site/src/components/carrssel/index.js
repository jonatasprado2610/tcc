import './index.scss';
import Cabecario from '../cabeçario';
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';





export default function Carrossel(){
    const responsive = {
        desktop: {
          breakpoint: { max: 3000, min: 1024 },
          items: 1,
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


    return(
        <section className='page-c1'>
            
        
        <Carousel
        swipeable={false}
        draggable={false}
        infinite={true}
         responsive={responsive}
         autoPlay={true}
         autoPlaySpeed={4000}
        >
        <div><img src="./assets/images/image 46.png" alt=''/></div>
       
        <div><img src="./assets/images/image 46.png" alt=''/></div>
        <div><img src="./assets/images/image 46.png" alt=''/></div>
        <div><img src="./assets/images/image 46.png" alt=''/></div>

        </Carousel>
  

        </section>
    )
}