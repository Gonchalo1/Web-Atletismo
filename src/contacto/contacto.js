import React from 'react';
import './contacto.css'
import Footer from '../footer/footer';

import Portada from '../imagenes/contactoImagenes/portadaContacto.png'
import Imagen1 from '../imagenes/contactoImagenes/imagenContacto.png'
import Imagen2 from '../imagenes/contactoImagenes/imagenContacto2.png'
import Imagen3 from '../imagenes/contactoImagenes/imagenContacto3.png'
import Imagen4 from '../imagenes/contactoImagenes/imagenContacto4.png'

import Imagen5 from '../imagenes/pame.jpeg'

function Contacto() {
    return (
        <div className="">
            <img src={Portada} alt='xd'/>
            <div>
                <div>
                <img src={Imagen1} alt='xd'/>
                </div>
                <div>
                    <img src={Imagen2} alt='xd'/>
                        <h3>¡Bienvenido a RP!</h3>
                        <h2>RP La mejór comunidad de running</h2>
                        <p>
                            En nuestro grupo organizamos entrenamientos de alta calidad, proveemos todo tipo
                             de ayuda, y te mantenemos al tanto de los últimos eventos de running
                             </p>
                </div>
            </div>
            <div>
                <div>
                <img src={Imagen3} alt='xd'></img>
                </div>
                <div>
                    <span>Nuestra misión</span>
                    <p>
                        Nuestra misión grupal es:
                    </p>
                    <div>
                    <i></i> <li><span>Desarrollar un nuevo estilo de vida</span></li>
                    |<i></i> <li><span>Forjarles disciplina deportiva para vivir la 
                     |   vida de otra manera</span></li>
                      |  <i></i> <li><span>Mejorar la salúd</span></li>
                    </div>
                </div>
                <div>
                <img src={Imagen4} alt='xd'/>
                </div>
                <div>
                    <h3>Pame</h3>
                    <h1>Nuestra coach</h1>
                    <img src={Imagen5} alt='xd' />
                </div>
                <div>
                    <div>
                    <iframe title='xd'></iframe>
                    </div>
                    <div>
                        <h1>Contactanos</h1>
                        <div>
                            <div>
                                <p>Teléfono</p>
                                <p>+54 9 11 2278-0920</p>
                                <i></i>
                            </div>         
                            </div>                   
                    </div>
                </div>
            </div>
            <Footer/>
        </div>
    );}



export default Contacto;