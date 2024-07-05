import React from "react";
import '../App.css';
import Footer from "../footer/footer";
import fondo from '../imagenes/fam.jpg'; // Importa la imagen
import Carousel1 from "./carousel1/carousel1";
import Carousel2 from "./carousel2/carousel2";
import Elemento3 from "./elemento3/elemento3";
import Elemento4 from "./elemento4/elemento4";


function NuestraProfesora() {
  return (
    <div className="principalPame" style={{ backgroundImage: `url(${fondo})` }}>
        <Carousel1 />
        <Carousel2/>
        <Elemento3/>
        <Elemento4/>
         <Footer/>
    </div>
  );
}

export default NuestraProfesora;
