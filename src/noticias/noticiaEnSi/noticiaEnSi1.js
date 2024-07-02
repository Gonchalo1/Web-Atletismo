// NoticiaEnSi1.js
import React from 'react';
import '../../App.css';
import { useNavigate } from 'react-router-dom'; 
import Uno from '../../imagenes/4.jpeg'

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
                <h3><strong>El equipo de running se juntó a festejar el 25 de mayo post-carrera maya</strong></h3>
                <i>25 de Mayo de 2024</i>
                <p className='parrafo-especial'>
                    El pasado 25 de mayo, tras una exitosa participación en la Carrera Maya, el equipo de
                     running se reunió para una festiva celebración en la casa de Sandra. Esta jornada, 
                     cargada de alegría y camaradería, se convirtió en una memorable ocasión para todos 
                     los miembros del equipo.Desde el mediodía, el cálido hogar de Sandra se llenó de risas
                      y conversaciones animadas.
                        </p>
                <img src={Uno} alt='Foto antes de la despedida'></img>
                <i>RP RUNNING TEAM</i>
                <h4>La Cena</h4>
                <p>
                    La comida se sirvió al estilo familiar, con grandes fuentes en el centro de la mesa, de las que
                     cada uno se servía generosamente. El locro, acompañado de pan casero y un toque de salsa picante,
                      no solo sació el hambre de los corredores, sino que también les brindó un momento para relajarse
                       y disfrutar después del esfuerzo físico de la carrera.
                       </p>
                
            </div>
        </div>
    );
}

export default NoticiaEnSi1;
