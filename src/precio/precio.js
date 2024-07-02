import React from 'react';
import '../App.css';
import { Link } from 'react-router-dom';
import logo from '../imagenes/precioImagenes/logoPrecio.png';
import Footer from '../footer/footer';

function Precio() {

    const handleClick = () => {
        alert('Envía un mensaje a PamelaMaidana@gmail.com para notificarle de que quieres entrar.');
        // Aquí puedes redirigir al usuario a la sección de contacto usando programación imperativa
        // window.location.href = '/contacto';
    };

    return (
        <div className="pagina-precios">
            <div className="contenedor-principal2">
                <h2>Precios<img src={logo} className='logo' alt='logo'/> </h2>
                
                <div onClick={handleClick} className="precio">
                    <Link to="/contacto" className="contenedor-flex2">
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
                    </Link>
                </div>
                
                <div onClick={handleClick} className="precio">
                    <Link to="/contacto" className="contenedor-flex2">
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
                    </Link>
                </div>
                
                <div onClick={handleClick} className="precio">
                    <Link to="/contacto" className="contenedor-flex2">
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
                    </Link>
                </div>
                
            </div>
            <Footer />
        </div>
    );
}

export default Precio;
