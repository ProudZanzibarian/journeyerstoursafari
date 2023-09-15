import React from 'react';

const Testimonial: React.FC = () => {

  return (
<div className="testimonial-section" style={{backgroundImage: "url(assets/images/img23.jpg);"}}>
<div className="container">
   <div className="row">
      <div className="col-lg-10 offset-lg-1">
         <div className="testimonial-inner testimonial-slider">
            <div className="testimonial-item text-center">
               <figure className="testimonial-img">
                  <img src="assets/images/img20.jpg" alt=""/>
               </figure>
               <div className="testimonial-content">
                  <p>"  "</p>
                  <cite>
                     Salum Said
                     <span className="company">Tour Guider</span>
                  </cite>
               </div>
            </div>
         </div>
      </div>
   </div>
</div>
</div>
  );
};

export default Testimonial;