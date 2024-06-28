import React from 'react';
import { Link } from 'react-router-dom';
import './profesora.css';

// Imágenes
import Catorce from '../../imagenes/pame.jpeg';
import pame1 from '../../imagenes/homeImagenes/pame1.jpeg';
import pame2 from '../../imagenes/homeImagenes/pame2.jpeg';
import pame3 from '../../imagenes/homeImagenes/pame3.jpeg';

function ProferosaHome() {
    return (
        <div className='div-principal-profesora-pame'>
            <h2 className='equipo-h2'><strong>Nuestra Profesora</strong></h2>
            <div className="equipo-grilla">
                <Link to="/nuestraProfesora" className="equipo-link-contenido">
                    <div className="equipo-contenido">
                        <img src={Catorce} alt="Brian Cardozo" className="equipo-img" />
                        <div className="equipo-texto">
                        </div>
                    </div>
                </Link>
                <Link to="/nuestraProfesora" className="equipo-link-contenido">
                    <div className="equipo-contenido">
                        <img src={pame1} alt="Juan Perez" className="equipo-img" />
                        <div className="equipo-texto">
                        </div>
                    </div>
                </Link>
                <Link to="/nuestraProfesora" className="equipo-link-contenido">
                    <div className="equipo-contenido">
                        <img src={pame2} alt="Ana Garcia" className="equipo-img" />
                        <div className="equipo-texto">
                        </div>
                    </div>
                </Link>
                <Link to="/nuestraProfesora" className="equipo-link-contenido">
                    <div className="equipo-contenido">
                        <img src={pame3} alt="Carlos Mendoza" className="equipo-img" />
                        <div className="equipo-texto">
                        </div>
                    </div>
                </Link>
            </div>
        </div>
    );
}

export default ProferosaHome;
