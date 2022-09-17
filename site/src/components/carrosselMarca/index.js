import './index.scss'
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';

export default function CarrosselMarca(){

    const responsive = {
        desktop: {
          breakpoint: { max: 3000, min: 1024 },
          items: 6,
          slidesToSlide: 1// optional, default to 1.
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
        <section className='pgae-marc'>

<Carousel
        swipeable={false}
        draggable={false}
        infinite={true}
         responsive={responsive}
         autoPlay={true}
         autoPlaySpeed={2000}
        >

            
          
             <div><img src='./assets/images/1cc7b1f2051a027a6ad6a00b623a960a_Como-surgiu-as-tres-istras-da-Adidas 1.png' alt='' /></div>
             <div><img src='./assets/images/image 22.png' alt=''/> </div>
             <div><img src='./assets/images/image 23.png' alt=''/> </div>
             <div><img src='./assets/images/image 24.png' alt=''/> </div>
             <div><img src='./assets/images/image 26.png' alt=''/> </div>
             <div><img src='./assets/images/image 29.png' alt=''/> </div>
             <div><img src='./assets/images/image 30.png' alt=''/> </div>
             <div><img src='./assets/images/image 31.png' alt=''/> </div>
             <div><img src='./assets/images/image 32.png' alt=''/> </div>
             <div><img src='./assets/images/image 43 (1).png' alt=''/> </div>  
        </Carousel>


             

        </section>
    )

}