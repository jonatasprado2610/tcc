import React from 'react';
import ReactDOM from 'react-dom/client';
import Rotas from './routes';
import Filtros from './components/filtros';
import loginUsuario from './pages/login';
import Produtrox from './pages/podutroX';
import Cabecario from './components/cabeçario';
import Carrinho from './pages/carrinho';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Menu from './components/menu';


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <ToastContainer/>
        <Menu/>
  </React.StrictMode>
);

