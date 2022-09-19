import React from 'react';
import ReactDOM from 'react-dom/client';
import Rotas from './routes';
import OfertasDiarias from './components/ofertas diarias';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
        <Rotas/>
  </React.StrictMode>
);

