import React from 'react';
import { BrowserRouter as Router, Route, Link, Routes } from 'react-router-dom';
import { TemaProvider } from './context/TemaContext';
import { Provider } from 'react-redux';
import store from './redux/store';

import Inicio from './components/Inicio';
import Sobre from './components/Sobre';
import Contador from './components/Contador';
import Boton from './components/Boton';

function App() {
  return (
    <Provider store={store}>
      <TemaProvider>
        <Router>
          <nav>
            <Link to="/inicio">Inicio</Link>
            <Link to="/sobre">Sobre</Link>
            <Link to="/contador">Contador</Link>
            <Link to="/boton">Botón</Link>
          </nav>
          <Routes>
            <Route path="/inicio" element={<Inicio />} />
            <Route path="/sobre" element={<Sobre />} />
            <Route path="/contador" element={<Contador />} />
            <Route path="/boton" element={<Boton />} />
          </Routes>
        </Router>
      </TemaProvider>
    </Provider>
  );
}

export default App;
