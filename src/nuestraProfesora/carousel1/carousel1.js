// src/components/Carousel1.js

import React from "react";
import Carousel from '../../imagenes/carousel1.jpeg';
import Carousel2 from '../../imagenes/carousel2.jpeg';
import Carousel3 from '../../imagenes/carousel3.jpeg';

function Carousel1() {
  return (
    <div id="carouselExampleCaptions" className="carousel slide">
      <div className="carousel-indicators">
        <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="0" className="active" aria-current="true" aria-label="Slide 1"></button>
        <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="1" aria-label="Slide 2"></button>
        <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="2" aria-label="Slide 3"></button>
      </div>
      <div className="carousel-inner">
        <div className="carousel-item active">
          <img src={Carousel} className="d-block w-100 carousel-image" alt="Primer Slide"/>
          <div className="carousel-caption-left">
            <h2>Primer Título</h2>
          </div>
        </div>
        <div className="carousel-item">
          <img src={Carousel2} className="d-block w-100 carousel-image" alt="Segundo Slide"/>
          <div className="carousel-caption-left">
            <h2>Segundo Título</h2>
          </div>
        </div>
        <div className="carousel-item">
          <img src={Carousel3} className="d-block w-100 carousel-image" alt="Tercer Slide"/>
          <div className="carousel-caption-left">
            <h2>Tercer Título</h2>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Carousel1;
