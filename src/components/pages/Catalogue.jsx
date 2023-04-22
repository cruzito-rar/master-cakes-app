import { useState, useEffect } from 'react';

const Catalogue = () => {
  const cake = [
    {
      id: 1,
      name: "Pastel de chocolate",
      imageUrl: "https://kathleenshop.com/wp-content/uploads/2021/06/Black-Foret-Cake-500gms-Rs480.png",
      description: "Este delicioso pastel está hecho con una suave y esponjosa masa de chocolate, cubierta con una rica y cremosa ganache de chocolate oscuro."
    },
    {
      id: 2,
      name: "Pastel de queso",
      imageUrl: "https://angellinares.es/137168-thickbox_default/tarta-queso-crema-premium-215kg-179g.jpg",
      description: "Delicioso postre clásico de la repostería, con una base de galleta crujiente y una suave y cremosa mezcla de queso crema, huevos, azúcar y vainilla."
    },
    {
      id: 3,
      name: "Pastel de 3 leches",
      imageUrl: "https://static.wixstatic.com/media/ee6e5b_8a62aa980f634353b5569bc1c1239310~mv2.png/v1/fill/w_1474,h_1474,al_c/ee6e5b_8a62aa980f634353b5569bc1c1239310~mv2.png",
      description: "Este pastel latinoamericano es una deliciosa combinación de texturas y sabores. La base esponjosa se empapa en una mezcla de tres tipos de leche: leche evaporada, leche condensada y crema de leche."
    },
    {
      id: 4,
      name: "Pastel de fresa",
      imageUrl: "https://www.enchantedcakesandtreats.com/uploads/1/3/1/3/131310146/s200171920524587930_p146_i1_w1000.png",
      description: "Si buscas un pastel fresco y afrutado, este pastel de fresa es perfecto para ti. La base rellena con una capa generosa de mermelada de fresa fresca, y cubierta con una capa espesa de crema de queso."
    },
    {
      id: 5,
      name: "Pastel de melocotón",
      imageUrl: "https://pasteleriamilano.com/wp-content/uploads/2017/04/Melocoton-con-Fresas.png",
      description: "Un pastel suave y esponjoso con un sabor dulce y afrutado a melocotón. La base esponjosa está rellena con trozos jugosos de melocotón y cubierta con una capa de crema batida. Perfecto para disfrutar en una tarde u ocasión casual."
    }
  ];

  return (
    <div className="container mt-5 mb-5 pt-5 pb-5">
      <div className="row row-cols-1 row-cols-md-2 row-cols-lg-5 g-4">
        {cake.map((product, index) => (
          <div key={index} className="col mb-4">
            <div className="card product-card">
              <img src={product.imageUrl} className="card-img-top" alt={product.name} />
              <h6 className="text-center"> {product.name} </h6>
              <div className="overlay rounded w-100">
                <h5 className="card-title text-center">{product.name}</h5>
                <p className="card-text text-center mt-5 text-white">{product.description}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Catalogue;
