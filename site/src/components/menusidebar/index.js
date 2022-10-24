
 
import './index.scss'
import React, { useState } from 'react'
import { Cont } from './styles.js'
import { FaBars } from 'react-icons/fa'

    
 //Proibido alterar o "Rotas" para outro nome de pagina !!!
const Header = () => {
    const [sidebar, setSidebar] = useState(false)

    const showSidebar = () => setSidebar(!sidebar)

    return (
        <Cont>
            <FaBars onClick= {showSidebar}/>
            {sidebar && <p active={setSidebar} />}
        </Cont>
    )
 }  
export default Header;


