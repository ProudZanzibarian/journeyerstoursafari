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
                                 <a href="#"><i className="fas fa-phone-alt"></i> +01 (977) 2599 12</a>
                              </li>
                              <li>
                                 <a href="https://demo.bosathemes.com/cdn-cgi/l/email-protection#7b12151d143b2f091a0d1e1755181416"><i className="fas fa-envelope"></i> <span className="__cf_email__" data-cfemail="680b070518090611280c0705090106460b0705">[email&#160;protected]</span></a>
                              </li>
                              <li>
                                 <i className="fas fa-map-marker-alt"></i> 3146 Koontz Lane, California
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
                        <a href="index.html">
                           <img className="white-logo" src="assets/images/travele-logo.png" alt="logo"/>
                           <img className="black-logo" src="assets/images/travele-logo1.png" alt="logo"/>
                        </a>
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
                           <li className="menu-item-has-children">
                              <a href="#">Tour</a>
                              <ul>
                                 <li>
                                    <a href="destination.html">Destination</a>
                                 </li>
                                 <li>
                                    <a href="tour-packages.html">Tour Packages</a>
                                 </li>
                                 <li>
                                    <a href="package-offer.html">Package Offer</a>
                                 </li>
                                 <li>
                                    <a href="package-detail.html">Package Detail</a>
                                 </li>
                                 <li>
                                    <a href="tour-cart.html">Tour Cart</a>
                                 </li>
                                 <li>
                                    <a href="booking.html">Package Booking</a>
                                 </li>
                                 <li>
                                    <a href="confirmation.html">Confirmation</a>
                                 </li>
                              </ul>
                           </li>
                           <li className="menu-item-has-children">
                              <a href="#">Pages</a>
                              <ul>
                                 <li>
                                    <a href="about.html">About</a>
                                 </li>
                                 <li>
                                    <a href="service.html">Service</a>
                                 </li>
                                 <li>
                                    <a href="career.html">Career</a>
                                 </li>
                                 <li>
                                    <a href="career-detail.html">Career Detail</a>
                                 </li>
                                 <li>
                                    <a href="tour-guide.html">Tour Guide</a>
                                 </li>
                                 <li>
                                    <a href="gallery.html">Gallery</a>
                                 </li>
                                 <li>
                                    <a href="single-page.html">Single Page</a>
                                 </li>
                                 <li>
                                    <a href="faq.html">FAQ Page</a>
                                 </li>
                                 <li>
                                    <a href="testimonial-page.html">Testimonial Page</a>
                                 </li>
                                 <li>
                                    <a href="popup.html">Popup</a>
                                 </li>
                                 <li>
                                    <a href="search-page.html">Search Page</a>
                                 </li>
                                 <li>
                                    <a href="404.html">404 Page</a>
                                 </li>
                                 <li>
                                    <a href="comming-soon.html">Comming Soon</a>
                                 </li>
                                 <li>
                                    <a href="contact.html">Contact</a>
                                 </li>
                                 <li>
                                    <a href="wishlist-page.html">Wishlist</a>
                                 </li>
                              </ul>
                           </li>
                           <li className="menu-item-has-children">
                              <a href="single-page.html">Shop</a>
                              <ul>
                                 <li>
                                    <a href="product-right.html">Shop Archive</a>
                                 </li>
                                 <li>
                                    <a href="product-detail.html">Shop Single</a>
                                 </li>
                                 <li>
                                    <a href="product-cart.html">Shop Cart</a>
                                 </li>
                                 <li>
                                    <a href="product-checkout.html">Shop Checkout</a>
                                 </li>
                              </ul>
                           </li>
                           <li className="menu-item-has-children">
                              <a href="#">Blog</a>
                              <ul>
                                 <li><a href="blog-archive.html">Blog List</a></li>
                                 <li><a href="blog-archive-left.html">Blog Left Sidebar</a></li>
                                 <li><a href="blog-archive-both.html">Blog Both Sidebar</a></li>
                                 <li><a href="blog-single.html">Blog Single</a></li>
                              </ul>
                           </li>
                           <li className="menu-item-has-children">
                              <a href="#">Dashboard</a>
                              <ul>
                                 <li>
                                    <a href="admin/dashboard.html">Dashboard</a>
                                 </li>
                                 <li className="menu-item-has-children">
                                    <a href="#">User</a>
                                    <ul>
                                       <li>
                                          <a href="admin/user.html">User List</a>
                                       </li>
                                       <li>
                                          <a href="admin/user-edit.html">User Edit</a>
                                       </li>
                                       <li>
                                          <a href="admin/new-user.html">New User</a>
                                       </li>
                                    </ul>
                                 </li>
                                 <li>
                                    <a href="admin/db-booking.html">Booking</a>
                                 </li>
                                 <li className="menu-item-has-children">
                                    <a href="admin/db-package.html">Package</a>
                                    <ul>
                                       <li>
                                          <a href="admin/db-package-active.html">Package Active</a>
                                       </li>
                                       <li>
                                          <a href="admin/db-package-pending.html">Package Pending</a>
                                       </li>
                                       <li>
                                          <a href="admin/db-package-expired.html">Package Expired</a>
                                       </li>
                                    </ul>
                                 </li>
                                 <li>
                                    <a href="admin/db-comment.html">Comments</a>
                                 </li>
                                 <li>
                                    <a href="admin/db-wishlist.html">Wishlist</a>
                                 </li>
                                 <li>
                                    <a href="admin/login.html">Login</a>
                                 </li>
                                 <li>
                                    <a href="admin/forgot.html">Forget Password</a>
                                 </li>
                              </ul>
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
