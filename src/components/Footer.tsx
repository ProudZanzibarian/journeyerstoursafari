import React from "react";

const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer id="colophon" className="site-footer footer-primary">
      <div className="top-footer">
        <div className="container">
          <div className="row">
            <div className="col-lg-6 col-md-6">
              <aside className="widget widget_text">
                <h3 className="widget-title">About JElite Tour Safaris</h3>
                <div className="textwidget widget-text">
                  Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                  Animi nisi neque repellendus quo magni doloremque. Illum ipsam
                  odio esse reiciendis reprehenderit veritatis placeat illo
                  sapiente accusamus debitis nobis, quam delectus?
                </div>
                <div className="award-img">
                  <a href="#">
                    <img src="assets/images/logo6.png" alt="" />
                  </a>
                  <a href="#">
                    <img src="assets/images/logo2.png" alt="" />
                  </a>
                </div>
              </aside>
            </div>
            <div className="col-lg-6 col-md-6">
              <aside className="widget widget_text">
                <h3 className="widget-title">CONTACT INFORMATION</h3>
                <div className="textwidget widget-text">
                  <ul>
                    <li>
                      <a href="tel:+255 710 799 443">
                        <i className="fas fa-phone-alt"></i>
                        +255 7** *** ***
                      </a>
                    </li>
                    <li>
                      <a
                        target="_blank"
                        href="https://api.whatsapp.com/send?phone=255710799443&text=Hi Journeyers Tour & Safari."
                      >
                        <i className="fab fa-whatsapp" aria-hidden="true"></i>
                        +255 7** *** ***
                      </a>
                    </li>

                    <li>
                      <a href="mailto:info@elitetoursafaris.com">
                        <i className="fas fa-envelope"></i>
                      </a>
                    </li>

                    <li>
                      <a href="mailto:info@elitetoursafaris.com">
                        <i className="fas fa-envelope"></i>
                        info@elitetoursafaris.com
                      </a>
                    </li>

                    <li>
                      <a href="#" target="_blank">
                        <i className="fab fa-instagram"></i>
                        elite_tour_safaris
                      </a>
                    </li>

                    <li>
                      <a href="#">
                        <i className="fab fa-tripadvisor"></i>
                        elite_tour_safaris
                      </a>
                    </li>
                    <li>
                      <i className="fas fa-map-marker-alt"></i>
                      Mombasa, Zanzibar.
                    </li>
                  </ul>
                </div>
              </aside>
            </div>
          </div>
        </div>
      </div>
      <div className="buttom-footer">
        <div className="container">
          <div className="row align-items-center">
            <div className="col-md-5">
              <div className="footer-menu"></div>
            </div>
            <div className="col-md-2 text-center">
              <div className="footer-logo">
                <a href="#">
                  <img src="assets/images/travele-logo.png" alt="" />
                </a>
              </div>
            </div>
            <div className="col-md-5">
              <div className="copy-right text-right">
                Copyright © {currentYear}{" "}
                <a target="_blank" href="http://himatech.co.tz">
                  Hima Technologies
                </a>
                . All rights reserved
              </div>
            </div>
          </div>
        </div>
      </div>
      <a id="backTotop" href="#" className="to-top-icon">
        <i className="fas fa-chevron-up"></i>
      </a>
      <div className="header-search-form">
        <div className="container">
          <div className="header-search-container">
            <form className="search-form" role="search" method="get">
              <input type="text" name="s" placeholder="Enter your text..." />
            </form>
            <a href="#" className="search-close">
              <i className="fas fa-times"></i>
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
