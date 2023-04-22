import React from 'react'
import { Link } from 'react-router-dom';

const Navbar = () => {
 return (
  <div>
   <nav className="navbar navbar-expand-md navbar-dark fixed-top text-center w-100" id="home">
    <div className="container-fluid">
     <a className="navbar-brand" href="#" title="Master Cakes"> <img src="../logo.png" width="50px" alt="Logo"/> </a>
     <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"> </span>
     </button>
     <div className="collapse navbar-collapse justify-content-end" id="navbarNav">
      <ul className="navbar-nav">
       <li className="nav-item"> <Link className="nav-link" aria-current="page" to="/" title="Home"> Home </Link> </li>
       <li className="nav-item"> <Link className="nav-link" to="/catalogue" title="Catalogo"> Catálogo </Link>
       </li>
       <li className="nav-item"> <Link className="nav-link" to="/about" title="Nosotros"> Nosotros </Link> </li>
       <li className="nav-item"> <a className="nav-link" href="#footer" title="Contáctanos"> Contáctanos </a> </li>
       <li className="nav-item"> <Link className="nav-link" to="https://www.instagram.com/master_cake_oficial" title="Instagram"> <i className="fab fa-instagram"> </i> </Link> </li>
      </ul>
     </div>
    </div>
   </nav>
  </div>
 );
}

export default Navbar;
