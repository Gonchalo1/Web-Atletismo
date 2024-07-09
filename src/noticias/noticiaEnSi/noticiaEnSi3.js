// NoticiaEnSi1.js
import React from 'react';
import '../../App.css';
import { useNavigate } from 'react-router-dom'; 
import Seis from '../../imagenes/miembros5.jpeg'

function NoticiaEnSi3() {
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
                <h3><strong>Fabio bajó los 40 minutos en 10KM</strong></h3>
                <i>6 de Julio de 2024</i>
                <p className='parrafo-especial'>
                Fabio ha logrado un impresionante hito en su carrera de atletismo al bajar los 40 minutos 
                en los 10km. Con una combinación de entrenamiento intenso, disciplina y determinación, Fabio
                 se preparó meticulosamente para este desafío. Durante la carrera, mantuvo un ritmo constante
                  y estratégico, concentrándose en su respiración y técnica para optimizar cada paso.
                        </p>
                <img src={Seis} alt='Foto antes de la despedida'></img>
                <i>RP RUNNING TEAM</i>
                <h4>Último esfuerzo</h4>
                <p>
                En los kilómetros finales, su determinación se hizo aún más evidente mientras aceleraba,
                 motivado por el objetivo de romper la barrera de los 40 minutos. Al cruzar la línea de 
                 meta en 39:45, Fabio no solo alcanzó una nueva marca personal, sino que también demostró
                  que con esfuerzo y dedicación, cualquier meta es alcanzable. Su logro es un testimonio
                   de su compromiso y pasión por el deporte.
                   </p>
                
            </div>
        </div>
    );
}

export default NoticiaEnSi3;
