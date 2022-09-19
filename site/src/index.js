import React from 'react';
import ReactDOM from 'react-dom/client';
import Rotas from './routes';
import CadastarUsuario from './pages/cadastrarUsuario';


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
        <CadastarUsuario />
  </React.StrictMode>
);

