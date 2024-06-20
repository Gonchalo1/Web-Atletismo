// Precio.js
import React from 'react';
import './precio.css';
import { Link } from 'react-router-dom';
import logo from '../imagenes/logoPrecio.png'
import Footer from '../footer/footer';

function Precio() {
    return (
        
        <div className="pagina-precios">
            <div className="contenedor-principal2">
            <h2>Precios<img src={logo} className='logo' alt='logo'/> </h2>
            
            <Link to="/contacto" className="precio">
                <div className="contenedor-flex2">
                    <div className='div1Precio'>
                        <i className="bi bi-currency-dollar"/>
                        <div className="precioEnSi">        
                            <span><h5 className='h5Precio'>7000<br/>ARS</h5></span>
                        </div>
                    </div>
                    <div className='div2Precio'>
                        <div className='informacionDias'>
                            <h4 className='h4Dias'>2 Veces por semana</h4>
                        </div>    
                    </div>
                </div>
            </Link>
            
            <Link to="/contacto" className="precio">
                <div className="contenedor-flex2">
                    <div className='div1Precio'>
                        <i className="bi bi-currency-dollar"></i>
                        <div className="precioEnSi">        
                            <span><h5 className='h5Precio'>8000<br/>ARS</h5></span>
                        </div>
                    </div>
                    <div className='div2Precio'>
                        <div className='informacionDias'>
                            <h4 className='h4Dias'>3 Veces por semana</h4>
                        </div>    
                    </div>
                </div>
            </Link>
            
            <Link to="/contacto" className="precio">
                <div className="contenedor-flex2">
                    <div className='div1Precio'>
                        <i className="bi bi-currency-dollar"></i>
                        <div className="precioEnSi">        
                            <span><h5 className='h5Precio3'>10.000<br/>ARS</h5></span>
                        </div>
                    </div>
                    <div className='div2Precio'>
                        <div className='informacionDias'>
                            <h4 className='h4Dias'>5 Veces por semana</h4>
                        </div>    
                    </div>
                    
                </div>
                
            </Link>
            </div>
            <Footer />
        </div>
        
        
    );
}

export default Precio;
