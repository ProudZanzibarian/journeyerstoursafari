import React from "react";
import TourList from "./TourList";
import { Link } from "react-router-dom";

const Packages: React.FC = () => {
  return (
    <>
      <section className="package-section">
        <div className="container">
          <div className="section-heading text-center">
            <div className="row">
              <div className="col-lg-8 offset-lg-2">
                <h3>Best Packages</h3>
                <p>
                At Journeyers Tour & Safari, we understand that a safari transcends the mere presence of extraordinary wildlife in East Africa. Instead, it's the synergy of interconnected elements that crafts an unforgettable safari experience for our valued guests. This ultimate satisfaction prompts delighted clients to share their experiences with friends and family, leading to more travelers choosing to embark on journeys with us!
                </p>
              </div>
            </div>
          </div>
          <div className="package-inner">
            <div className="row">
              <TourList limit={3} shortDesc={true} category="pck"/>
            </div>
            <div className="btn-wrap text-center">
              <Link to={"/packages"} className="button-primary">
                VIEW ALL PACKAGES
              </Link>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Packages;
