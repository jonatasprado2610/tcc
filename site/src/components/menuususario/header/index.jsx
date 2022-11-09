import React, { useState } from 'react'
import { Container } from './styles'
import Sidebar from '../Sidebar'
import { FaBars } from 'react-icons/fa'

const  Header = () => {
  const [sidebar, setSidebar] = useState(false)

  const showSiderbar = () => setSidebar(!sidebar)

  return (
    <Container>
      <FaBars onClick={showSiderbar}/>
      {sidebar && <Sidebar active={setSidebar} />}
    </Container>
  )
}

export default Header