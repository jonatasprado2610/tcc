import React from 'react';
import ReactDOM from 'react-dom/client';
import Rotas from './routes';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { Routes } from 'react-router-dom';
import Pagamento from './pages/pagamento';
import PagamentoCartao from './pages/pagamentoCartao';
import PagamentoPix from './pages/pagamentoPix';
import PagametoBoleto from './pages/pagametoBoleto';
import CompraFinalizada from './pages/compr';
import Home from './pages/home';
import Produtrox from './pages/podutroX';
import Carrinho from './pages/carrinho';
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <ToastContainer/>
    { /* Proibido alterar o "Rotas" para outro nome de pagina !!!*/ }
        <Rotas/>
  </React.StrictMode>
);

