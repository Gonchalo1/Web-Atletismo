import React from 'react';
import { Link } from 'react-router-dom';
import Carousel from './carousel/carousel';
import Footer from '../footer/footer';
import Carousel2 from './carousel2/carousel2';
import PrecioFondo from '../imagenes/homeImagenes/Precio.png';
import './home.css';
import ProfesoraHome from './profesoraHome/proferosa';
import InstagramPost from './post/post';

function Home() {
  return (
    <div className="home-principal">
      <Carousel />
      <Link to="/precio" className="home2-link">
        <div className='home2'>
          <div className='home2-h3'>
            <h3>Inscripciones Online</h3>
          </div>
          <div className='home2-imagen'>
            <img src={PrecioFondo} alt="Inscripciones Online" />
          </div>
        </div>
      </Link>
      <Carousel2 />
      <ProfesoraHome/>
      
        <InstagramPost />
      
      
      <Footer />
    </div>
  );
}

export default Home;
