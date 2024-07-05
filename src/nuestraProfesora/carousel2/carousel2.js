// src/components/carousel2/carousel2.js

import React from "react";
import '../../App.css';

function Carousel2() {
  return (
    <div className="carousel2-wrapper">
      <div id="carouselExampleDark2" className="carousel2 slide" data-bs-ride="carousel" data-bs-interval="2000">
        <div className="carousel2-indicators">
          <button type="button" data-bs-target="#carouselExampleDark2" data-bs-slide-to="0" className="active" aria-current="true" aria-label="Slide 1"></button>
          <button type="button" data-bs-target="#carouselExampleDark2" data-bs-slide-to="1" aria-label="Slide 2"></button>
          <button type="button" data-bs-target="#carouselExampleDark2" data-bs-slide-to="2" aria-label="Slide 3"></button>
        </div>
        <div className="carousel2-inner">
          {/* Slide 1 */}
          <div className="carousel2-item active">
            <div className="carousel2-content">
              <div className="adjective2">
                <i className="icon2" aria-hidden="true"></i>
                <span>Inspiradora</span>
              </div>
              <div className="adjective2">
                <i className="icon2" aria-hidden="true"></i>
                <span>Motivadora</span>
              </div>
              <div className="adjective2">
                <i className="icon2" aria-hidden="true"></i>
                <span>Carismática</span>
              </div>
            </div>
          </div>
          {/* Slide 2 */}
          <div className="carousel2-item">
            <div className="carousel2-content">
              <div className="adjective2">
                <i className="icon2" aria-hidden="true"></i>
                <span>Valiente</span>
              </div>
              <div className="adjective2">
                <i className="icon2" aria-hidden="true"></i>
                <span>Paciente</span>
              </div>
              <div className="adjective2">
                <i className="icon2" aria-hidden="true"></i>
                <span>Innovadora</span>
              </div>
            </div>
          </div>
          {/* Slide 3 */}
          <div className="carousel2-item">
            <div className="carousel2-content">
              <div className="adjective2">
                <i className="icon2" aria-hidden="true"></i>
                <span>Respetuosa</span>
              </div>
              <div className="adjective2">
                <i className="icon2" aria-hidden="true"></i>
                <span>Comprometida</span>
              </div>
              <div className="adjective2">
                <i className="icon2" aria-hidden="true"></i>
                <span>Empática</span>
              </div>
            </div>
          </div>
        </div>
        {/* Controles de navegación */}
        <button className="carousel2-control-prev" type="button" data-bs-target="#carouselExampleDark2" data-bs-slide="prev">
          <span className="carousel2-control-prev-icon" aria-hidden="true"></span>
          <span className="visually-hidden">Previous</span>
        </button>
        <button className="carousel2-control-next" type="button" data-bs-target="#carouselExampleDark2" data-bs-slide="next">
          <span className="carousel2-control-next-icon" aria-hidden="true"></span>
          <span className="visually-hidden">Next</span>
        </button>
      </div>
    </div>
  );
}

export default Carousel2;
