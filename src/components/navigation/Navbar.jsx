import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = ({ selectedCakes, setSelectedCakes, total, setTotal }) => {
  const getTotalQuantity = () => {
    const totalQuantity = selectedCakes.reduce((total, item) => total + item.quantity, 0);
    return totalQuantity;
  };

  const handleRemoveCake = (cake) => {
    setSelectedCakes((prevSelectedCakes) => {
      const updatedCakes = prevSelectedCakes.map((item) => {
        if (item.id === cake.id) {
          item.quantity -= 1;
          setTotal((prevTotal) => prevTotal - cake.price);
        }
        return item;
      });
      return updatedCakes.filter((item) => item.quantity > 0);
    });
  };

  return (
    <div>
      <nav className="navbar navbar-expand-md navbar-dark fixed-top text-center w-100" id="home">
        <div className="container-fluid">
          <Link className="navbar-brand" to="/" title="Master Cakes">
            <img src="../logo.png" width="65px" alt="Logo" />
          </Link>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarNav"
            aria-controls="navbarNav"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"> </span>
          </button>
          <div className="collapse navbar-collapse justify-content-end" id="navbarNav">
            <ul className="navbar-nav">
            <li className="nav-item">
                <Link className="nav-link" aria-current="page" to="/" title="Home">
                  Home
                </Link>
              </li>
              <li className="nav-item dropdown">
                <a
                  className="nav-link dropdown-toggle"
                  href="#"
                  role="button"
                  data-bs-toggle="dropdown"
                  aria-expanded="false"
                  title="Catálogo"
                >
                  Catálogo
                </a>
                <ul className="dropdown-menu border-0 text-center">
                  <li>
                    <Link className="dropdown-item" to="/online-catalogue">
                      Pasteles
                    </Link>
                  </li>
                  <li>
                    <Link className="dropdown-item" to="/thematics-catalogue">
                      Pasteles temáticos
                    </Link>
                  </li>
                  <li>
                    <Link className="dropdown-item" to="/customized-catalogue">
                      Pasteles personalizados
                    </Link>
                  </li>
                </ul>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/about" title="Nosotros">
                  Nosotros
                </Link>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#footer" title="Contáctanos">
                  Contáctanos
                </a>
              </li>
              <li className="nav-item dropdown">
                <a
                  className="nav-link nav-link dropdown-toggle"
                  data-bs-toggle="dropdown"
                  aria-expanded="false"
                  href="#"
                  title="Carrito"
                >
                  <i className="fas fa-shopping-cart"> </i>
                </a>
                <div className="circle justify-content-center">
                  <h6 id="quantity"> {getTotalQuantity()} </h6>
                </div>
                <ul className="dropdown-menu dropdown-menu-end bg-white" style={{ width: '385px' }}>
                  {selectedCakes.length > 0 ? (
                    selectedCakes.map((cake) => (
                      <li key={cake.id}>
                        <div className="dropdown-item">
                          <div className="row align-items-center">
                            <div className="col">
                              <img
                                src={cake.imageUrl}
                                alt={cake.name}
                                className="dropdown-img"
                                width={'85px'}
                                height={'80px'}
                              />
                            </div>
                            <div className="col-6">
                              <h6 className="dropdown-name text-start mt-3">
                                <strong> {cake.name} </strong>
                              </h6>
                              <p className="dropdown-price text-start m-0">
                                <strong> Precio: </strong> ${cake.price} <br />
                                <strong> Cantidad: </strong> {cake.quantity}
                              </p>
                            </div>
                            <div className="col-2">
                              <button className="btn btn-danger" onClick={() => handleRemoveCake(cake)}>
                                <i className="fas fa-minus"></i>
                              </button>
                            </div>
                          </div>
                        </div>
                      </li>
                    ))
                  ) : (
                    <li>
                      <div className="dropdown-item text-black"> No hay productos en el carrito. </div>
                    </li>
                  )}

                  {selectedCakes.length > 0 && (
                    <li>
                      <div className="dropdown-item">
                        <h6 className="text-start">
                          Total: ${total.toFixed(2)}
                        </h6>
                      </div>
                      <div className="dropdown-item text-center">
                        <button className="btn btn-minimalista">Confirmar compra</button>
                      </div>
                    </li>
                  )}
                </ul>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
