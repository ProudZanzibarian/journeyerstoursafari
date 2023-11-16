import React from "react";
import { Link } from "react-router-dom";
import homelogo from "../assets/images/Journeyer.png";
const Header: React.FC = () => {
  return (
    <>
      <header id="masthead" className="site-header header-primary">
        <div className="top-header">
          <div className="container">
            <div className="row">
              <div className="col-lg-8 d-none d-lg-block">
                <div className="header-contact-info">
                  <ul>
                    <li>
                      <a href="tel:+255 710 799 443">
                        <i className="fas fa-phone-alt"></i> +255 710 799 443
                      </a>
                    </li>
                    <li>
                      <a href="mailto:salumtwas25@gmail.com">
                        <i className="fas fa-envelope"></i>{" "}
                        <span
                          className="__cf_email__"
                          data-cfemail="680b070518090611280c0705090106460b0705"
                        >
                          salumtwas25@gmail.com
                        </span>
                      </a>
                    </li>
                    <li>
                      <i className="fas fa-map-marker-alt"></i> Mombasa,
                      Zanzibar.
                    </li>
                  </ul>
                </div>
              </div>
              <div className="col-lg-4 d-flex justify-content-lg-end justify-content-between">
                <div className="header-social social-links">
                  <ul>
                    <li>
                      <a href="https://www.facebook.com/profile.php?id=61552067602225&mibextid=ZbWKwL">
                        <i className="fab fa-facebook-f" aria-hidden="true"></i>
                      </a>
                    </li>
                    <li>
                      <a href="https://instagram.com/journeyers_tour?utm_source=qr&igshid=MThlNWY1MzQwNA==">
                      <i className="fab fa-instagram" aria-hidden="true"></i>
                      </a>
                    </li>
                    <li>
                      <a
                        target="_blank"
                        href="https://api.whatsapp.com/send?phone=255710799443&text=Hi Journeyers Tour & Safari."
                      >
                        <i className="fab fa-whatsapp" aria-hidden="true"></i>
                      </a>
                    </li>
                    <li>
                      <a
                        target="_blank"
                        href="https://www.tripadvisor.com/Attraction_Review-g482884-d26689044-Reviews-Journeyers_Tour_Safari-Zanzibar_Island_Zanzibar_Archipelago.html"
                      >
                        <i
                          className="fab fa-tripadvisor"
                          aria-hidden="true"
                        ></i>
                      </a>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="bottom-header">
          <div className="container d-flex justify-content-between align-items-center">
            <div className="site-identity">
              <h1 className="site-title">
                <Link to={"/"}>
                  <img
                    className="white-logo"
                    src={homelogo}
                    alt="logo"
                    style={{ width: "70px" }}
                  />
                  <img
                    className="black-logo"
                    src={homelogo}
                    alt="logo"
                  />
                </Link>
              </h1>
            </div>
            <div className="main-navigation d-none d-lg-block">
              <nav id="navigation" className="navigation">
                <ul>
                  <li>
                    <Link to="/">Home</Link>
                  </li>

                  <li className="menu-item-has-children">
                    <a href="#">Gallery</a>
                    <ul>
                      <li>
                        <Link to="/zanzibar"> Zanzibar </Link>
                      </li>
                      <li>
                        <Link to="/tanzania"> Tanzania </Link>
                      </li>
                    </ul>
                  </li>
                  <li className="menu-item-has-children">
                    <a href="#"> Plans </a>
                    <ul>
                      <li>
                        <Link to="/zanexcursion"> Zanzibar Excursion </Link>
                      </li>
                      <li>
                        <Link to="/tansafari"> Tanzania Safari </Link>
                      </li>
                    </ul>
                  </li>
                  <li>
                    <Link to="/packages">All Packages</Link>
                  </li>
                  <li>
                    <Link to="/about">Aboutus</Link>
                  </li>
                  <li>
                    <Link to="/contact">Contact</Link>
                  </li>
                </ul>
              </nav>
            </div>
          </div>
        </div>
        <div className="mobile-menu-container"></div>
      </header>
    </>
  );
};

export default Header;
