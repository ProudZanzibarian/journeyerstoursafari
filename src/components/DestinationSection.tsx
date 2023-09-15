import React from 'react';

const DestinationSection: React.FC = () => {

  return (
<section className="destination-section">
<div className="container">
   <div className="section-heading">
      <div className="row align-items-end">
         <div className="col-lg-7">
            <h5 className="dash-style">POPULAR DESTINATION</h5>
            <h2>TOP NOTCH DESTINATION</h2>
         </div>
         <div className="col-lg-5">
            <div className="section-disc">
                Aperiam sociosqu urna praesent, tristique, corrupti condimentum asperiores platea ipsum ad arcu. Nostrud. Aut nostrum, ornare quas provident laoreet nesciunt.
            </div>
         </div>
      </div>
   </div>
   <div className="destination-inner destination-three-column">
      <div className="row">
         <div className="col-lg-7">
            <div className="row">
               <div className="col-sm-6">
                  <div className="desti-item overlay-desti-item">
                     <figure className="desti-image">
                        <img src="assets/images/img1.jpg" alt=""/>
                     </figure>
                     <div className="meta-cat bg-meta-cat">
                        <a href="#">THAILAND</a>
                     </div>
                     <div className="desti-content">
                        <h3>
                           <a href="#">Disney Land</a>
                        </h3>
                        <div className="rating-start" title="Rated 5 out of 4">
                           <span style={{width: "53%"}}></span>
                        </div>
                     </div>
                  </div>
               </div>
               <div className="col-sm-6">
                  <div className="desti-item overlay-desti-item">
                     <figure className="desti-image">
                        <img src="assets/images/img2.jpg" alt=""/>
                     </figure>
                     <div className="meta-cat bg-meta-cat">
                        <a href="#">NORWAY</a>
                     </div>
                     <div className="desti-content">
                        <h3>
                           <a href="#">Besseggen Ridge</a>
                        </h3>
                        <div className="rating-start" title="Rated 5 out of 5">
                           <span style={{width: "100%"}}></span>
                        </div>
                     </div>
                  </div>
               </div>
            </div>
         </div>
         <div className="col-lg-5">
            <div className="row">
               <div className="col-md-6 col-xl-12">
                  <div className="desti-item overlay-desti-item">
                     <figure className="desti-image">
                        <img src="assets/images/img3.jpg" alt=""/>
                     </figure>
                     <div className="meta-cat bg-meta-cat">
                        <a href="#">NEW ZEALAND</a>
                     </div>
                     <div className="desti-content">
                        <h3>
                           <a href="#">Oxolotan City</a>
                        </h3>
                        <div className="rating-start" title="Rated 5 out of 5">
                           <span style={{width: "100%"}}></span>
                        </div>
                     </div>
                  </div>
               </div>
               <div className="col-md-6 col-xl-12">
                  <div className="desti-item overlay-desti-item">
                     <figure className="desti-image">
                        <img src="assets/images/img4.jpg" alt=""/>
                     </figure>
                     <div className="meta-cat bg-meta-cat">
                        <a href="#">SINGAPORE</a>
                     </div>
                     <div className="desti-content">
                        <h3>
                           <a href="#">Marina Bay Sand City</a>
                        </h3>
                        <div className="rating-start" title="Rated 5 out of 4">
                           <span style={{width: "60%"}}></span>
                        </div>
                     </div>
                  </div>
               </div>
            </div>
         </div>
      </div>
      <div className="btn-wrap text-center">
         <a href="#" className="button-primary">MORE DESTINATION</a>
      </div>
   </div>
</div>
</section>
  );
};

export default DestinationSection;