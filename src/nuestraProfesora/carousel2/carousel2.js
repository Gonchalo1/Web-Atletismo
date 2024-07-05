import React from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHeart, faStar, faBolt, faFire, faCrown, faPersonShelter } from '@fortawesome/free-solid-svg-icons';
import '../../App.css';


function Carousel2() {
  return (
    <div className="carousel2-wrapper">
      <div id="carouselExampleDark2" className="carousel slide" data-bs-ride="carousel" data-bs-interval="3000">
        <div className="carousel-inner carousel2-inner">
          <div className="carousel-item active carousel2-item">
            <div className="carousel2-content">
              <div className="adjective2">
              
                <span>
                <i class="bi bi-person-arms-up"></i>
                Inspiradora
                </span>
              </div>
              <div className="adjective2">
                <span>
                <i class="bi bi-emoji-grin"></i>
                  Motivadora
                  </span>
              </div>
              <div className="adjective2">
                <span>
                <i class="bi bi-currency-yen"></i>
                  Carismática
                  </span>
              </div>
            </div>
          </div>
          <div className="carousel-item carousel2-item">
            <div className="carousel2-content">
            <div className="adjective2">
            <span><FontAwesomeIcon icon={faStar} /> Valiente</span>
            </div>
              <div className="adjective2">
                <span><FontAwesomeIcon icon={faCrown} /> Paciente</span>
              </div>
              <div className="adjective2">
                <span><FontAwesomeIcon icon={faFire} /> Innovadora</span>
              </div>
            </div>
          </div>
          <div className="carousel-item carousel2-item">
            <div className="carousel2-content">
              <div className="adjective2">
                <span><FontAwesomeIcon icon={faPersonShelter} /> Respetuosa</span>
              </div>
              <div className="adjective2">
              <span><FontAwesomeIcon icon={faBolt} /> Comprometida</span>
              </div>
              <div className="adjective2">
                <span><FontAwesomeIcon icon={faHeart} className="mi-clase-css" />
                Empática</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Carousel2;
