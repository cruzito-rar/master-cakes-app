import { useState, useEffect } from 'react';

const Catalogue = () => {
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

  return (
    <div className="container mt-5 pt-5 pb-5">
      <h1 className="text-center mb-5 text-white"> Pasteles temáticos </h1>
      <div className="row row-cols-1 row-cols-md-2 row-cols-lg-5 g-4">
        {cakes.map((cake) => (
          <div key={cake.id} className="col mb-4">
            <div className="card product-card border-0">
              <img src={cake.imageUrl} className="card-img-top" alt={cake.name} />
              <h6 className="text-center pt-2"> {cake.name} </h6>
              <div className="overlay rounded w-100">
                <h5 className="card-title text-center">{cake.name}</h5>
                <p className="card-text text-center mt-5 text-white">{cake.description}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Catalogue;
