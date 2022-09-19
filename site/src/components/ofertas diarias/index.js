
import './index.scss'
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';




export default function OfertasDiarias() {


    const responsive = {
        desktop: {
          breakpoint: { max: 3000, min: 1024 },
          items: 4,
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
        
   
    return (
        <section className='page-oferta'>

            <Carousel
                infinite={true}
                responsive={responsive}
                autoPlay={true}
                autoPlaySpeed={2000}
            
            >
              
                 
                     <div className='card'>
                        <div><img src="./assets/images/image 1038 (1).png" alt="" /></div>    
                        <p  className='c1'>Tênis adidas Lite Race 3.0 - Masculino</p>
                    
                        <p className='c2'>R$ 199,99 ou 4x de 55,99</p>
                        
                </div>
                
                <div className='card'>
                        <div><img src="./assets/images/image 1038 (1).png" alt="" /></div>    
                        <p  className='c1'>Tênis adidas Lite Race 3.0 - Masculino</p>
                    
                        <p className='c2'>R$ 199,99 ou 4x de 55,99</p>
                        
                </div>
                
                <div className='card'>
                        <div><img src="./assets/images/image 1038 (1).png" alt="" /></div>    
                        <p  className='c1'>Tênis adidas Lite Race 3.0 - Masculino</p>
                    
                        <p className='c2'>R$ 199,99 ou 4x de 55,99</p>
                        
                </div>
                
                <div className='card'>
                        <div><img src="./assets/images/image 1038 (1).png" alt="" /></div>    
                        <p  className='c1'>Tênis adidas Lite Race 3.0 - Masculino</p>
                    
                        <p className='c2'>R$ 199,99 ou 4x de 55,99</p>
                        
                </div>
                
                <div className='card'>
                        <div><img src="./assets/images/image 1038 (1).png" alt="" /></div>    
                        <p  className='c1'>Tênis adidas Lite Race 3.0 - Masculino</p>
                    
                        <p className='c2'>R$ 199,99 ou 4x de 55,99</p>
                        
                </div>

                <div className='card'>
                        <div><img src="./assets/images/image 1038 (1).png" alt="" /></div>    
                        <p  className='c1'>Tênis adidas Lite Race 3.0 - Masculino</p>
                    
                        <p className='c2'>R$ 199,99 ou 4x de 55,99</p>
                        
                </div>
                
                <div className='card'>
                        <div><img src="./assets/images/image 1038 (1).png" alt="" /></div>    
                        <p  className='c1'>Tênis adidas Lite Race 3.0 - Masculino</p>
                    
                        <p className='c2'>R$ 199,99 ou 4x de 55,99</p>
                        
                </div>
                
                <div className='card'>
                        <div><img src="./assets/images/image 1038 (1).png" alt="" /></div>    
                        <p  className='c1'>Tênis adidas Lite Race 3.0 - Masculino</p>
                    
                        <p className='c2'>R$ 199,99 ou 4x de 55,99</p>
                        
                </div>
                
                <div className='card'>
                        <div><img src="./assets/images/image 1038 (1).png" alt="" /></div>    
                        <p  className='c1'>Tênis adidas Lite Race 3.0 - Masculino</p>
                    
                        <p className='c2'>R$ 199,99 ou 4x de 55,99</p>
                        
                    </div>
 
            </Carousel>
            
          </section>
      )

       

    }
