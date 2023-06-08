import React, { useEffect } from "react";
import '../styles/About.css';

const About = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

 return (
  <div className="container my-5">
   <div className="row justify-content-center">
    <div className="col-md-7">
     <h1 className="text-center mt-5 text-white"> Sobre nosotros </h1>
      <p className="text text-center text-white"> “Del horno a tu mesa, el mejor sabor en cada pieza” </p>
      <p className="text-none-v"> La empresa nació en el 27 de mayo del año 2000 en una repostería  antiguamente llamada hermanos cake ubicada en La Libertad. Gracias a  la idea de los dos hermanos que buscaban una forma más rápida de  producir sus pasteles a los clientes, con su mismo exquisito sabor. Uno  de los hermanos, José, tenía conocimiento en mecánica y quiso crear  una máquina que pudiera ayudarles en las mezclas de sus ingredientes y  ponerlos en el molde. <br/>
      Al cabo de 5 años, para poder perfeccionar la máquina productora de  pasteles, se realizó una gran inversión, después que sus pedidos de  pasteles crecieran y la gente pedía a por mayor, decidieron unirse a un  grupo de 8 jóvenes quienes mejoraron aun más la máquina e impulsaron  el negocio, convirtiéndolo en una empresa de mayor renombre, debido a  esto se optó por contratar más personas que les ayudarán, compraron  un local en San Salvador donde le cambiaron el nombre a su pastelería a  Master Cakes, empezando a ser conocidos nacionalmente.
      <br/> <br/>
      En nuestra pastelería, creemos que cada postre debe ser una experiencia única e inolvidable para nuestros clientes. Por eso, estamos comprometidos en ofrecer un servicio personalizado y cercano, y en escuchar las necesidades y deseos de nuestros clientes para crear los postres perfectos para cada ocasión. Estamos orgullosos de ser una pastelería que se preocupa por la calidad y el sabor, y esperamos poder compartir nuestra pasión por la repostería con todos nuestros clientes. </p>
    </div>
   </div>
  </div>
 );
};

export default About;
