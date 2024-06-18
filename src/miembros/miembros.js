import React from 'react';
import './miembros.css';
import Diez from '../imagenes/10.jpeg'

function Miembros() {
    return (
        <div className="principal">
            <h2 className='h2'><strong>Miembros del equipo</strong></h2>
            <div className="grilla">
                <a href="https://instagram.com/brian_cardozo11" target="_blank" rel="noopener noreferrer" className="link-contenido">
                    <div className="contenido2">
                        <img src={Diez} alt="Brian Cardozo" className="miembro-img" />
                        <div className="texto">
                            <p className="nombre">Brian Cardozo</p>
                            <p className="instagram">@brian_cardozo11</p>
                        </div>
                    </div>
                </a>
                {/* Añade más miembros aquí */}
            </div>
        </div>
    );
}

export default Miembros;
