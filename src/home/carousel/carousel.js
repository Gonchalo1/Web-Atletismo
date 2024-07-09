import React from 'react';
import { Link } from 'react-router-dom';
import Ocho from '../../imagenes/8.jpeg';
import Siete from '../../imagenes/noticiasImagenes/gonzaNoticia.jpeg';
import '../../App.css'; // Importa el archivo CSS donde definirás los estilos

function Carousel() {
  return (
    <Link to="/noticias">
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
              <h1 className='h1'>  <strong>       Grán tensión antes de el nacional de mayores de Pamela</strong></h1>
              <h3 className='carousel-h3 h3'><strong>En el Nacional de Mayores en Argentina, Pamela Maidana brilló en la pista de obstáculos al reducir
              su marca personal en un impresionante minuto y medio. </strong></h3>
            </div>
          </div>
          <div className="carousel-item">
            <img src={Siete} className="d-block w-100 carousel-img" alt="Descripción de la segunda imagen" />
            <div className="carousel-caption d-none d-md-block">
              <h1>Gonza Debutó en cross</h1>
            </div>
          </div>
        </div>
        <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleDark" data-bs-slide="prev">
          <i className="bi bi-arrow-left-short"></i>
          <span className="visually-hidden">Anterior</span>
        </button>
        <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleDark" data-bs-slide="next">
          <i className="bi bi-arrow-right-short"></i>
          <span className="visually-hidden">Siguiente</span>
        </button>

        {/* Texto adicional en dispositivos móviles */}
        <div className="additional-text mobile-only"><strong>Noticias</strong></div>
        
      </div>
    </div>
    </Link>
  );
}

export default Carousel;
