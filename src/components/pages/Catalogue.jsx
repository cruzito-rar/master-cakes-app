import { useState, useEffect } from 'react';

const Catalogue = ({ quantity, increaseQuantity, decreaseQuantity, setSelectedCakes, selectedCakes, total, setTotal }) => {
  const [cakes, setCakes] = useState([]);

  useEffect(() => {
    fetch('cake.json')
      .then(response => response.json())
      .then(data => setCakes(data.online))
      .catch(error => console.error(error));
  }, []);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="container mt-5 pt-5 pb-5">
      <h1 className="text-center mb-5 text-white"> Pasteles </h1>
      <div className="row row-cols-1 row-cols-md-2 row-cols-lg-3 row-cols-xl-4 g-4 justify-content-center">
        {cakes.map((cake) => (
          <div key={cake.id} className="col mb-4">
            <div className="card product-card border-0">
              <img src={cake.imageUrl} className="card-img-top" alt={cake.name}/>
              <div className="container">
               <div className="row">
                <div className="col-md-6"> <h6 className="text-start pt-2"> {cake.name} </h6> </div>
                <div className="col-md-6"> <h6 className="text-start pt-2"> Precio: ${cake.price} </h6> </div>
               </div>
               <div className="row justify-content-center">

               <button
  className="btn btn-minimalista w-75"
  onClick={() => {
    const productExists = selectedCakes.find(item => item.id === cake.id);
    let updatedTotal = total;

    if (productExists) {
      const updatedCakes = selectedCakes.map(item => {
        if (item.id === cake.id) {
          const updatedQuantity = item.quantity + 1;
          updatedTotal += cake.price;
          return { ...item, quantity: updatedQuantity };
        }
        return item;
      });

      setSelectedCakes(updatedCakes);
    } else if (selectedCakes.length < 4) {
      setSelectedCakes([...selectedCakes, { ...cake, quantity: 1 }]);
      updatedTotal += cake.price;
    }

    setTotal(updatedTotal);
  }}
  disabled={selectedCakes.length >= 4}
>
  Añadir al carrito
</button>
               </div>
              </div>
              <div className="overlay rounded-top w-100">
                <h5 className="card-title text-center">{cake.name}</h5>
                <p className="card-text text-center mt-3 text-white">{cake.description}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Catalogue;