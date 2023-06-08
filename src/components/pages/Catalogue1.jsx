import { useState, useEffect } from 'react';

const Catalogue = ({setSelectedCakes, selectedCakes, total, setTotal }) => {
  const [cakes, setCakes] = useState([]);

  useEffect(() => {
    fetch('cake.json')
      .then(response => response.json())
      .then(data => setCakes(data.thematics))
      .catch(error => console.error(error));
  }, []);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const handleAddToCart = (cake) => {
    const productExists = selectedCakes.find((item) => item.id === cake.id);
    const updatedTotal = total + cake.price;
    const totalQuantity = selectedCakes.reduce((sum, item) => sum + item.quantity, 0);

    if (totalQuantity === 4 || (productExists && productExists.quantity === 4)) {
      // No se pueden agregar más pasteles, mostrar mensaje o tomar acción adecuada
      return;
    }

    if (productExists) {
      const updatedCakes = selectedCakes.map((item) => {
        if (item.id === cake.id) {
          const updatedQuantity = item.quantity + 1;
          return { ...item, quantity: updatedQuantity };
        }
        return item;
      });
      setSelectedCakes(updatedCakes);
    } else {
      setSelectedCakes([...selectedCakes, { ...cake, quantity: 1 }]);
    }

    setTotal(updatedTotal);
  };

  return (
    <div className="container mt-5 pt-5 pb-5">
      <h1 className="text-center mb-5 text-white"> Pasteles temáticos </h1>
      <div className="row row-cols-1 row-cols-md-2 row-cols-lg-3 row-cols-xl-4 g-4 justify-content-center">
        {cakes.map((cake) => {
          const productExists = selectedCakes.find((item) => item.id === cake.id);
          const totalQuantity = selectedCakes.reduce((sum, item) => sum + item.quantity, 0);
          
          return (
            <div key={cake.id} className="col mb-4">
              <div className="card product-card border-0">
                <img src={cake.imageUrl} className="card-img-top" alt={cake.name} />
                <div className="container">
                  <div className="row">
                    <div className="col-9">
                      <h6 className="text-start pt-2">{cake.name}</h6>
                    </div>
                    <div className="col-3">
                      <h6 className="text-end pt-2">${cake.price.toFixed(2)}</h6>
                    </div>
                  </div>
                  <div className="row justify-content-center">
                    <button
                      className="btn btn-minimalista w-75 mt-2"
                      onClick={() => handleAddToCart(cake)}
                      disabled={totalQuantity === 4 || (productExists && productExists.quantity === 4)}
                    >
                      Añadir al carrito
                    </button>
                  </div>
                </div>
                <div className="overlay rounded-top w-100">
                  <h5 className="card-title text-center">{cake.name}</h5>
                  <p className="card-text text-center text-white mt-3">{cake.description}</p>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Catalogue;
