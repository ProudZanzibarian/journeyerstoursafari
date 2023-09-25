import React from "react";
import { Link } from "react-router-dom";

const BannerSection: React.FC = () => {
  return (
    <section className="home-slider-section">
      <div className="home-slider">
        <div className="home-banner-items">
          <div className="banner-inner-wrap" style={{backgroundImage: "url(./src/assets/images/banner1.jpeg)"}}></div>
          <div className="banner-content-wrap">
            <div className="container">
              <div className="banner-content text-center">
                <h2 className="banner-title">Journeyers Tour & Safari</h2>
                <p>
                Certified by Travelife, part of Responsible Tourism Tanzania. Your holiday will make a difference.
                </p>
                <Link to="/about" className="button-primary">
                  CONTINUE READING
                </Link>
              </div>
            </div>
          </div>
          <div className="overlay"></div>
        </div>
        <div className="home-banner-items">
          <div className="banner-inner-wrap" style={{backgroundImage: "url(./src/assets/images/banner2.jpeg)"}}></div>
          <div className="banner-content-wrap">
            <div className="container">
              <div className="banner-content text-center">
                <h2 className="banner-title">Journeyers Tour & Safari</h2>
                <p>
                Certified by Travelife, part of Responsible Tourism Tanzania. Your holiday will make a difference.
                </p>
                <Link to="/about" className="button-primary">
                  CONTINUE READING
                </Link>
              </div>
            </div>
          </div>
          <div className="overlay"></div>
        </div>
      </div>
    </section>
  );
};

export default BannerSection;
