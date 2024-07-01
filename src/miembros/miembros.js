import React from 'react';
import './miembros.css';
import Footer from '../footer/footer';

import Diez from '../imagenes/10.jpeg'; 
import Once from '../imagenes/11.jpeg'; 
import Doce from '../imagenes/12.jpeg'; 
import Trece from '../imagenes/13.jpeg'; 
import Catorce from '../imagenes/14.jpeg'; 
import Quince from '../imagenes/15.jpeg'; 
import Dieciseis from '../imagenes/16.jpeg'; 
import Diecisiete from '../imagenes/17.jpeg'; 
import Dieciocho from '../imagenes/18.jpeg'; 
import Diecinueve from '../imagenes/19.jpeg'; 
import Veinte from '../imagenes/20.jpeg'; 
import Veintiuno from '../imagenes/21.jpeg'; 
import Veintidos from '../imagenes/22.jpeg'; 

function Miembros() {
    return (
       <div className="principal">
    <div className="contenedor">
        <h2 className="h2"><strong>Miembros del equipo</strong></h2>
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
                <a href="https://instagram.com/juan23_" target="_blank" rel="noopener noreferrer" className="link-contenido">
                    <div className="contenido2">
                        <img src={Once} alt="Juan Perez" className="miembro-img" />
                        <div className="texto">
                            <p className="nombre">Noelia Perez</p>
                            <p className="instagram">@noe..l</p>
                        </div>
                    </div>
                </a>
                <a href="https://instagram.com/ana.garcia" target="_blank" rel="noopener noreferrer" className="link-contenido">
                    <div className="contenido2">
                        <img src={Doce} alt="Ana Garcia" className="miembro-img" />
                        <div className="texto">
                            <p className="nombre">Melina Sandobal</p>
                            <p className="instagram">@meli90_</p>
                        </div>
                    </div>
                </a>
                <a href="https://instagram.com/carlos_m" target="_blank" rel="noopener noreferrer" className="link-contenido">
                    <div className="contenido2">
                        <img src={Trece} alt="Carlos Mendoza" className="miembro-img" />
                        <div className="texto">
                            <p className="nombre">Carlos Mendoza</p>
                            <p className="instagram">@carlos_m</p>
                        </div>
                    </div>
                </a>
                {/* Añade más miembros aquí */}
                <a href="https://instagram.com/ana.garcia" target="_blank" rel="noopener noreferrer" className="link-contenido">
                    <div className="contenido2">
                        <img src={Catorce} alt="Ana Garcia" className="miembro-img" />
                        <div className="texto">
                            <p className="nombre">Ana Garcia</p>
                            <p className="instagram">@ana.garcia</p>
                        </div>
                    </div>
                </a>
                <a href="https://instagram.com/ana.garcia" target="_blank" rel="noopener noreferrer" className="link-contenido">
                    <div className="contenido2">
                        <img src={Quince} alt="Ana Garcia" className="miembro-img" />
                        <div className="texto">
                            <p className="nombre">Dario</p>
                            <p className="instagram">@Dario.garcia</p>
                        </div>
                    </div>
                </a>
                <a href="https://instagram.com/ana.garcia" target="_blank" rel="noopener noreferrer" className="link-contenido">
                    <div className="contenido2">
                        <img src={Dieciseis} alt="Ana Garcia" className="miembro-img" />
                        <div className="texto">
                            <p className="nombre">Ale</p>
                            <p className="instagram">@ale.garcon</p>
                        </div>
                    </div>
                </a>
                <a href="https://instagram.com/ana.garcia" target="_blank" rel="noopener noreferrer" className="link-contenido">
                    <div className="contenido2">
                        <img src={Diecisiete} alt="Ana Garcia" className="miembro-img" />
                        <div className="texto">
                            <p className="nombre">Cristiano Ronaldo</p>
                            <p className="instagram">@cris</p>
                        </div>
                    </div>
                </a>
                <a href="https://instagram.com/ana.garcia" target="_blank" rel="noopener noreferrer" className="link-contenido">
                    <div className="contenido2">
                        <img src={Dieciocho} alt="Ana Garcia" className="miembro-img" />
                        <div className="texto">
                            <p className="nombre">Messi</p>
                            <p className="instagram">@laPulga</p>
                        </div>
                    </div>
                </a>
                <a href="https://instagram.com/ana.garcia" target="_blank" rel="noopener noreferrer" className="link-contenido">
                    <div className="contenido2">
                        <img src={Diecinueve} alt="Ana Garcia" className="miembro-img" />
                        <div className="texto">
                            <p className="nombre">San Martin</p>
                            <p className="instagram">@cabral</p>
                        </div>
                    </div>
                </a>
                <a href="https://instagram.com/ana.garcia" target="_blank" rel="noopener noreferrer" className="link-contenido">
                    <div className="contenido2">
                        <img src={Veinte} alt="Ana Garcia" className="miembro-img" />
                        <div className="texto">
                            <p className="nombre">Usain bolt</p>
                            <p className="instagram">@ana.garcia</p>
                        </div>
                    </div>
                </a>
                <a href="https://instagram.com/ana.garcia" target="_blank" rel="noopener noreferrer" className="link-contenido">
                    <div className="contenido2">
                        <img src={Veintiuno} alt="Ana Garcia" className="miembro-img" />
                        <div className="texto">
                            <p className="nombre">Shaggy</p>
                            <p className="instagram">@ana.garcia</p>
                        </div>
                    </div>
                </a>
                <a href="https://instagram.com/ana.garcia" target="_blank" rel="noopener noreferrer" className="link-contenido">
                    <div className="contenido2">
                        <img src={Veintidos} alt="Ana Garcia" className="miembro-img" />
                        <div className="texto">
                            <p className="nombre">Chikchogen</p>
                            <p className="instagram">@ana.garcia</p>
                        </div>
                    </div>
                </a>
            </div>
            <Footer/>
        </div>
        </div>
    );
}

export default Miembros;
