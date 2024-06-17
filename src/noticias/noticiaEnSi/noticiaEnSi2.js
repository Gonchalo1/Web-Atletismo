// NoticiaEnSi1.js
import React from 'react';
import './noticiaEnSi.css';
import { useNavigate } from 'react-router-dom'; 
import Cinco from '../../imagenes/5.jpeg'

function NoticiaEnSi2() {
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
                <h3><strong>Sufrimiento luego de una gran carrera</strong></h3>
                <i>6 de Julio 2024</i>
                <p className='parrafo-especial'>
                En Moreno, Argentina, la sección de cross de 6 kilómetros organizada por la 
                Municipalidad fue un desafío intenso. Los corredores se enfrentaron a un terreno
                 montañoso y accidentado, serpenteados por senderos estrechos y pendientes empinadas.
                        </p>
                <img src={Cinco} alt='Foto antes de la despedida'></img>
                <i>FEDERICO</i>
                <h4>Desafío en la Carrera Cross de 6 Kilómetros en Moreno</h4>
                <p>
                Con el sol implacable y el terreno irregular, cada paso fue una prueba de resistencia
                 física y mental. La carrera destacó por su exigencia y la determinación de los
                  participantes para superar el sufrimiento y alcanzar la meta.
                       </p>
                
            </div>
        </div>
    );
}

export default NoticiaEnSi2;
