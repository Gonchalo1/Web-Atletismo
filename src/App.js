import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css'; 
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
import 'bootstrap-icons/font/bootstrap-icons.css'; 

import './App.css';

import Nav from './nav/nav'; 
import Noticias from './noticias/noticias';
import Precio from './precio/precio';
import Redes from './redes/redes'; 
import Ubicacion from './ubicacion/ubicacion';
import Contacto from './contacto/contacto';
import Footer from './footer/footer';
import Home from './home/home'; 

function App() {
  return (
    <Router>
      <div className="App">
        <Nav /> {/* Esto hará que el nav se renderice en todas las páginas */}
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/noticias" element={<Noticias />} />
          <Route path="/precio" element={<Precio />} />
          <Route path="/redes" element={<Redes />} />
          <Route path="/ubicacion" element={<Ubicacion />} />
          <Route path="/contacto" element={<Contacto />} />
        </Routes>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
