import React from 'react';
import Carousel from './carousel/carousel';
import Footer from '../footer/footer';

function Home() {
    return (
      <div className="home-principal">
        <Carousel/>
        <div className='home2'>
          <div className='home2-h3'>
            <h3>
              Inscripciones Online
            </h3>
          </div>
          <div className='home2-imagen'>
            <img></img>
          </div>
        </div>
        <Footer/>
      </div>
    );}
  
export default Home;
