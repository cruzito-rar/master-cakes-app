import React from 'react';
import { Link } from 'react-router-dom';
import '../styles/Footer.css';

const Footer = () => {
 return (
  <footer className="text-white mt-5" id="footer">
   <div className="container">
    <div className="row d-flex align-items-center">
      <div className="col-12 col-md-3 mb-3 mb-md-0 text-center">
        <img src="../logo.png" width="120px" alt="Master Cakes Logo"/>
      </div>
      <div className="col-12 col-md-4 mb-3 mb-md-0 text-center">
        <h3>Contáctanos</h3>
        <ul className="list-unstyled">
          <li> <i className="fas fa-envelope"> </i> Correo: <Link to="mailto:pedidosmc@gmail.com"> pedidosmc@gmail.com </Link> </li>
          <li> <i className="fas fa-phone"> </i> Teléfono para empresas: <Link to="tel:+503 1234-5678"> +503 2274-5218 </Link> </li>
          <li> <i className="fas fa-map-marker-alt"> </i> Dirección: Calle Gerardo Barrios y Ave. Simón Bolivar No. 21-7, La Libertad </li>
        </ul>
      </div>
      <div className="col-12 col-md-3 mb-3 mb-md-0 text-center">
        <h3> Información </h3>
        <ul className="list-unstyled">
          <li> <Link to="/mision-vision"> Misión y Visión </Link> </li>
          <li> <Link to="/shipments-policy"> Política de envíos </Link> </li>
          <li> <Link to="/privacy-policy"> Política de privacidad </Link> </li>
          <li> <Link to="/return-policy"> Política de devoluciones </Link> </li>
        </ul>
      </div>
      <div className="col-md-2 mb-3 mb-md-0 text-center">
        <ul className="list-unstyled">
          <h3> Horarios </h3>
          <li> <i className="fas fa-clock"> </i> Lunes - Sábado <br/> 8:00 am - 6:00 pm <br/> <br/>
          <i className="fas fa-clock"> </i> Domingo: <br/> 8:00 am - 2:00 pm </li>
        </ul>
      </div>
    </div>
   </div>
   <div>
   <hr/>
    <p className="text-center pb-0"> &#169; Copyright 2023. Master cakes pastelería - El Salvador. Todos los derechos reservados.
    </p>
   </div>
  </footer>
 );
}

export default Footer;
