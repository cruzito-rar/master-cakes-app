import React from 'react'
import { Link } from 'react-router-dom';

const Navbar = () => {
 return (
  <div>
   <nav className="navbar navbar-expand-md navbar-dark fixed-top text-center w-100" id="home">
    <div className="container-fluid">
     <Link className="navbar-brand" to="/" title="Master Cakes"> <img src="../logo.png" width="65px" alt="Logo"/> </Link>
     <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"> </span>
     </button>
     <div className="collapse navbar-collapse justify-content-end" id="navbarNav">
      <ul className="navbar-nav">
       <li className="nav-item"> <Link className="nav-link" aria-current="page" to="/" title="Home"> Home </Link> </li>
       <li class="nav-item dropdown">
          <a className="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false" title="Catálogo">
            Catálogo
          </a>
          <ul className="dropdown-menu border-0 text-center">
            <li> <Link className="dropdown-item" to="/online-catalogue"> Pasteles </Link></li>
            <li> <Link className="dropdown-item" to="/thematics-catalogue"> Pasteles temáticos </Link></li>
            <li> <Link className="dropdown-item" to="/customized-catalogue"> Pasteles personalizados </Link></li>
          </ul>
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
