import { useRef, useState } from 'react';
import './styles.css';

export default function MenuADM(){

    const dropDownRef = useRef(null);
    const [isActive, setIsActive] = useState(false )
    const onClick = () => setIsActive(!isActive)


    return(

        <div className="container">
            
            <div className="menu-container">
                  <span>Menu</span>
                  <button onClick={onClick} className="menu-button">
                   <img
                    width= "50px"
                    height="50px"
                       src="./assets/images/image 1067.png"
                       alt="menu"/>
                    
                </button>

                <nav
                ref={dropDownRef}
                className={`menu ${isActive ? "active" : "inactive"} `}
                >
                    <ul>
                        <li>
                            <a href='./'>Home</a>
                        </li>

                        <li>
                            <a href='#'>Produtos</a>
                        </li>

                        <li>
                            <a href='#'>Categorias</a>
                        </li>

                        <li>
                            <a href='#'>Estregas</a>
                        </li>
                        
                        <li>
                            <a href='#'>Pedidos</a>
                        </li>

                        <li>
                            <a href='/estoque'>Estoque</a>
                        </li>

                        <li>
                            <a href='#'>Cupons</a>
                        </li>

                        <li>
                            <a href='#'>Gráficos</a>
                        </li>

                        <li>
                            <a href='#'>Avaliação dos Clientes</a>
                        </li>

                        <li>
                            <a href='/loginadm'>Sair</a>
                        </li>
                    </ul>
                </nav>
               
            </div>

        </div>

    );    }