import React from 'react';
import '../styles/Request.css';

const Request = () => {

  return (
   <div className="text-white" id="contact">
    <h5 className="text-center fw-bold mt-5 pt-5"> Solicita tu pan de pastel </h5>
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
       <iframe src="https://www.google.com/maps/embed?pb=!1m14!1m12!1m3!1d73757.93698706181!2d-89.22048213978817!3d13.692747932243856!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!5e0!3m2!1ses!2ssv!4v1681339476258!5m2!1ses!2ssv" style={{ border: 0 }} allowFullScreen={true} loading="lazy" referrerPolicy="no-referrer-when-downgrade"> </iframe>
      </div>
     </div>
    </div>
  );
};

export default Request;