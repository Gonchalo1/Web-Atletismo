// NoticiaEnSi1.js
import React from 'react';
import '../../App.css';
import { useNavigate } from 'react-router-dom'; 
import Siete from '../../imagenes/miembros7.jpeg'

function NoticiaEnSi4() {
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
                <h3><strong>Triple premiacion en la carrera de Malvinitas</strong></h3>
                <i>20d e Abríl de 2024</i>
                <p className='parrafo-especial'>
                La carrera de Malvinitas de 6 kilómetros se celebró bajo la lluvia, desafiando a los corredores
                 con condiciones climáticas adversas. Gonzalo, Sandra y Joshua destacaron en la competencia, 
                 ganando el reconocimiento por sus impresionantes actuaciones. 
                        </p>
                <img src={Siete} alt='Foto antes de la despedida'></img>
                <i>RP RUNNING TEAM</i>
                <h4>Desafío en la Carrera de Malvinitas y Triple Premiación</h4>
                <p>
                Joshua se llevó el premio más grande, destacando su habilidad y dedicación en un día memorable
                 para los participantes y espectadores por igual.     
                 </p>
            </div>
        </div>
    );
}

export default NoticiaEnSi4;
