import React, {useEffect} from 'react'

const Mision = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div>
    <div className="container my-5">
     <div className="row justify-content-center">
      <div className="col-md-9">
       <div className="card mision rounded mt-5 my-5 ">
        <h1 className="my-3"> Misión </h1>
        <p className="text-start mb-4 text-none-v">  Ofrecer productos de repostería de alta calidad, utilizando tanto ingredientes frescos y naturales como la mejor implementación de maquinarías posible para satisfacer las necesidades y gustos de nuestros clientes. Nos comprometemos a innovar constantemente y a mejorar nuestros procesos para ofrecer productos frescos, deliciosos y nutritivos. Además, nos esforzamos por ofrecer un excelente servicio al cliente, entregando nuestros productos a tiempo y asegurando la satisfacción del cliente en cada interacción. </p>
       </div>

       <div className="card mision mt-3 rounded mt-4 my-5">
        <h1> Visión </h1>
        <p className="text-start text-none-v"> Convertirnos en la empresa líder en producción y distribución de repostería a nivel regional. Nos esforzamos por mantener la calidad y la frescura de nuestros productos, así como por ofrecer una amplia variedad de opciones para satisfacer los gustos y necesidades de nuestros clientes. Además, nos comprometemos a ser un negocio socialmente responsable y sostenible, minimizando nuestro impacto ambiental. Queremos ser reconocidos como la mejor opción para aquellos que buscan productos de repostería de alta calidad y un servicio excepcional. </p>
       </div>
      </div>
     </div>
    </div>
   </div>
  );
}

export default Mision;