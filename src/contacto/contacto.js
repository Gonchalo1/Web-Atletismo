import React, { useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import '../App.css';
import Footer from '../footer/footer';
import Portada from '../imagenes/contactoImagenes/portadaContacto.png';
import Imagen1 from '../imagenes/contactoImagenes/imagenContacto.png';
import Imagen2 from '../imagenes/contactoImagenes/imagenContacto2.png';
import Imagen3 from '../imagenes/contactoImagenes/imagenContacto3.png';
import Imagen4 from '../imagenes/contactoImagenes/imagenContacto4.png';
import Imagen5 from '../imagenes/nuestraProfesora/pameHome3.webp';
import Mapa from './mapa';

function Contacto() {
  const overlayRef = useRef(null);

  useEffect(() => {
    const handleScroll = () => {
      if (overlayRef.current) {
        const element = overlayRef.current;
        const rect = element.getBoundingClientRect();
        const windowHeight = window.innerHeight;

        if (rect.top <= windowHeight && rect.bottom >= 0) {
          const visibleArea = Math.min(rect.bottom, windowHeight) - Math.max(rect.top, 0);
          const offset = -rect.top * 0.1; // Ajustar 0.1 para velocidad del parallax

          // Aplicar el efecto de parallax a la imagen
          element.querySelector('.imagen4').style.transform = `translateY(${offset}px)`;
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <div className="contacto-container">
      <img src={Portada} alt='Portada' className="portada" />

      {/* Primer Contenedor */}
      <div className="section">
        <div className="image-container">
          <img src={Imagen1} alt='Imagen 1' className="imagen1" />
        </div>
        <div className="text-container">
          <img src={Imagen2} alt='Imagen 2' className="imagen2" />
          <div className="text-content">
            <h5>¡Bienvenido a RP!</h5>
            <h1>RP La mejor comunidad de running</h1>
            <p>
              En nuestro grupo organizamos entrenamientos de alta calidad, proveemos todo tipo
              de ayuda, y te mantenemos al tanto de los últimos eventos de running.
            </p>
          </div>
        </div>
      </div>

      {/* Segundo Contenedor */}
      <div className="section-3">
        <div className="image-container-3">
          <img src={Imagen3} alt='Imagen 3' className="imagen3" />
        </div>
        <div className="text-container-3">
          <div className="text-content-3">
            <h3>Nuestra misión</h3>
            <p>
              Nuestra misión en RP es desarrollar un nuevo estilo de vida a través del running, forjando 
              disciplina deportiva y mejorando la salud de nuestros miembros. Nos comprometemos a proporcionar 
              entrenamientos de alta calidad y mantenernos al tanto de los últimos eventos deportivos.
            </p>
            <ul className="mission-list">
              <li className="mission-item"><i className="bi bi-check-circle-fill"></i><strong> Desarrollar un nuevo estilo de vida</strong></li>
              <li className="mission-item"><i className="bi bi-check-circle-fill"></i><strong> Forjarles disciplina deportiva para vivir la vida de otra manera</strong></li>
              <li className="mission-item"><i className="bi bi-check-circle-fill"></i><strong> Mejorar la salud</strong></li>
            </ul>
          </div>
        </div>
      </div>

      {/* Tercer Contenedor */}
      <div className="section-4">
        <div className="image-container-4">
          <div ref={overlayRef} className="image-overlay">
            <Link to="/precio">
              <img src={Imagen4} alt='Imagen 4' className="imagen4" />
            </Link>
          </div>
        </div>
      </div>

      {/* Cuarto Contenedor */}
      <div className="text-container-5">
        <h1>Nuestra coach</h1>
        <div className="imagen-coach-wrapper">
          <img src={Imagen5} alt='Pame' className="imagen-coach" />
          <div className="overlay">
            <i className="bi bi-instagram icono-instagram">
            <a href="https://www.instagram.com/pamela.maidana.90/#" className="instagram-link-elemento4"></a>
            </i>
          </div>
        </div>
        <div className="texto">
          <h3>Pame</h3>
          <p><strong>Entrenadora de atletísmo</strong></p>
        </div>
      </div>

      {/* Quinto Contenedor */}
      <div className="contenedor-mapa">
        <div className='div-mapa'>
          <Mapa />
        </div>
        <div className='text-container-6'>
          <h1>Contactanos</h1>
          <div className='phone-container-6'>
            <div>
              <p>Teléfono</p>
              <p>+54 9 11 2278-0920</p>
            </div>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
}

export default Contacto;
