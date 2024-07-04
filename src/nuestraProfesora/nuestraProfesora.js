import React from "react";
import '../App.css';
import Footer from "../footer/footer";
import fondo from '../imagenes/fam.jpg'; // Importa la imagen
import Carousel1 from '../imagenes/carousel1.jpeg';
import Carousel2 from '../imagenes/carousel2.jpeg';
import Carousel3 from '../imagenes/carousel3.jpeg';


function NuestraProfesora() {
  return (
    <div className="principalPame" style={{ backgroundImage: `url(${fondo})` }}>
      <div id="carouselExampleCaptions" className="carousel slide">
        <div className="carousel-indicators">
          <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="0" className="active" aria-current="true" aria-label="Slide 1"></button>
          <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="1" aria-label="Slide 2"></button>
          <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="2" aria-label="Slide 3"></button>
        </div>
        <div className="carousel-inner">
          <div className="carousel-item active">
            <img src={Carousel1} className="d-block w-100" alt="Primer Slide"/>
            <div className="carousel-caption d-none d-md-block">
              <h5>Primer Título</h5>
              <p>Descripción para la primera imagen.</p>
            </div>
          </div>
          <div className="carousel-item">
            <img src={Carousel2} className="d-block w-100" alt="Segundo Slide"/>
            <div className="carousel-caption d-none d-md-block">
              <h5>Segundo Título</h5>
              <p>Descripción para la segunda imagen.</p>
            </div>
          </div>
          <div className="carousel-item">
            <img src={Carousel3} className="d-block w-100" alt="Tercer Slide"/>
            <div className="carousel-caption d-none d-md-block">
              <h5>Tercer Título</h5>
              <p>Descripción para la tercera imagen.</p>
            </div>
          </div>
        </div>
        <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="prev">
          <span className="carousel-control-prev-icon" aria-hidden="true"></span>
          <span className="visually-hidden">Previous</span>
        </button>
        <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="next">
          <span className="carousel-control-next-icon" aria-hidden="true"></span>
          <span className="visually-hidden">Next</span>
        </button>
      </div>
      <Footer/>
    </div>
  );
}

export default NuestraProfesora;
