import React from 'react';
import TourList from './TourList';

const Package: React.FC = () => {
  return (
    <>   
<section className="package-section">
<div className="container">
   <div className="section-heading text-center">
      <div className="row">
         <div className="col-lg-8 offset-lg-2">
            <h5 className="dash-style">EXPLORE GREAT PLACES</h5>
            <h2>POPULAR PACKAGES</h2>
            <p>Mollit voluptatem perspiciatis convallis elementum corporis quo veritatis aliquid blandit, blandit torquent, odit placeat. Adipiscing repudiandae eius cursus? Nostrum magnis maxime curae placeat.</p>
         </div>
      </div>
   </div>
   <div className="package-inner">
      <div className="row">
         <TourList/>
      </div>
      <div className="btn-wrap text-center">
         <a href="#" className="button-primary">VIEW ALL PACKAGES</a>
      </div>
   </div>
</div>
</section>
    </>
  );
};

export default Package;
