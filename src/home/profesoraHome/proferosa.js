import React from 'react';
import { Link } from 'react-router-dom';
import '../../App.css';

// Imágenes
import Catorce from '../../imagenes/pame.jpeg';
import pame1 from '../../imagenes/nuestraProfesora/pameHome1.jpg';
import pame2 from '../../imagenes/nuestraProfesora/pameHome2.jpg';
import pame3 from '../../imagenes/nuestraProfesora/pameHome3.webp';

function ProferosaHome() {
    return (
        <div className='div-principal-profesora-pame'>
            <h2 className='equipo-h2'><strong>Nuestra Profesora</strong></h2>
            <div className="equipo-grilla">
                <Link to="/nuestraProfesora" className="equipo-link-contenido">
                    <div className="equipo-contenido">
                        <img src={Catorce} alt="Imagen de la profesora" className="equipo-img" />
                        <div className="equipo-texto">
                        </div>
                    </div>
                </Link>
                <Link to="/nuestraProfesora" className="equipo-link-contenido">
                    <div className="equipo-contenido">
                        <img src={pame1} alt="Imagen de la profesora luego de una carrera" className="equipo-img" />
                        <div className="equipo-texto">
                        </div>
                    </div>
                </Link>
                <Link to="/nuestraProfesora" className="equipo-link-contenido">
                    <div className="equipo-contenido">
                        <img src={pame2} alt="La profesora compitiendo en písta" className="equipo-img" />
                        <div className="equipo-texto">
                        </div>
                    </div>
                </Link>
                <Link to="/nuestraProfesora" className="equipo-link-contenido">
                    <div className="equipo-contenido">
                        <img src={pame3} alt="La profesora en otra competencia de písta" className="equipo-img" />
                        <div className="equipo-texto">
                        </div>
                    </div>
                </Link>
            </div>
        </div>
    );
}

export default ProferosaHome;
