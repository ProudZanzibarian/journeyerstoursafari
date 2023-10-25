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
                <h3> Tanzania Safaris </h3>
                <p>
                It is a land of superlatives and contrasts, something for everyone: from the majestic Mount Kilimanjaro to the fabled Islands of Zanzibar... <Link to={"/tansafari"}> read more </Link>
                </p>
              </div>
            </div>
          </div>
          <div className="package-inner">
            <div className="row">
              <TourList limit={3} shortDesc={true} category="tz"/>
            </div>
            <div className="btn-wrap text-center">
              <Link to={"/tansafari"} className="button-primary">
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
