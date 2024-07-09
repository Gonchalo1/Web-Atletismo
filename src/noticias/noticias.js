// src/components/Noticias/Noticias.js
import React from 'react';
import '../App.css';
import Footer from '../footer/footer';
import { Link } from 'react-router-dom';

import Cris from '../imagenes/noticiasImagenes/crisNoticia.jpeg'
import Cinco from '../imagenes/miembros5.jpeg';
import Gonza from '../imagenes/noticiasImagenes/gonzaNoticia.jpeg'
import Seis from '../imagenes/miembros6.jpeg';
import Siete from '../imagenes/miembros7.jpeg';
import Ocho from '../imagenes/miembros8.jpeg';
import Nueve from '../imagenes/miembros9.jpeg';
import Calendario from '../imagenes/noticiasImagenes/calendario.webp';

function Noticias() {
    return (
        <div className="contenedor-pagina">
            <div className="contenedor-principal">
                <h2>Últimas noticias</h2>

                <Link to="/noticia/1" className="link-noticia">
                    <div className="contenedor-flex">
                        <div className='div1'>
                            <img src={Cris} alt="Noticia" />
                            <div className="icono-texto">
                                <img src={Calendario} alt='Icono-calendario' className='icono-calendario' />
                                <span><h5 className='h5'>7<br />Julio</h5></span>
                            </div>
                        </div>
                        <div className='div2'>
                            <div className='informacion'>
                                <h4 className='h4'>
                                    Cris hizo podio en distancia de 8km
                                </h4>
                            </div>
                        </div>
                    </div>
                </Link>

                <Link to="/noticia/2" className="link-noticia">
                    <div className="contenedor-flex">
                        <div className='div1'>
                            <img src={Gonza} alt="Noticia" />
                            <div className="icono-texto">
                                <img src={Calendario} alt='Icono-calendario' className='icono-calendario' />
                                <span><h5 className='h5'>29<br />Junio</h5></span>
                            </div>
                        </div>
                        <div className='div2'>
                            <div className='informacion'>
                                <h4 className='h4'>
                                    Gonzalo Debutó en cross
                                </h4>
                            </div>
                        </div>
                    </div>
                </Link>

                <Link to="/noticia/3" className="link-noticia">
                    <div className="contenedor-flex">
                        <div className='div1'>
                            <img src={Cinco} alt="Noticia" />
                            <div className="icono-texto">
                                <img src={Calendario} alt='Icono-calendario' className='icono-calendario' />
                                <span><h5 className='h5'>6<br />Julio</h5></span>
                            </div>
                        </div>
                        <div className='div2'>
                            <div className='informacion'>
                                <h4 className='h4'>
                                    Fabio Bajó los 40 minutos en los 10k
                                </h4>
                            </div>
                        </div>
                    </div>
                </Link>
{/* 
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
                */}
            </div>
            <Footer />
        </div>
    );
}

export default Noticias;
