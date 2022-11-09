import { BrowserRouter, Routes, Route } from 'react-router-dom'


import Login from './admin/login';
import Cadastrar from './admin/cadastrar';
import PerfilADMIN from './admin/perfil';
import Entrega from './pages/entrega';
import Endereco  from './pages/cadastrarEndereco';
import CadastarUsuario from './pages/cadastrarUsuario';
import LoginUsuarios from './pages/login';
import Produtrox from './pages/podutroX';
import Estoque from './pages/estoque';
import Produtoy from './pages/produtoy';
import MeusPedidos from './pages/meusPedidos';
import DetalhesPedido from './pages/detalhesPedido';
import PedidoClientes from './admin/pedidoClientes';
import Carrinho from './pages/carrinho';
import Ender from './pages/endereco2';
import Pagamento from './pages/pagamento';
import PagamentoCartao from './pages/pagamentoCartao';
import PerfilUsuario from './pages/perfilUsuario';
import CadastrarCupom from './admin/cupom';
import App from './pages/home2';
import Sidebarusuario from './components/menusidebar/header';
export default function Rotas(){
    return(
        <BrowserRouter>
            <Routes>
                
                <Route path='/' element={<App/>} />
                
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
                <Route path='/sidebarusuario' element={<Sidebarusuario/>}/>
                <Route path='/admin/cadastrarCupom' element={<CadastrarCupom />} />
                
            </Routes>
        </BrowserRouter>
    )
}
