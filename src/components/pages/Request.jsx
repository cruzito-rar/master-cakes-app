import React, {useEffect} from 'react';
import '../styles/Request.css';

const Request = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
   <div className="text-white" id="contact">
    <h1 className="text-center text-white mt-5 pt-5"> Solicita tu pan de pastel </h1>
     <div className="contact_container mt-4">
      <div className="form_container">
       <h3 className="fw-bold"> Su Mensaje </h3>
       <form action="#" className="contact_form" id="contact_form">
        <input type="text" name="username" id="username" placeholder="Your name" required />
        <input type="email" name="email" id="email" placeholder="E-mail (username@domain.com)" required />
        <textarea name="message" id="message" cols="30" rows="10" placeholder="Your message here" required></textarea>
        <input className="text-white btn-minimalista" type="submit" value="Send message" />
       </form>
      </div>
      <div className="map">
      <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d294919.64172042813!2d-89.34718695588452!3d13.781822242595675!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8f632379f72eb98f%3A0xc2114cd30ea96124!2sLa%20Libertad!5e0!3m2!1ses!2ssv!4v1682554838368!5m2!1ses!2ssv" width="600" height="450" style={{border:0}}></iframe>
      </div>
     </div>
    </div>
  );
};

export default Request;