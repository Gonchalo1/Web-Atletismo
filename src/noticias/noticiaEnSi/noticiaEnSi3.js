// NoticiaEnSi1.js
import React from 'react';
import './noticiaEnSi.css';
import { useNavigate } from 'react-router-dom'; 
import Seis from '../../imagenes/6.jpeg'

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
                <h3><strong>Hermoso arcoiris luego de unas duras pasadas</strong></h3>
                <i>8 de Diciembre de 2023</i>
                <p className='parrafo-especial'>
                Durante un entrenamiento rutinario, los corredores fueron testigos de un momento especial
                 al final del día: un hermoso arcoíris pintó el cielo con sus colores vibrantes. 
                        </p>
                <img src={Seis} alt='Foto antes de la despedida'></img>
                <i>RP RUNNING TEAM</i>
                <h4>El arcoiris</h4>
                <p>
                Este regalo inesperado de la naturaleza no solo elevó los ánimos del equipo, sino que también
                 sirvió como recordatorio del poder transformador del ejercicio y la belleza que rodea sus 
                 esfuerzos.
                   </p>
                
            </div>
        </div>
    );
}

export default NoticiaEnSi3;
