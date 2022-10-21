import './index.scss'
import React, { useState } from 'react'
import { Cont } from './styles.js'
import { FaBars } from 'react-icons/fa'
import Sidebar from '../Sidebar'
    
const Header = () => {
    const [sidebar, setSidebar] = useState(false)

    const showSidebar = () => setSidebar(!sidebar)

    return (
        <Cont>
            <FaBars onClick= {showSidebar}/>
            {sidebar && <Sidebar active={setSidebar} />}
        </Cont>
    )
}

export default Header
