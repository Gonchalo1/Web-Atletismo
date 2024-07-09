// NoticiaEnSi1.js
import React from 'react';
import '../../App.css';
import { useNavigate } from 'react-router-dom'; 
import Cinco from '../../imagenes/noticiasImagenes/gonzaNoticia.jpeg'

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
                <h3><strong>Gonzalo debutó en cross</strong></h3>
                <i>29 de Junio 2024</i>
                <p className='parrafo-especial'>
                Gonzalo debutó en una desafiante carrera de cross de 6km, dejando una impresión
                 memorable. Desde el comienzo, mostró una excelente técnica y estrategia, adaptándose 
                 rápidamente al terreno irregular y las condiciones cambiantes del circuito. 
                        </p>
                <img src={Cinco} alt='Foto antes de la despedida'></img>
                <i>Rp RUNNING TEAM</i>
                <h4>Perseverancia</h4>
                <p>
                A pesar de ser su primera competencia de este tipo, Gonzalo se mantuvo firme y competitivo,
                 avanzando con determinación y superando a varios corredores experimentados. En los últimos 
                 tramos de la carrera, empujó con todas sus fuerzas, quedando apenas a un paso del podio.
                  Finalmente, Gonzalo cruzó la línea de meta en una impresionante cuarta posición, demostrando 
                  su potencial y dejando claro que este es solo el comienzo de una prometedora carrera en el cross.
                       </p>
                
            </div>
        </div>
    );
}

export default NoticiaEnSi2;
