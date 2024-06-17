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
import NoticiaEnSi1 from './noticias/noticiaEnSi/noticiaEnSi1';
import NoticiaEnSi2 from './noticias/noticiaEnSi/noticiaEnSi2';
import NoticiaEnSi3 from './noticias/noticiaEnSi/noticiaEnSi3';
import NoticiaEnSi4 from './noticias/noticiaEnSi/noticiaEnSi4';
import NoticiaEnSi5 from './noticias/noticiaEnSi/noticiaEnSi5';
import NoticiaEnSi6 from './noticias/noticiaEnSi/noticiaEnSi6';

function App() {
  return (
    <Router>
      <div className="App">
        <Nav /> {/* Esto hará que el nav se renderice en todas las páginas */}
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/precio" element={<Precio />} />
          <Route path="/redes" element={<Redes />} />
          <Route path="/ubicacion" element={<Ubicacion />} />
          <Route path="/contacto" element={<Contacto />} />
          <Route path="/noticias" element={<Noticias />} />
          <Route path="/noticia/1" element={<NoticiaEnSi1 />} />
          <Route path="/noticia/2" element={<NoticiaEnSi2 />} />
          <Route path="/noticia/3" element={<NoticiaEnSi3 />} />
          <Route path="/noticia/4" element={<NoticiaEnSi4 />} />
          <Route path="/noticia/5" element={<NoticiaEnSi5 />} />
          <Route path="/noticia/6" element={<NoticiaEnSi6 />} />
        </Routes>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
