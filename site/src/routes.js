import { BrowserRouter, Routes, Route } from 'react-router-dom'

import Home from './pages/home'
import Login from './admin/login';
import Cadastrar from './admin/cadastrar';
import PerfilADMIN from './admin/perfil';
import Endereco  from './pages/cadastrarEndereco';
import CadastarUsuario from './pages/cadastrarUsuario';



export default function Rotas(){
    return(
        <BrowserRouter>
            <Routes>
                <Route path='/' element={<Home/>} />
                <Route path='/login' element={<Login/>} />
                <Route path='/cadastrar' element={<Cadastrar />} />
                <Route path='/perfilADMIN' element={<PerfilADMIN/>} />
                <Route path='/endereco' element={<Endereco/>} />
                <Route path='/cadastrarUsuario' element={<CadastarUsuario/>} />
            </Routes>
        </BrowserRouter>
    )
}
