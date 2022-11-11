import React from 'react'
import { Container, Content } from './styles'
import { useNavigate } from 'react-router-dom'
import storage from 'local-storage'
import './index.scss'
import { 
  FaTimes, FaUserAlt, FaHistory
} from 'react-icons/fa'

import{
  AiOutlineShoppingCart
} from 'react-icons/ai'

import{
  ImExit
} from 'react-icons/im'

import SidebarItem from '../SidebarItem'
import { Link } from 'react-router-dom'

const Sidebar = ({ active }) => {
const navigate = useNavigate();
const closeSidebar = () => {
  active(false)
}


function sairClick(){
  storage.remove('usuario-logado');
  navigate('/loginadm');
}

  return (
    <Container sidebar={active}>
      <FaTimes onClick={closeSidebar} />  
      <Content className='vai'>
        <div >
        <Link to="/perfil/usuario">  <SidebarItem Icon={FaUserAlt} Text="Perfil"  /> </Link>
        <Link to="/meusPedidos"> <SidebarItem Icon={FaHistory} Text="Meus pedidos" /> </Link>
        <Link to="/carrinho">  <SidebarItem Icon={AiOutlineShoppingCart} Text="Carrinho" /> </Link>  
        </div>
       <div className='' onClick={sairClick} > <SidebarItem Icon={ImExit} Text="Sair" /> </div> 
      </Content>
    </Container>
  )
}

export default Sidebar
