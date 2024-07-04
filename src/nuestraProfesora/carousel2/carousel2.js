// src/components/carousel2/carousel2.js

import React from "react";
import '../../App.css'; 

function Carousel2() {
  return (
    <div id="carouselExampleDark" className="carousel slide" data-bs-ride="carousel" data-bs-interval="2000">
      <div className="carousel-indicators">
        <button type="button" data-bs-target="#carouselExampleDark" data-bs-slide-to="0" className="active" aria-current="true" aria-label="Slide 1"></button>
        <button type="button" data-bs-target="#carouselExampleDark" data-bs-slide-to="1" aria-label="Slide 2"></button>
        <button type="button" data-bs-target="#carouselExampleDark" data-bs-slide-to="2" aria-label="Slide 3"></button>
      </div>
      <div className="carousel-inner">
        {/* Slide 1 */}
        <div className="carousel-item active">
          <div className="carousel-content">
            <div className="adjective">
              <i className="icon" aria-hidden="true"></i> {/* Aquí pondrás el ícono */}
              <span>Inspiradora</span>
            </div>
            <div className="adjective">
              <i className="icon" aria-hidden="true"></i>
              <span>Motivadora</span>
            </div>
            <div className="adjective">
              <i className="icon" aria-hidden="true"></i>
              <span>Carismática</span>
            </div>
          </div>
        </div>
        {/* Slide 2 */}
        <div className="carousel-item">
          <div className="carousel-content">
            <div className="adjective">
              <i className="icon" aria-hidden="true"></i>
              <span>Valiente</span>
            </div>
            <div className="adjective">
              <i className="icon" aria-hidden="true"></i>
              <span>Paciente</span>
            </div>
            <div className="adjective">
              <i className="icon" aria-hidden="true"></i>
              <span>Innovadora</span>
            </div>
          </div>
        </div>
        {/* Slide 3 */}
        <div className="carousel-item">
          <div className="carousel-content">
            <div className="adjective">
              <i className="icon" aria-hidden="true"></i>
              <span>Respetuosa</span>
            </div>
            <div className="adjective">
              <i className="icon" aria-hidden="true"></i>
              <span>Comprometida</span>
            </div>
            <div className="adjective">
              <i className="icon" aria-hidden="true"></i>
              <span>Empática</span>
            </div>
          </div>
        </div>
      </div>
      {/* Eliminamos los botones de navegación */}
    </div>
  );
}

export default Carousel2;
