import React from "react";
import '../../App.css';
import Imagen1 from '../../imagenes/nuestraProfesora/fondo2Pame.png';

function Elemento3() {
  return (
    <div>
      <div className="section-elemento3">
        <div className="image-container-elemento3">
          <img src={Imagen1} alt='Imagen 1' className="imagen1-elemento3"/>
        </div>
        <div className="text-container-elemento3">
          <div className="text-content-elemento3">
            <h5>Pamela Maidana</h5>
            <h1>Reconocida por su destacada trayectoria como atleta en el campo del atletismo y por su habilidad como entrenadora. </h1>
            <p>
            Es la lider del grupo de atletísmo RP RUNNING TEAM de la municipalidad de Malvinas Argentinas, siempre con una sonrisa
            da clases a la tarde y a la tarde-noche.
            Tiene un hermoso grupo construido con mucho esfuerzo y dedicación desde hace años ya y con buenos atletas de alto nivel,
            junto con una hospitalidad para cualquier nesecidad de algún miembro que lo nesecite.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Elemento3;
