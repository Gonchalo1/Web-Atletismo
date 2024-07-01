import React from 'react';
import { Link } from 'react-router-dom';
import logo from '../imagenes/logo.png';
import './nav.css';

function Nav() {
    return (
        <div>
            <div className="header-container">
                <div className="header-left d-flex align-items-center">
                    <img src={logo} alt="Logo" className="header-logo" />
                    <Link to="/" className="home-link">
                        <div>
                            <h4>
                                <span className="home-text">RP</span>
                                <br />
                                <span className="home-text">RUNNING TEAM</span>
                            </h4>
                        </div>
                    </Link>
                </div>
                <div className="contact-info d-none d-sm-flex align-items-center">
                    <i className="bi bi-envelope m-3"></i>
                    <h4>
                        <div>
                            <p className="mb-0 email-text">Email:</p>
                            <p className="mb-0 email-text">PamelaMaidana@gmail.com</p>
                        </div>
                    </h4>
                </div>
            </div>
            <div className="nav-container">
                <div className="nav-overlay"></div>
                <nav className="navbar navbar-expand-lg navbar-light">
                    <div className="container-fluid justify-content-center">
                        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                            <span className="navbar-toggler-icon"></span>
                        </button>
                        <div className="collapse navbar-collapse justify-content-center" id="navbarSupportedContent">
                            <ul className="navbar-nav mb-2 mb-lg-0">
                                <li className="nav-item">
                                    <Link className="nav-link active" aria-current="page" to="/">Home</Link>
                                </li>
                                <li className="nav-item">
                                    <Link className="nav-link active" aria-current="page" to="/noticias">Noticias</Link>
                                </li>
                                <li className="nav-item">
                                    <Link className="nav-link active" aria-current="page" to="/precio">Precios</Link>
                                </li>
                                <li className="nav-item">
                                    <Link className="nav-link active" aria-current="page" to="/miembros">Miembros</Link>
                                </li>
                                <li className="nav-item">
                                    <Link className="nav-link active" aria-current="page" to="/contacto">Contacto</Link>
                                </li>
                            </ul>
                            <div className="header-actions ml-lg-3">
                            <a
                            href="https://www.instagram.com/rprunningteam/"
                            target="_blank"
                            rel="noopener noreferrer"
                            >
                        <i className="bi bi-instagram" ></i>
                            </a>
                                <button className="btn btn-light header-button d-none d-lg-inline-block text-dark">Nuestra Profesora</button>
                            </div>
                        </div>
                    </div>
                </nav>
            </div>
        </div>
    );
}

export default Nav;
