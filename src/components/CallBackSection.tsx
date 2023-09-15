import React from 'react';

const CallBackSection: React.FC = () => {

  return (
<section className="callback-section">
<div className="container">
   <div className="row no-gutters align-items-center">
      <div className="col-lg-5">
         <div className="callback-img" style={{backgroundImage: "url(assets/images/img8.jpg);"}}>
            <div className="video-button">
               <a id="video-container" data-video-id="IUN664s7N-c">
                  <i className="fas fa-play"></i>
               </a>
            </div>
         </div>
      </div>
      <div className="col-lg-7">
         <div className="callback-inner">
            <div className="section-heading section-heading-white">
               <h5 className="dash-style">CALLBACK FOR MORE</h5>
               <h2>GO TRAVEL. DISCOVER. REMEMBER US!!</h2>
               <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit tellus, luctus nec ullamcorper mattis, pulvinar dapibus leo. Eaque adipiscing, luctus eleifend.</p>
            </div>
            <div className="callback-counter-wrap">
               <div className="counter-item">
                  <div className="counter-icon">
                    <img src="assets/images/icon1.png" alt=""/>
                  </div>
                  <div className="counter-content">
                     <span className="counter-no">
                        <span className="counter">500</span>K+
                     </span>
                     <span className="counter-text">
                        Satisfied Clients
                     </span>
                  </div>
               </div>
               <div className="counter-item">
                  <div className="counter-icon">
                    <img src="assets/images/icon2.png" alt=""/>
                  </div>
                  <div className="counter-content">
                     <span className="counter-no">
                        <span className="counter">250</span>K+
                     </span>
                     <span className="counter-text">
                        Satisfied Clients
                     </span>
                  </div>
               </div>
               <div className="counter-item">
                  <div className="counter-icon">
                    <img src="assets/images/icon3.png" alt=""/>
                  </div>
                  <div className="counter-content">
                     <span className="counter-no">
                        <span className="counter">15</span>K+
                     </span>
                     <span className="counter-text">
                        Satisfied Clients
                     </span>
                  </div>
               </div>
               <div className="counter-item">
                  <div className="counter-icon">
                    <img src="assets/images/icon4.png" alt=""/>
                  </div>
                  <div className="counter-content">
                     <span className="counter-no">
                        <span className="counter">10</span>K+
                     </span>
                     <span className="counter-text">
                        Satisfied Clients
                     </span>
                  </div>
               </div>
            </div>
            <div className="support-area">
               <div className="support-icon">
                  <img src="assets/images/icon5.png" alt=""/>
               </div>
               <div className="support-content">
                  <h4>Our 24/7 Emergency Phone Services</h4>
                  <h3>
                     <a href="#">Call: 123-456-7890</a>
                  </h3>
               </div>
            </div>
         </div>
      </div>
   </div>
</div>
</section>
  );
};

export default CallBackSection;