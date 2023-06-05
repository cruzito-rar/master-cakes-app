import React, {useEffect} from 'react'

const Shipments = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div>
    <div className="container my-5">
     <div className="row justify-content-center">
      <div className="col-md-9">
       <h1 className="text-center mt-5 my-5 text-white"> Política de envíos </h1>
       <p className="mt-5 pt-5 mb-5"> La pastelería Master Cakes ofrece un servicio de entrega a nivel nacional. El costo del envío será de $2.50 por pedido, el cual puede variar dependiendo de la distancia de destino en el cual se entregará.
        
        Nos comprometemos a entregar los pedidos en un plazo máximo de 24 horas después de realizada la orden. Si el pedido se realiza después de las 2:30 pm, la entrega se realizará al día siguiente. Las entregas se realizarán los días Lunes, Viernes, Sábados y Domingos en horarios de 10:00 am a 12:00 md. Cualquier pedido realizado fuera de estos horarios se entregará en el siguiente día hábil. <br/> <br/>
        
        El pago se realizará a través de la plataforma en línea de la pastelería, utilizando tarjeta de crédito o débito. También se aceptará pago en efectivo al momento de la entrega. Garantizamos una entrega segura, cumpliendo con todas las medidas de higiene necesarias para proteger la salud de nuestros clientes y trabajadores. <br/>
        
        Queremos destacar que Master Cakes no realizará entregas en días festivos o feriados, a menos que se haya acordado previamente con el cliente. También nos reservamos el derecho de rechazar pedidos en caso de no contar con la disponibilidad necesaria para cumplir con los plazos de entrega. <br/> <br/>
        
        Esperamos poder ofrecerte nuestro servicio de entrega de la mejor manera posible y que disfrutes de nuestros deliciosos productos. ¡Gracias por confiar en Master Cakes! </p>
      </div>
     </div>
    </div>
   </div>
  );
}

export default Shipments;