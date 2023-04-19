import { useState, useEffect } from 'react';

const Catalogue = () => {
 const [cakesData, setCakesData] = useState([]);

 useEffect(() => {
  fetch('https://api.spoonacular.com/recipes/search?apiKey=19e753e1966842e0a45772ea4bf5420e&query=cake')
   .then(response => response.json())
   .then(data => {
    console.log('Datos obtenidos: ', data.results);
     setCakesData(data.results);
    })
    .catch(error => {
     console.error('Error al obtener datos:', error);
    });
 }, []);

 return (
  <div>
   <div className="container mt-5 pt-5">
    <div className="row row-cols-1 row-cols-md-2 row-cols-lg-5 g-4">
     {cakesData.map((product, index) => (
      <div key={index} className="col mb-4">
       <div className="card product-card">
        <img src={product.image} className="card-img-top" alt={product.title} />
        <div className="overlay">
         <h5 className="card-title">{product.title}</h5>
         <p className="card-text">{product.summary}</p>
        </div>
       </div>
      </div>
     ))}
    </div>
   </div>
  </div>
 );
}

export default Catalogue;
