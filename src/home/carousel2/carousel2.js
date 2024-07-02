import React from 'react';
import Carousel from 'react-bootstrap/Carousel';
import '../../App.css';
import Miembro1 from '../../imagenes/10.jpeg'; 
import Miembro2 from '../../imagenes/11.jpeg';
import Miembro3 from '../../imagenes/12.jpeg';
import Miembro4 from '../../imagenes/13.jpeg'; 
import Miembro5 from '../../imagenes/14.jpeg';
import Miembro6 from '../../imagenes/15.jpeg';

function Carousel2() {
  return (
    <div className='div-carousel2'>
      <h3 className='carousel2-h3'><strong>Miembros</strong></h3>
      <Carousel>
        <Carousel.Item>
          <div className="carousel-content">
            <a href="https://instagram.com/brian_cardozo11" target="_blank" rel="noopener noreferrer" className="link-contenido">
              <div className="contenido2">
                <img src={Miembro1} alt="Brian Cardozo" className="miembro-img" />
                <div className="texto">
                  <p className="nombre">Brian Cardozo</p>
                  <p className="instagram">@brian_cardozo11</p>
                </div>
              </div>
            </a>
            <a href="https://instagram.com/otro_miembro" target="_blank" rel="noopener noreferrer" className="link-contenido">
              <div className="contenido2">
                <img src={Miembro2} alt="Otro Miembro" className="miembro-img" />
                <div className="texto">
                  <p className="nombre">Otro Miembro</p>
                  <p className="instagram">@otro_miembro</p>
                </div>
              </div>
            </a>
            <a href="https://instagram.com/tercer_miembro" target="_blank" rel="noopener noreferrer" className="link-contenido">
              <div className="contenido2">
                <img src={Miembro3} alt="Tercer Miembro" className="miembro-img" />
                <div className="texto">
                  <p className="nombre">Tercer Miembro</p>
                  <p className="instagram">@tercer_miembro</p>
                </div>
              </div>
            </a>
          </div>
        </Carousel.Item>
        <Carousel.Item>
          <div className="carousel-content">
            <a href="https://instagram.com/cuarto_miembro" target="_blank" rel="noopener noreferrer" className="link-contenido">
              <div className="contenido2">
                <img src={Miembro4} alt="Cuarto Miembro" className="miembro-img" />
                <div className="texto">
                  <p className="nombre">Cuarto Miembro</p>
                  <p className="instagram">@cuarto_miembro</p>
                </div>
              </div>
            </a>
            <a href="https://instagram.com/quinto_miembro" target="_blank" rel="noopener noreferrer" className="link-contenido">
              <div className="contenido2">
                <img src={Miembro5} alt="Quinto Miembro" className="miembro-img" />
                <div className="texto">
                  <p className="nombre">Quinto Miembro</p>
                  <p className="instagram">@quinto_miembro</p>
                </div>
              </div>
            </a>
            <a href="https://instagram.com/sexto_miembro" target="_blank" rel="noopener noreferrer" className="link-contenido">
              <div className="contenido2">
                <img src={Miembro6} alt="Sexto Miembro" className="miembro-img" />
                <div className="texto">
                  <p className="nombre">Sexto Miembro</p>
                  <p className="instagram">@sexto_miembro</p>
                </div>
              </div>
            </a>
          </div>
        </Carousel.Item>
      </Carousel>
    </div>
  );
}

export default Carousel2;
