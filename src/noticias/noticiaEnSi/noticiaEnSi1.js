// NoticiaEnSi1.js
import React from 'react';
import '../../App.css';
import { useNavigate } from 'react-router-dom'; 
import Uno from '../../imagenes/noticiasImagenes/crisNoticia.jpeg'

function NoticiaEnSi1() {
    const navigate = useNavigate(); 

    const handleBackClick = () => {
        navigate('/noticias'); 
    };

    return (
        <div className="noticia-detalle">
            <div className="volver" onClick={handleBackClick}>
            <i class="bi bi-caret-left"></i> 
            VOLVER
            </div>
            <div className='contenido'>
                <h3><strong>Cris hizo podio en Distancia de 8k</strong></h3>
                <i>7 de Julio de 2024</i>
                <p className='parrafo-especial'>
                Cris participó en una emocionante carrera de 8km, demostrando una gran determinación y esfuerzo. 
                Desde el inicio, Cris se mantuvo concentrado y gestionó su energía de manera inteligente,
                 manteniendo un ritmo constante a pesar de los desafíos del terreno.
                        </p>
                <img src={Uno} alt='Foto antes de la despedida'></img>
                <i>RP RUNNING TEAM</i>
                <h4>Ultimos KM</h4>
                <p>
                En los últimos kilómetros, cuando el cansancio comenzaba a hacerse sentir, Cris sacó fuerzas de donde
                 parecía no haber, apretando el paso y superando a varios competidores. Gracias a su dedicación y 
                 perseverancia, logró alcanzar el podio, manteniéndose firme y decidido hasta cruzar la línea de meta.
                  ¡Una verdadera muestra de esfuerzo y superación!
                       </p>
                
            </div>
        </div>
    );
}

export default NoticiaEnSi1;
