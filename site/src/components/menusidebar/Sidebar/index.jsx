import React from 'react'
import { Container, Content } from './styles'
import { Navigate, useNavigate } from 'react-router-dom'

import { 
  FaTimes, FaHistory, FaUserAlt, FaChartBar, FaTruck, FaBox
} from 'react-icons/fa'

import {
  BsBagFill, BsFillBookmarkFill
} from 'react-icons/bs'

import {
  MdFeedback
} from 'react-icons/md'

import{
  ImExit
} from 'react-icons/im'

import SidebarItem from '../SidebarItem'

const Sidebar = ({ active }) => {

const closeSidebar = () => {
  active(false)
}

    
function Navegar(){
   Navigate('/perfilADMIN')};


  return (
    <Container sidebar={active}>
      <FaTimes onClick={closeSidebar} />  
      <Content>
        <SidebarItem Icon={FaUserAlt} onClick={Navegar} Text="Perfil"  />
        <SidebarItem Icon={FaTruck} Text="Entregas" />
        <SidebarItem Icon={BsBagFill} Text="Produtos" />
        <SidebarItem Icon={BsFillBookmarkFill} Text="Cupons" />
        <SidebarItem Icon={FaHistory} Text="Históricos" />
        <SidebarItem Icon={FaBox} Text="Estoque" />
        <SidebarItem Icon={FaChartBar} Text="Gráficos" />
        <SidebarItem Icon={MdFeedback} Text="Avaliações" />
        <SidebarItem Icon={ImExit} Text="Sair" />
      </Content>
    </Container>
  )
}

export default Sidebar