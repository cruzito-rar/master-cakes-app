import React, {useEffect} from 'react'

const Return = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div>
    <div className="container my-5">
     <div className="row justify-content-center">
      <div className="col-md-9">
       <h1 className="text-center mt-5 my-5 text-white"> Política de devoluciones </h1>
       <p className="mt-5 pt-5 mb-5"> Master Cakes establece ciertas condiciones para poder admitir un reclamo de sus clientes. En primer lugar, el producto debe ser rechazado en el momento de la entrega debido a algún desperfecto. Si un cliente presenta un reclamo, puede hacerlo por correo electrónico, teléfono o en persona en las oficinas de la pastelería. El plazo para presentar un reclamo es de 24 horas después de haber recibido el producto. Si se cumplen estas condiciones, la Pastelería Master Cakes resolverá el reclamo en un plazo máximo de 48 horas. <br /> <br />

En caso de que sea necesaria una devolución del producto, el cliente debe asegurarse de que el producto se encuentre en las mismas condiciones en las que fue entregado, es decir, empacado en su caja o depósito correspondiente y completo. La Pastelería Master Cakes se hace responsable del costo de la devolución de los productos y entregará el producto sustituto en sus instalaciones. Además, el cargo por trámite de devolución es de $0.00 y el tiempo de devolución es de 24 horas a partir de la resolución de devolver. <br />
Es importante mencionar que si el producto se daña debido a una mala manipulación por parte del cliente, la Pastelería Master Cakes puede repararlo por un costo variable de $3.00, dependiendo del estado del producto. Por lo tanto, es necesario que el cliente tenga precaución al manipular el producto para evitar daños y tener que incurrir en costos adicionales. </p>
      </div>
     </div>
    </div>
   </div>
  );
}

export default Return;