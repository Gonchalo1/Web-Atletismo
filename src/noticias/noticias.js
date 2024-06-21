// src/components/Noticias/Noticias.js
import React from 'react';
import './noticias.css';
import Footer from '../footer/footer';
import { Link } from 'react-router-dom';

import Cuatro from '../imagenes/4.jpeg';
import Cinco from '../imagenes/5.jpeg';
import Seis from '../imagenes/6.jpeg';
import Siete from '../imagenes/7.jpeg';
import Ocho from '../imagenes/8.jpeg';
import Nueve from '../imagenes/9.jpeg';
import Calendario from '../imagenes/5.png';

function Noticias() {
    return (
        <div className="contenedor-pagina">
            <div className="contenedor-principal">
                <h2>Últimas noticias</h2>

                <Link to="/noticia/1" className="link-noticia">
                    <div className="contenedor-flex">
                        <div className='div1'>
                            <img src={Cuatro} alt="Noticia" />
                            <div className="icono-texto">
                                <img src={Calendario} alt='Icono-calendario' className='icono-calendario' />
                                <span><h5 className='h5'>12<br />Mayo</h5></span>
                            </div>
                        </div>
                        <div className='div2'>
                            <div className='informacion'>
                                <h4 className='h4'>
                                    El grupo de running se juntó a festejar el 25 de Mayo post-carrera maya
                                </h4>
                            </div>
                        </div>
                    </div>
                </Link>

                <Link to="/noticia/2" className="link-noticia">
                    <div className="contenedor-flex">
                        <div className='div1'>
                            <img src={Cinco} alt="Noticia" />
                            <div className="icono-texto">
                                <img src={Calendario} alt='Icono-calendario' className='icono-calendario' />
                                <span><h5 className='h5'>6<br />Mayo</h5></span>
                            </div>
                        </div>
                        <div className='div2'>
                            <div className='informacion'>
                                <h4 className='h4'>
                                    Sufrimiento luego de una grán carrera
                                </h4>
                            </div>
                        </div>
                    </div>
                </Link>

                <Link to="/noticia/3" className="link-noticia">
                    <div className="contenedor-flex">
                        <div className='div1'>
                            <img src={Seis} alt="Noticia" />
                            <div className="icono-texto">
                                <img src={Calendario} alt='Icono-calendario' className='icono-calendario' />
                                <span><h5 className='h5'>8<br />Diciembre</h5></span>
                            </div>
                        </div>
                        <div className='div2'>
                            <div className='informacion'>
                                <h4 className='h4'>
                                    Hermoso arcoiris luego de unas hermosas pasadas
                                </h4>
                            </div>
                        </div>
                    </div>
                </Link>

                <Link to="/noticia/4" className="link-noticia">
                    <div className="contenedor-flex">
                        <div className='div1'>
                            <img src={Siete} alt="Noticia" />
                            <div className="icono-texto">
                                <img src={Calendario} alt='Icono-calendario' className='icono-calendario' />
                                <span><h5 className='h5'>20<br />Abríl</h5></span>
                            </div>
                        </div>
                        <div className='div2'>
                            <div className='informacion'>
                                <h4 className='h4'>
                                    Triple premiación en la carrera de Malvinitas
                                </h4>
                            </div>
                        </div>
                    </div>
                </Link>

                <Link to="/noticia/5" className="link-noticia">
                    <div className="contenedor-flex">
                        <div className='div1'>
                            <img src={Ocho} alt="Noticia" />
                            <div className="icono-texto">
                                <img src={Calendario} alt='Icono-calendario' className='icono-calendario' />
                                <span><h5 className='h5'>13<br />Abríl</h5></span>
                            </div>
                        </div>
                        <div className='div2'>
                            <div className='informacion'>
                                <h4 className='h4'>
                                    Grán tensión antes de el nacional de mayores de Pamela
                                </h4>
                            </div>
                        </div>
                    </div>
                </Link>

                <Link to="/noticia/6" className="link-noticia">
                    <div className="contenedor-flex">
                        <div className='div1'>
                            <img src={Nueve} alt="Noticia" />
                            <div className="icono-texto">
                                <img src={Calendario} alt='Icono-calendario' className='icono-calendario' />
                                <span><h5 className='h5'>1<br />Marzo</h5></span>
                            </div>
                        </div>
                        <div className='div2'>
                            <div className='informacion'>
                                <h4 className='h4'>
                                    Mosquitos, mosquitos y mucho humo 
                                </h4>
                            </div>
                        </div>
                    </div>
                </Link>
            </div>
            <Footer />
        </div>
    );
}

export default Noticias;
