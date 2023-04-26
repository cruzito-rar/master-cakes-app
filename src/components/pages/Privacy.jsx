import React, {useEffect} from 'react'

const Privacy = () => {
 useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  
 return (
 <div>
  <div className="container my-5">
   <div className="row justify-content-center">
    <div className="col-md-9">
     <h1 className="text-center mt-5 my-5 text-white"> Política de privacidad </h1>
     <p className="mt-5 pt-5 mb-5">
   Para utilizar los servicios ofrecidos por Pastelería Master Cakes, los clientes deberán facilitar determinados datos de carácter personal. Su información personal se procesa y almacena en servidores o medios magnéticos que mantienen altos estándares de seguridad y protección tanto física como tecnológica. <br /> <br /> Pastelería Master Cakes tomará las medidas que estén a su alcance para resguardar la privacidad de la información de los clientes. Por lo tanto, no compartirá la información personal sea a manera onerosa o gratuita, a excepción de las maneras establecidas en el presente documento. En caso que terceras personas logren acceder a alguna información de manera ilegítima, Pastelería Master Cakes no se hace responsable por el uso de la información. <br /> <br />  Pastelería Master Cakes cooperará con las autoridades judiciales o administrativas para garantizar el fiel cumplimiento a la ley y con el propósito de salvaguardar la integridad y la seguridad de la sociedad y la de sus clientes. Por lo tanto, esta podrá proporcionar información personal de sus usuarios a petición de cualquier autoridad para efectos de sus investigaciones en casos como: protección de derechos de propiedad industrial e intelectual, prevención del fraude y otras materias, y por su parte, el usuario autoriza a Pastelería Master Cakes para que brinde la información que a su discreción estime pertinentes para el fiel cumplimiento de la ley. </p>
    </div>
   </div>
  </div>
 </div>
 );
}

export default Privacy;