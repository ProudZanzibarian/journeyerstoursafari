import React from "react";

const Footer: React.FC = () => {
  return (
    <footer id="colophon" className="site-footer footer-primary">
      <div className="top-footer">
        <div className="container">
          <div className="row">
            <div className="col-lg-6 col-md-6">
              <aside className="widget widget_text">
                <h3 className="widget-title">About Travel</h3>
                <div className="textwidget widget-text">
                  Located on the enchanting Zanzibar Island, Journeyers Tour &
                  Safari is a tour operator for Zanzibar Archipelago and the
                  Swahili Coast. We have also partnered with selected service
                  and experience providers on the Tanzania mainland, through
                  whom we offer safari packages, authentic cultural encounters
                  and mountain tours. Provide memorable, authentic visitor
                  experiences to local and international travellers, with a
                  focus on giving travellers an experience of the warmth and
                  diverse cultures of Tanzania’s national community, the magic
                  and sheer wonders of its climate, geography, wilderness and
                  wildlife – safely, comfortably and affordably, while enriching
                  both host communities’ and visitors’ lives alike, through
                  shared knowledge and understanding. Use guest experiences to
                  our country to making better places for people to live in and
                  better places for people to visit. Through philanthropy, give
                  to local communities which do not directly benefit from gains
                  of tourism.
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
                        +255 710 799 443
                      </a>
                    </li>
                    <li>
                      <a
                        target="_blank"
                        href="https://api.whatsapp.com/send?phone=255710799443&text=Hi Journeyers Tour & Safari."
                      >
                        <i className="fab fa-whatsapp" aria-hidden="true"></i>
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
                      <a href="mailto:salumtwas25@gmail.com">
                        <i className="fas fa-envelope"></i>
                        info@journeyerstoursafari.com
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
                Copyright © 2023 <a href="http://lionscode.tech/">Lion</a>. All
                rights reserved
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
