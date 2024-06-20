import React from 'react';
import { Link } from 'react-router-dom';
import Logo from '../imagenes/logo.png';
import Telefono from '../imagenes/telefono.png';
import './footer.css';

function Footer() {
    return (
        <footer className="footer">
                  <div className="footer-logo">
                <div className="logo-container">
                    <img src={Logo} alt="Logo" />
                    <h2>RP</h2>
                </div>
                <div className="logo-texto">
                    <p>Bienvenido a nuestro equipo de running, descubre sobre nuestro equipo<br/> conecta con nuestros
                    integrantes y obten nuestra ubicación<br/> para poder entrenar con nosotros<br/> no olvides consultar
                    los precios.</p>
                    <i className="bi bi-instagram"></i>
                </div>
            </div><div className="footer-secciones">
                <p>Secciones</p>
                <ul>
                    <li>
                        <Link to="#">
                            <span>Home</span>
                        </Link>
                    </li>
                    <li>
                        <Link to="#">
                            <span>Miembros</span>
                        </Link>
                    </li>
                    <li>
                        <Link to="#">
                            <span>Eventos</span>
                        </Link>
                    </li>
                    <li>
                        <Link to="#">
                            <span>Resultados</span>
                        </Link>
                    </li>
                    <li>
                        <Link to="#">
                            <span>Contacto</span>
                        </Link>
                    </li>
                </ul>
            </div>
            <div className="footer-contacto">
                <img src={Telefono} alt="Teléfono" />
                <span>+54 9 11 2278-0920</span>
            </div>
            <div className="footer-ubicacion">
                <i className="bi bi-geo-alt-fill"></i>
                <span>Buenos Aires, Malvinas Argentinas, Los polvorines Predio Municipal:<br />
                    <a href="https://maps.app.goo.gl/o2K8VhhbiG56WHzZ6" target="_blank" rel="noopener noreferrer">Ver en Google Maps</a>
                </span>
            </div>
            <div className="footer-creado-por">
                <span>Creado por Gonzalo Calderón: <a href="https://instagram.com/_gonchalo_" target="_blank" rel="noopener noreferrer">_gonchalo_</a></span>
            </div>
        </footer>
    );
}

export default Footer;
