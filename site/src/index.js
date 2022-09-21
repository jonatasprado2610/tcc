import React from 'react';
import ReactDOM from 'react-dom/client';
import Rotas from './routes';
import Filtros from './components/filtros';
import loginUsuario from './pages/login';


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
        <Rotas />
  </React.StrictMode>
);

