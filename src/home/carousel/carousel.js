import React from 'react';
import Ocho from '../../imagenes/8.jpeg';
import Siete from '../../imagenes/7.jpeg';
import './carousel.css'; // Importa el archivo CSS donde definirás los estilos

function Carousel() {
  return (
    <div>
      <div id="carouselExampleDark" className="carousel slide" data-bs-ride="carousel">
        <div className="carousel-indicators">
          <button type="button" data-bs-target="#carouselExampleDark" data-bs-slide-to="0" className="active" aria-current="true" aria-label="Slide 1"></button>
          <button type="button" data-bs-target="#carouselExampleDark" data-bs-slide-to="1" aria-label="Slide 2"></button>
        </div>
        <div className="carousel-inner">
          <div className="carousel-item active">
            <img src={Ocho} className="d-block w-100 carousel-img" alt="Descripción de la primera imagen" />
            <div className="carousel-caption d-none d-md-block">
              <h1>         Grán tensión antes de el nacional de mayores de Pamela</h1>
              <h3>En el Nacional de Mayores en Argentina, Pamela Maidana brilló en la pista de obstáculos al reducir
              su marca personal en un impresionante minuto y medio. </h3>
            </div>
          </div>
          <div className="carousel-item">
            <img src={Siete} className="d-block w-100 carousel-img" alt="Descripción de la segunda imagen" />
            <div className="carousel-caption d-none d-md-block">
              <h1>Título del segundo slide</h1>
              <p>Contenido representativo del segundo slide.</p>
            </div>
          </div>
        </div>
        <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleDark" data-bs-slide="prev">
          <span className="carousel-control-prev-icon" aria-hidden="true"></span>
          <span className="visually-hidden">Anterior</span>
        </button>
        <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleDark" data-bs-slide="next">
          <span className="carousel-control-next-icon" aria-hidden="true"></span>
          <span className="visually-hidden">Siguiente</span>
        </button>
      </div>
    </div>
  );
}

export default Carousel;
