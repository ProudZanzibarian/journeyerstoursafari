import React from "react";
import TourList from "./TourList";
import { Link } from "react-router-dom";

const ZnzSection: React.FC = () => {
  return (
    <>
      <section className="package-section">
        <div className="container">
          <div className="section-heading text-center">
            <div className="row">
              <div className="col-lg-8 offset-lg-2">
                <h5 className="dash-style">EXPLORE GREAT PLACES</h5>

                <h3>Zanzibar Day Trips</h3>
                <p>
                Zanzibar is an archipelago about 86 km long and 39 km wide. It’s formed by two main islands, Unguja (commonly known as Zanzibar) and Pemba, as well as several smaller islands including Mafia, Chumbe and Mnemba Island... <Link to={"/zanexcursion"}> read more </Link>
                </p>
              </div>
            </div>
          </div>
          <div className="package-inner">
            <div className="row">
              <TourList limit={3} shortDesc={true} category="znz"/>
            </div>
            <div className="btn-wrap text-center">
              <Link to={"/zanexcursion"} className="button-primary">
                VIEW ALL TRIPS
              </Link>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default ZnzSection;
