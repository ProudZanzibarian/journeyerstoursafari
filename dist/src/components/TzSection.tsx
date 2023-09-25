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
                It is a land of superlatives and contrasts, something for everyone: from the majestic Mount Kilimanjaro to the fabled Islands of Zanzibar. The largest and most diverse wildlife concentrations on Earth including the matchless Serengeti plains, Ngorongoro Crater, Katavi and the mighty Selous Game Reserve. The legacy of the ancient Swahili civilizations, such as Kilwa Ruins once a city of the Arabian Nights. Wonderful places for swimming, snorkeling, scuba diving, fishing off thousands of kilometres of Indian Ocean coastline and around Africa’s Great Lakes. And then there is Tanzania’s greatest asset: its friendly people and cuisines. The country is among the world’s leaders in Cultural tourism. We invite you to Experience Authentic Tanzania.
                </p>
              </div>
            </div>
          </div>
          <div className="package-inner">
            <div className="row">
              <TourList limit={3} shortDesc={true} category="tz"/>
            </div>
            <div className="btn-wrap text-center">
              <Link to={"/tansafaris"} className="button-primary">
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
