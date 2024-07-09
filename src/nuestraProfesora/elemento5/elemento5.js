import React from "react";
import '../../App.css';
import Thumbnail1 from '../../imagenes/nuestraProfesora/elemento4.jpg';
import Thumbnail2 from '../../imagenes/nuestraProfesora/carousel3.jpg';
import Thumbnail3 from '../../imagenes/nuestraProfesora/pameHome1.jpg';

const images = [
  {
    thumbnail: Thumbnail1,
    description: "Nacional de mayores Mar Del Plata",
  },
  {
    thumbnail: Thumbnail2,
    description: "Media Maratón de Buenos Aires 21k",
  },
  {
    thumbnail: Thumbnail3,
    description: "Fiestas Mayas",
  },
];

function Elemento5() {
  return (
    <div>
      <div className="section-elemento5">
        <div className="titulo-elemento-5">
          <h2>Competencias Pasadas</h2>
        </div>
        <div className="imagenes-elemento-5">
          {images.map((image, index) => (
            <div key={index} className="imagen-contenedor">
              <img
                src={image.thumbnail}
                alt={`Imagen ${index + 1}`}
              />
              <span>{image.description}</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Elemento5;
