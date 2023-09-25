import React from "react";
import TourList from "./TourList";
import { Link } from "react-router-dom";

const TzSection: React.FC = () => {
  return (
    <>
      <section className="package-section">
        <div className="container">
          <div className="section-heading text-center">
            <div className="row">
              <div className="col-lg-8 offset-lg-2">
                <h5 className="dash-style">EXPLORE GREAT PLACES</h5>
                <h3> Tanzania Safaris </h3>
                <p>
                  Mollit voluptatem perspiciatis convallis elementum corporis
                  quo veritatis aliquid blandit, blandit torquent, odit placeat.
                  Adipiscing repudiandae eius cursus? Nostrum magnis maxime
                  curae placeat.
                </p>
              </div>
            </div>
          </div>
          <div className="package-inner">
            <div className="row">
              <TourList limit={3} shortDesc={true} category="tz"/>
            </div>
            <div className="btn-wrap text-center">
              <Link to={"/packages"} className="button-primary">
                VIEW ALL SAFARIS
              </Link>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default TzSection;
