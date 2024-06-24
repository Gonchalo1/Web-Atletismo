import React, { useEffect, useRef } from 'react';
import './contacto.css';
import Footer from '../footer/footer';

import Portada from '../imagenes/contactoImagenes/portadaContacto.png';
import Imagen1 from '../imagenes/contactoImagenes/imagenContacto.png';
import Imagen2 from '../imagenes/contactoImagenes/imagenContacto2.png';
import Imagen3 from '../imagenes/contactoImagenes/imagenContacto3.png';
import Imagen4 from '../imagenes/contactoImagenes/imagenContacto4.png';
import Imagen5 from '../imagenes/pame.jpeg';
import Mapa from './mapa';

function Contacto() {
    const overlayRef = useRef(null);

    useEffect(() => {
        const handleScroll = () => {
            if (overlayRef.current) {
                const element = overlayRef.current;
                const rect = element.getBoundingClientRect();
                const windowHeight = window.innerHeight;

                // Verificar si el contenedor está en la ventana visible
                if (rect.top <= windowHeight && rect.bottom >= 0) {
                    const visibleArea = Math.min(rect.bottom, windowHeight) - Math.max(rect.top, 0);
                    const scrollFactor = visibleArea / windowHeight;
                    const offset = -rect.top * 0.1; // Ajustar 0.1 para velocidad del parallax

                    // Aplicar el efecto de parallax a la imagen
                    element.querySelector('.imagen4').style.transform = `translateY(${offset}px)`;
                }
            }
        };

        window.addEventListener('scroll', handleScroll);
        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);

    return (
        <div className="contacto-container">
            <img src={Portada} alt='Portada' className="portada" />

            {/* Primer Contenedor */}
            <div className="section">
                <div className="image-container">
                    <img src={Imagen1} alt='Imagen 1' className="imagen1"/>
                </div>
                <div className="text-container">
                    <img src={Imagen2} alt='Imagen 2' className="imagen2"/>
                    <div className="text-content">
                        <h5>¡Bienvenido a RP!</h5>
                        <h1>RP La mejor comunidad de running</h1>
                        <p>
                            En nuestro grupo organizamos entrenamientos de alta calidad, proveemos todo tipo
                            de ayuda, y te mantenemos al tanto de los últimos eventos de running.
                        </p>
                    </div>
                </div>
            </div>

            {/* Tercer Contenedor (Imagen 4) */}
            <div className="section-4"> {/* Cambiado de section-3 a section-4 */}
                <div className="image-container-4"> {/* Cambiado de image-container-3 a image-container-4 */}
                    <div ref={overlayRef} className="image-overlay">
                        <img src={Imagen4} alt='Imagen 4' className="imagen4"/> {/* Cambiado de imagen3 a imagen4 */}
                    </div>
                </div>
                
            </div>

            {/* Segundo Contenedor (Imagen 3) */}
            <div className="section-3"> {/* Cambiado de section-4 a section-3 */}
                <div className="image-container-3"> {/* Cambiado de image-container-4 a image-container-3 */}
                    <img src={Imagen3} alt='Imagen 3' className="imagen3"/> {/* Cambiado de imagen4 a imagen3 */}
                </div>
                <div className="text-container-3"> {/* Cambiado de text-container-3 a text-container-4 */}
                    <div className="text-content-3"> {/* Cambiado de text-content-3 a text-content-4 */}
                        <h3>Nuestra misión</h3>
                        <p>
                            Our objective for this project was to develop a comprehensive financial management platform that provided users with a centralized dashboard for managing their finances.
                            <br/>Nuestra misión grupal es:
                        </p>
                        <ul className="mission-list">
                            <li className="mission-item"><i className="bi bi-check-circle-fill"></i><strong> Desarrollar un nuevo estilo de vida</strong></li>
                            <li className="mission-item"><i className="bi bi-check-circle-fill"></i><strong> Forjarles disciplina deportiva para vivir la vida de otra manera</strong></li>
                            <li className="mission-item"><i className="bi bi-check-circle-fill"></i><strong> Mejorar la salud</strong></li>
                        </ul>
                    </div>
                </div>
                </div>
                
                <div className="text-container-5">
                     <h1>Nuestra coach</h1>
                <div className="imagen-coach-wrapper">
                    <img src={Imagen5} alt='Pame' className="imagen-coach" />
                <div className="overlay">
                <i class="bi bi-instagram icono-instagram"></i>
                    </div>
                           </div>
                <div className="texto">
                    <h3>Pame</h3>
                    <p><strong>Entrenadora de atletísmo</strong></p>
                        </div>
                            </div>
            
                <div className="contenedor-mapa"> {/* Contenedor para el mapa y contacto */}
                    <div className='div-mapa'>
                        <Mapa/>
                    </div>
                    <div className='text-container-6'>
                        <h1>Contactanos</h1>
                        <div className='phone-container-6'>
                            <div>
                                <p>Teléfono</p>
                                <p>+54 9 11 2278-0920</p>
                                <i class="bi bi-instagram "></i>
                            </div>
                      
                    </div>
                </div>
            </div>

            <Footer />
        </div>
    );
}

export default Contacto;
