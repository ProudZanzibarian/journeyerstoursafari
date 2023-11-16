import React, { useState } from "react";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
const ContactDetail: React.FC = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleChange = (e: { target: { name: any; value: any } }) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (!validateForm()) {
      return;
    }

    try {
      const response = await fetch("./PHPMailer/contact-us.php", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        console.log("Contact form submitted successfully!");
        toast.success("Contact form submitted successfully!");

        setFormData({
          name: "",
          email: "",
          message: "",
        });
      } else {
        console.error("Failed to submit Contact form");
        toast.error("Failed to submit Contact form");
      }
    } catch (error) {
      console.error("Error:", error);
      toast.error("Error submitting Contact form");
    }
  };

  const validateForm = () => {
    const { name, email, message } = formData;

    if (!name || !email || !message) {
      toast.error("Please fill in all required fields");
      return false;
    }

    // Basic email validation
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      toast.error("Please enter a valid email address");
      return false;
    }

    return true;
  };

  return (
    <div className="contact-page-section">
      <div className="contact-form-inner">
        <div className="container">
          <div className="row">
            <div className="col-md-6">
              <div className="contact-from-wrap">
                <div className="section-heading">
                  <h5 className="dash-style">GET IN TOUCH</h5>
                  <h2>Would you like to talk?</h2>
                  <p>
                    If you have a story to share, or you have a question that
                    has not been answered on our website, please do get in touch
                    with us via contact details her or simply fill in the
                    contact form on this page.
                  </p>
                </div>
                <form className="contact-from" onSubmit={handleSubmit}>
                  <p>
                    <input
                      type="text"
                      name="name"
                      placeholder="Your Name*"
                      value={formData.name}
                      onChange={handleChange}
                    />
                  </p>
                  <p>
                    <input
                      type="email"
                      name="email"
                      placeholder="Your Email*"
                      value={formData.email}
                      onChange={handleChange}
                    />
                  </p>
                  <p>
                    <textarea
                      rows={8}
                      name="message"
                      placeholder="Your Message*"
                      value={formData.message}
                      onChange={handleChange}
                    ></textarea>
                  </p>
                  <p>
                    <input type="submit" name="submit" value="SUBMIT MESSAGE" />
                  </p>
                </form>
              </div>
            </div>
            <div className="col-md-6">
              <div className="contact-detail-wrap">
                <div className="details-list">
                  <ul>
                    <li>
                      <span className="icon">
                        <i className="fas fa-map-signs"></i>
                      </span>
                      <div className="details-content">
                        <h4>Location Address</h4>
                        <span>Mombasa, Zanzibar.</span>
                      </div>
                    </li>
                    <li>
                      <span className="icon">
                        <i className="fas fa-envelope-open-text"></i>
                      </span>
                      <div className="details-content">
                        <h4>Email Address</h4>
                        <span>
                          <a
                            href="mailto:salumtwas25@gmail.com"
                            className="__cf_email__"
                            data-cfemail="a0c4cfcdc1c9cee0c3cfcdd0c1ced98ec3cfcd"
                          >
                            salumtwas25@gmail.com
                          </a>
                        </span>
                      </div>
                    </li>
                    <li>
                      <span className="icon">
                        <i className="fas fa-phone-volume"></i>
                      </span>
                      <div className="details-content">
                        <h4>Phone Number</h4>
                        <span>Telephone: +255 710 799 443</span>
                      </div>
                    </li>
                  </ul>
                </div>
                <div className="contct-social social-links">
                  <h3>Follow us on social media..</h3>
                  <ul>
                    <li>
                      <a href="https://www.facebook.com/profile.php?id=61552067602225&mibextid=ZbWKwL">
                        <i className="fab fa-facebook-f" aria-hidden="true"></i>
                      </a>
                    </li>
                    <li>
                      <a href="https://www.tripadvisor.com/Attraction_Review-g482884-d26689044-Reviews-Journeyers_Tour_Safari-Zanzibar_Island_Zanzibar_Archipelago.html">
                        <i
                          className="fab fa-tripadvisor"
                          aria-hidden="true"
                        ></i>
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
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="map-section">
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m14!1m12!1m3!1d689.0873459587452!2d39.21865818199234!3d-6.191542696229462!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!5e0!3m2!1sen!2stz!4v1698267139698!5m2!1sen!2stz"
          width="600"
          height="450"
          style={{ border: "0" }}
          allowFullScreen
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
        ></iframe>
      </div>
      <ToastContainer/>
    </div>
  );
};

export default ContactDetail;
