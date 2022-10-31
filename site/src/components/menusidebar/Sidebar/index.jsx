import React from 'react'
import { Container, Content } from './styles'
import { useNavigate } from 'react-router-dom'
import storage from 'local-storage'
import './index.scss'
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
        <Link to="/perfiladmin/:id">  <SidebarItem Icon={FaUserAlt} Text="Perfil"  /> </Link>
        <Link to="/perfiladmin">  <SidebarItem Icon={FaTruck} Text="Entregas" /> </Link>
        <Link to="/Cadastrar"> <SidebarItem Icon={BsBagFill} Text="Cadastrar Produtos" /> </Link>
        <Link to="/admin/cadastrarCupom">  <SidebarItem Icon={BsFillBookmarkFill} Text="Cupons" /> </Link>
        <Link to="/estoque">  <SidebarItem Icon={FaBox} Text="Estoque" /> </Link>
        <Link to="/perfiladmin">  <SidebarItem Icon={FaChartBar} Text="Gráficos" /> </Link>
        <Link to="/perfiladmin">  <SidebarItem Icon={MdFeedback} Text="Avaliações" /> </Link>  
        </div>
       <div className='' onClick={sairClick} > <SidebarItem Icon={ImExit} Text="Sair" /> </div> 
      </Content>
    </Container>
  )
}

export default Sidebar

/*<Route path='/' element={<Home/>} />
<Route path='/loginadm' element={<Login/>} />
<Route path='/loginusu' element={<LoginUsuarios/>} />
<Route path='/cadastrar' element={<Cadastrar />} />
<Route path='/cadastrar/:id' element={<Cadastrar />} />
<Route path='/perfiladmin' element={<PerfilADMIN/>} />
<Route path='/endereco' element={<Endereco/>} />
<Route path='/cadastrarUsuario' element={<CadastarUsuario/>} />
<Route path='/produtoIndividual' element={<Produtrox/>}/>
<Route path='/produto/:id/produtoIndividual' element={<Produtrox/>}/>
<Route path='/carrinho' element={<Carrinho/>}/>
<Route path='/estoque' element={<Estoque/>}/>
<Route path='/produtoy' element={<Produtoy/>}/>
<Route path='/entrega' element={<Entrega/>}/>
<Route path='/meusPedidos' element={<MeusPedidos/>}/>
<Route path='/detalhesPedido' element={<DetalhesPedido/>}/>
<Route path='/pedidoClientes' element={<PedidoClientes/>}/>
<Route path='/ende' element={<Ender/>}/>
<Route path='/pagamento' element={<Pagamento/>}/>
<Route path='/pagamento/cartao' element={<PagamentoCartao/>}/>
<Route path='/perfil/usuario' element={<PerfilUsuario />} />
<Route path='/menusidebar' element={<Menusidebar />} /> */