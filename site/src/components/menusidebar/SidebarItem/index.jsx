import React from 'react'
import { Container } from './styles'

const SidebarItem = ({ Icon, Text }) => {
  function navegacaoHome(){
    navigate('/');
  }

  return (
    <Container>
      <Icon />
      {Text}
    </Container>
  )
}

export default SidebarItem