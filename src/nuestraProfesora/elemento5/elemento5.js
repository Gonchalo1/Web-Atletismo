import React from "react";
import '../../App.css';
import Thumbnail1 from '../../imagenes/11.jpeg';
import Thumbnail2 from '../../imagenes/pame.jpeg';
import Thumbnail3 from '../../imagenes/1.jpeg';

const images = [
  {
    thumbnail: Thumbnail1,
    description: "1mera competencia",
  },
  {
    thumbnail: Thumbnail2,
    description: "2da competencia",
  },
  {
    thumbnail: Thumbnail3,
    description: "3cera competencia",
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
