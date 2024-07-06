import React from "react";
import '../App.css';
import Footer from "../footer/footer";


import Carousel1 from "./carousel1/carousel1";
import Carousel2 from "./carousel2/carousel2";
import Elemento3 from "./elemento3/elemento3";
import Elemento4 from "./elemento4/elemento4";
import Elemento5 from "./elemento5/elemento5";
import Elemento6 from "./elemento6/elemento6";
import Elemento7 from "./elemento7/elemento7";


function NuestraProfesora() {
  return (
    <div className="principalPame" >
        <Carousel1 />
        <Carousel2/>
        <Elemento3/>
        <Elemento4/>
        <Elemento5/>
        <Elemento6/>
        <Elemento7/>
         <Footer/>
    </div>
  );
}

export default NuestraProfesora;
