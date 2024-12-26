import React from "react";

const Testimonial: React.FC = () => {
  return (
    <div
      className="testimonial-section"
      style={{ backgroundImage: "url(assets/images/avator.jpeg);" }}
    >
      <div className="container">
        <div className="row">
          <div className="col-lg-10 offset-lg-1">
            <div className="testimonial-inner testimonial-slider">
              <div className="testimonial-item text-center">
                <figure className="testimonial-img">
                  <img src="src/assets/images/avator.jpeg" alt="" />
                </figure>
                <div className="testimonial-content">
                  <p>
                    “The best things in life are the people we love, the places
                    we’ve been, and all the memories we’ve made along the way.”
                  </p>
                  <cite>
                    Salum Said
                    <span className="company">Tour Operator</span>
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
