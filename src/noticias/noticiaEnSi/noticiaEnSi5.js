// NoticiaEnSi1.js
import React from 'react';
import '../../App.css';
import { useNavigate } from 'react-router-dom'; 
import Ocho from '../../imagenes/8.jpeg'

function NoticiaEnSi5() {
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
                <h3><strong>Gran tensión antes del nacional de amyores de Pamela Maidana</strong></h3>
                <i>13 de Abríl</i>
                <p className='parrafo-especial'>
                En el Nacional de Mayores en Argentina, Pamela Maidana brilló en la pista de obstáculos al reducir
                 su marca personal en un impresionante minuto y medio. 
                        </p>
                <img src={Ocho} alt='Foto antes de la despedida'></img>
                <i>Pamela Maidana</i>
                <h4>Grán esfuerzo</h4>
                <p>
                Su destacada actuación no solo la catapultó hacia el podio, sino que también demostró su
                 dedicación y progreso en la disciplina. Pamela Maidana es ahora un nombre reconocido en el 
                 circuito nacional, inspirando con su tenacidad y determinación.
                       </p>
                
            </div>
        </div>
    );
}

export default NoticiaEnSi5;
