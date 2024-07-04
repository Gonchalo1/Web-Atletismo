import React from "react";
import '../App.css';
import Footer from "../footer/footer";
import fondo from '../imagenes/fam.jpg'; // Importa la imagen
import Carousel1 from "./carousel1/carousel1";
import Carousel2 from "./carousel2/carousel2";


function NuestraProfesora() {
  return (
    <div className="principalPame" style={{ backgroundImage: `url(${fondo})` }}>
        <Carousel1 />
        <Carousel2/>
         <Footer/>
    </div>
  );
}

export default NuestraProfesora;
