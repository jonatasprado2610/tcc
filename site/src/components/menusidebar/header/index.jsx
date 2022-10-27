import React, { useState } from 'react'
import { Container } from './styles'
import Sidebar from '../Sidebar'

const  Header = () => {
  const [sidebar, setSidebar] = useState(false)

  const showSiderbar = () => setSidebar(!sidebar)

  return (
    <Container>
      <img className='icon' src="/assets/images/image 1067.png" onClick={showSiderbar}/>
      {sidebar && <Sidebar active={setSidebar} />}
    </Container>
  )
}

export default Header