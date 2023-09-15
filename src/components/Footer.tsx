import React from "react";

const Footer: React.FC = () => {
  return (
    <footer id="colophon" className="site-footer footer-primary">
      <div className="top-footer">
        <div className="container">
          <div className="row">
            <div className="col-lg-3 col-md-6">
              <aside className="widget widget_text">
                <h3 className="widget-title">About Travel</h3>
                <div className="textwidget widget-text">
                  Located on the enchanting Zanzibar Island, Journeyers Tour &
                  Safari is a tour operator for Zanzibar Archipelago and the
                  Swahili Coast. We have also partnered with selected service
                  and experience providers on the Tanzania mainland, through
                  whom we offer safari packages, authentic cultural encounters
                  and mountain tours
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
            <div className="col-lg-3 col-md-6">
              <aside className="widget widget_text">
                <h3 className="widget-title">CONTACT INFORMATION</h3>
                <div className="textwidget widget-text">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                  <ul>
                    <li>
                      <a href="tel:+255 710 799 443">
                        <i className="fas fa-phone-alt"></i>
                        +255 710 799 443
                      </a>
                    </li>
                    <li>
                      <a href="mailto:salumtwas25@gmail.com">
                        <i className="fas fa-envelope"></i>
                        salumtwas25@gmail.com
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
              <div className="footer-menu">
                <ul>
                  <li>
                    <a href="#">Privacy Policy</a>
                  </li>
                  <li>
                    <a href="#">Term & Condition</a>
                  </li>
                  <li>
                    <a href="#">FAQ</a>
                  </li>
                </ul>
              </div>
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
                Copyright © 2021 Travele. All rights reserved
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
