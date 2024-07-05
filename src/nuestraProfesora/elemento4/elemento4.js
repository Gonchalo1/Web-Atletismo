import React from "react";
import '../../App.css';
import Fondo from '../../imagenes/nuestraProfesora/fondoPame3.png';

function Elemento4() {
  return (
    <div>
      <div className="section-elemento4">
        <div className="image-container-elemento4">
          <div className="image-overlay-elemento4">
            <img src={Fondo} alt='Imagen 4' className="imagen4"/>
            <a href="https://www.instagram.com/tu_cuenta_de_instagram" className="instagram-link-elemento4">
              Instagram
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Elemento4;
