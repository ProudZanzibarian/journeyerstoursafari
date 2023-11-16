import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import UpperSection from "./UpperSection";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

interface RouteParams {
  id: string;
  [key: string]: string | undefined;
}

interface Tour {
  id: number;
  name: string;
  heading: string;
  description: string;
  location: string;
  day: string;
  default_day: string;
}

function PackageDetail() {
  const [formData, setFormData] = useState({
    fname: "",
    email: "",
    tel: "",
    destination: "",
    noDay: "",
    people: "",
    date: "",
    messege: "",
  });

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const validateForm = () => {
    if (
      !formData.fname ||
      !formData.email ||
      !formData.tel ||
      !formData.destination ||
      !formData.people ||
      !formData.date
    ) {
      toast.error("Please fill in all required fields");
      return false;
    }

    // Basic email validation
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(formData.email)) {
      toast.error("Please enter a valid email address");
      return false;
    }

    // Basic people validation
    if (parseInt(formData.people) <= 0) {
      toast.error("Please enter a valid number of people");
      return false;
    }

    return true;
  };


  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (!validateForm()) {
      return;
    }

    try {
      const response = await fetch("./PHPMailer/booking.php", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
      });

      if (response.ok) {
        console.log("Booking form submitted successfully!");
        toast.success("Booking form submitted successfully!");
        setFormData({
          fname: "",
          email: "",
          tel: "",
          destination: "",
          people: "",
          date: "",
          messege: "",
          noDay: "",
        });
      } else {
        console.error("Failed to submit Booking form");
        toast.error("Failed to submit Booking form");
      }
    } catch (error) {
      console.error("Error:", error);
      toast.error("Error submitting Booking form");
    }
  };

  const { id } = useParams<RouteParams>();
  const [tour, setTour] = useState<Tour | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    fetch("../src/assets/data.json")
      .then((response) => {
        if (!response.ok) {
          throw new Error("Network response was not ok");
        }
        return response.json();
      })
      .then((data) => {
        const selectedTour = data.package.find(
          (item: Tour) => item.id === parseInt(id || "0", 10)
        );
        if (selectedTour) {
          setTour(selectedTour);
        }
        setLoading(false);
      })
      .catch((error) => {
        setError(error.message);
        setLoading(false);
      });
  }, [id]);

  if (loading) {
    return <p>Loading...</p>;
  }

  if (error) {
    return <p>Error: {error}</p>;
  }

  if (!tour) {
    return <p>Tour not found</p>;
  }

  return (
    <>
      <UpperSection name={tour.heading} />
      <main id="content" className="site-main" key={tour.id}>
        <div className="single-tour-section">
          <div className="container">
            <div className="row">
              <div className="col-lg-8">
                <div className="single-tour-inner">
                  <h2>{tour.name}</h2>
                  <figure className="feature-image">
                    <img src="assets/images/img27.jpg" alt="" />
                    <div className="package-meta text-center">
                      <ul>
                        <li>
                          {tour.default_day !== "off" && (
                            <li>
                              <i className="far fa-clock"></i>
                              {tour.default_day}
                            </li>
                          )}
                        </li>
                        <li>
                          <i className="fas fa-map-marked-alt"></i>
                          {tour.location}
                        </li>
                      </ul>
                    </div>
                  </figure>
                  <div className="tab-container">
                    <ul className="nav nav-tabs" id="myTab" role="tablist">
                      <li className="nav-item">
                        <a
                          className="nav-link active"
                          id="overview-tab"
                          data-toggle="tab"
                          href="#overview"
                          role="tab"
                          aria-controls="overview"
                          aria-selected="true"
                        >
                          DESCRIPTION
                        </a>
                      </li>
                    </ul>
                    <div className="tab-content" id="myTabContent">
                      <div
                        className="tab-pane fade show active"
                        id="overview"
                        role="tabpanel"
                        aria-labelledby="overview-tab"
                      >
                        <div className="overview-content">
                          <p>{tour.description}</p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-lg-4">
                <div className="widget-bg booking-form-wrap">
                  <h4 className="bg-title">Booking</h4>
                  <form
                    className="booking-form"
                    onSubmit={handleSubmit}
                    method="post"
                  >
                    <div className="row">
                      <div className="col-sm-12">
                        <div className="form-group">
                          <input
                            name="fname"
                            type="text"
                            placeholder="Full Name"
                            value={formData.fname}
                            onChange={handleChange}
                          />
                        </div>
                      </div>
                      <div className="col-sm-12">
                        <div className="form-group">
                          <input
                            name="email"
                            type="email"
                            placeholder="Email"
                            value={formData.email}
                            onChange={handleChange}
                          />
                        </div>
                      </div>
                      <div className="col-sm-12">
                        <div className="form-group">
                          <input
                            name="tel"
                            type="tel"
                            maxLength={10}
                            placeholder="Tel / Whatsapp"
                            value={formData.tel}
                            onChange={handleChange}
                          />
                        </div>
                      </div>
                      <div className="col-sm-12">
                        <div className="form-group">
                          <input
                            name="destination"
                            type="text"
                            placeholder="Tour"
                            value={ formData.destination = tour.name}
                            onChange={handleChange}
                          />
                        </div>
                      </div>
                      {tour.default_day &&
                        tour.default_day.toLowerCase() === "on" && (
                          <div className="col-sm-12">
                            <div className="form-group">
                              <input
                                name="noDay"
                                type="number"
                                placeholder="Number of day(s)"
                                value={formData.noDay}
                                onChange={handleChange}
                              />
                            </div>
                          </div>
                        )}
                      <div className="col-sm-12">
                        <div className="form-group">
                          <input
                            name="people"
                            type="number"
                            placeholder="Number of people"
                            value={formData.people}
                            onChange={handleChange}
                          />
                        </div>
                      </div>
                      <div className="col-sm-12">
                        <div className="form-group">
                          <input
                            className="input-date-picker"
                            type="date"
                            name="date"
                            autoComplete="off"
                            placeholder="Pick-up Date"
                            value={formData.date}
                            onChange={handleChange}
                          />
                        </div>
                      </div>
                      <div className="col-sm-12">
                        <textarea
                          name="messege"
                          cols={90}
                          rows={9}
                          placeholder="Write your Message"
                          value={formData.messege}
                          onChange={handleChange}
                        ></textarea>
                      </div>
                      <div className="col-sm-12">
                        <div className="form-group submit-btn">
                          <input type="submit" name="submit" value="Book Now" />
                        </div>
                      </div>
                    </div>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </div>
        <ToastContainer/>
      </main>
    </>
  );
}

export default PackageDetail;
