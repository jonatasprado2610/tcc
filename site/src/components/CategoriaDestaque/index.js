import './index.scss';

        export default function CategoriaDestaque(props){
            return(
    
                <section className='Card'>
                    <div className='direcao'>
                        <p> {props.nome} </p>
                        <img src={props.imagem} />
                    </div>
                </section>
            )
            }
    