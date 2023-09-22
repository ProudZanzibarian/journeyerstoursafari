import React from 'react';
import { Link } from 'react-router-dom';
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
                                 <a href="tel:+255 710 799 443"><i className="fas fa-phone-alt"></i> +255 710 799 443</a>
                              </li>
                              <li>
                                 <a href="mailto:salumtwas25@gmail.com"><i className="fas fa-envelope"></i> <span className="__cf_email__" data-cfemail="680b070518090611280c0705090106460b0705" >salumtwas25@gmail.com</span></a>
                              </li>
                              <li>
                                 <i className="fas fa-map-marker-alt"></i> Mombasa, Zanzibar.
                              </li>
                           </ul>
                        </div>
                     </div>
                     <div className="col-lg-4 d-flex justify-content-lg-end justify-content-between">
                        <div className="header-social social-links">
                           <ul>
                              <li><a href="#"><i className="fab fa-facebook-f" aria-hidden="true"></i></a></li>
                              <li><a href="#"><i className="fab fa-twitter" aria-hidden="true"></i></a></li>
                              <li><a href="#"><i className="fab fa-instagram" aria-hidden="true"></i></a></li>
                              <li><a href="#"><i className="fab fa-linkedin" aria-hidden="true"></i></a></li>
                           </ul>
                        </div>
                        <div className="header-search-icon">
                           <button className="search-icon">
                              <i className="fas fa-search"></i>
                           </button>
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
                           <img className="white-logo" src="./src/assets/images/Journeyer.png" alt="logo" style={{width :"70px"}}/>
                           <img className="black-logo" src="./src/assets/images/Journeyer.png" alt="logo"/>
                        </Link>
                     </h1>
                  </div>
                  <div className="main-navigation d-none d-lg-block">
                     <nav id="navigation" className="navigation">
                        <ul>
                           <li >
                              <Link to="/">Home</Link>
 
                           </li>
                           <li >
                              <Link to="/about">About</Link>
 
                           </li>
                           <li >
                              <Link to="/gallery">Gallery</Link>
                           </li>
                           <li >
                              <Link to="/packages">Activities</Link>
                           </li>
                           <li >
                              <Link to="/packages">All Packages</Link>
                           </li>
                           <li >
                              <Link to="/contact">Contact</Link>
                           </li>
                        </ul>
                     </nav>
                  </div>
                  <div className="header-btn">
                     <a href="#" className="button-primary">BOOK NOW</a>
                  </div>
               </div>
            </div>
            <div className="mobile-menu-container"></div>
         </header>
    </>
  );
};

export default Header;
