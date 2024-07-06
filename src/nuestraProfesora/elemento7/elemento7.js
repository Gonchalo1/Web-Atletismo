import React, { useEffect, useRef } from "react";
import { Link } from "react-router-dom";
import '../../App.css';
import Imagen from '../../imagenes/nuestraProfesora/elemento7.png'; // Reemplaza con la imagen que desees usar

function Elemento7() {
  const overlayRef = useRef(null);

  useEffect(() => {
    const handleScroll = () => {
      if (overlayRef.current) {
        const element = overlayRef.current;
        const rect = element.getBoundingClientRect();
        const windowHeight = window.innerHeight;

        if (rect.top <= windowHeight && rect.bottom >= 0) {
          const visibleArea = Math.min(rect.bottom, windowHeight) - Math.max(rect.top, 0);
          const offset = -rect.top * 0.3; // Ajustar 0.1 para velocidad del parallax

          // Aplicar el efecto de parallax a la imagen
          element.querySelector('.imagen7').style.transform = `translateY(${offset}px)`;
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <div className="section-elemento7">
      <div className="image-container-elemento7">
        <div ref={overlayRef} className="image-overlay-elemento7">
            <img src={Imagen} alt='Imagen 7' className="imagen7" />
        </div>
      </div>
    </div>
  );
}

export default Elemento7;
