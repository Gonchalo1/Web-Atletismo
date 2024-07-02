// NoticiaEnSi1.js
import React from 'react';
import '../../App.css';
import { useNavigate } from 'react-router-dom'; 
import Nueve from '../../imagenes/9.jpeg'

function NoticiaEnSi6() {
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
                <h3><strong>El equipo de running se juntó a festejar el 25 de mayo post-carrera maya</strong></h3>
                <i>1 de Marzo de 2024</i>
                <p className='parrafo-especial'>
                Durante un entrenamiento al aire libre, los corredores se encontraron con una plaga de mosquitos 
                que desafiaron su concentración y resistencia. 
                        </p>
                <img src={Nueve} alt='Foto antes de la despedida'></img>
                <i>Fuera mosquitos, Fuera</i>
                <h4>Entrenamiento entre Mosquitos</h4>
                <p>
                A pesar de las picaduras y molestias, el equipo perseveró, encontrando en esta experiencia un 
                recordatorio de la perseverancia frente a los obstáculos naturales. El entrenamiento continuó 
                con determinación, dejando a los corredores con una anécdota que fortaleció su vínculo
                 y determinación.
                       </p>
                
            </div>
        </div>
    );
}

export default NoticiaEnSi6;
