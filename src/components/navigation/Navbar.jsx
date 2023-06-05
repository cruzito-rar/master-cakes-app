import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = ({ quantity, decreaseQuantity, selectedCakes, setSelectedCakes, total, setTotal}) => {
 const cartQuantity = selectedCakes.reduce((total, cake) => total + cake.quantity, 0);

 const getTotalQuantity = () => {
  const totalQuantity = selectedCakes.reduce((total, item) => total + item.quantity, 0);
  return totalQuantity;
 };

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
       <li className="nav-item dropdown">
          <a className="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false" title="Catálogo">
            Catálogo
          </a>
          <ul className="dropdown-menu border-0 text-center">
            <li> <Link className="dropdown-item" to="/online-catalogue"> Pasteles </Link> </li>
            <li> <Link className="dropdown-item" to="/thematics-catalogue"> Pasteles temáticos </Link> </li>
            <li> <Link className="dropdown-item" to="/customized-catalogue"> Pasteles personalizados </Link> </li>
          </ul>
        </li>
       <li className="nav-item"> <Link class="nav-link" to="/about" title="Nosotros"> Nosotros </Link> </li>
       <li className="nav-item"> <a class="nav-link" href="#footer" title="Contáctanos"> Contáctanos </a> </li>
       {/* <li class="nav-item"> <a class="nav-link" href="#footer" title="Acceder"> Acceder </a> </li> */}
       <li className="nav-item dropdown">
        <a className="nav-link nav-link dropdown-toggle" data-bs-toggle="dropdown" aria-expanded="false" href="#" title="Carrito">
          <i class="fas fa-shopping-cart"> </i>
        </a>
        <div className="circle justify-content-center"> <h6 id="quantity"> {quantity} </h6> </div>
        <ul className="dropdown-menu dropdown-menu-end bg-white" style={{"width": "385px"}}>
         {selectedCakes.length > 0 ? (
          selectedCakes.map((cake) => (
            <li key={cake.id}>
              <div className="dropdown-item">
                <div className="row align-items-center">
                  <div className="col">
                    <img src={cake.imageUrl} alt={cake.name} className="dropdown-img" width={"85px"} height={"80px"} />
                  </div>
                  <div className="col-6">
                    <h6 className="dropdown-name text-start mt-3"> <strong> {cake.name} </strong> </h6>
                    <p className="dropdown-price text-start m-0"> <strong> Precio: </strong> ${cake.price} <br /> <strong> Cantidad: </strong> {getTotalQuantity()} </p>
                  </div>
                  <div className="col-2">
                    <button className="btn btn-danger" onClick={() => {
                      decreaseQuantity();
                      setSelectedCakes(selectedCakes.filter((item) => item.id !== cake.id));
                      setTotal(total - cake.price);
                    }}>
                      <i className="fas fa-trash"></i>
                    </button>
                  </div>
                </div>
              </div>
            </li>
          ))    
         ) : (
          <li>
           <div className="dropdown-item"> No hay productos en el carrito. </div>
          </li>
         )}
         
         {selectedCakes.length > 0 && (
          <li>
           <div className="dropdown-item">
            <h6 className="text-start"> <strong> Total: </strong> ${selectedCakes.reduce((total, cake) => total + cake.price, 0).toFixed(2)}</h6>
           </div>
          </li>
         )}
         
         {selectedCakes.length > 0 ? (
          <li>
           <div className="dropdown-item text-center">
            <button className="btn btn-minimalista w-75" id="buy"> Confirmar compra </button>
           </div>
          </li>
         ) : (
          <div></div>
         )}
        </ul>
       </li>
      </ul>
     </div>
    </div>
   </nav>
  </div>
 );
}

export default Navbar;