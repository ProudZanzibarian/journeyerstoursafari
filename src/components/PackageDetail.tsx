import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import UpperSection from "./UpperSection";

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
}

function PackageDetail() {
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
                        <i className="fas fa-user-friends"></i>
                        People: 4
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
                <form className="booking-form">
                  <div className="row">
                    <div className="col-sm-12">
                      <div className="form-group">
                        <input
                          name="fname"
                          type="text"
                          placeholder="Full Name"
                        />
                      </div>
                    </div>
                    <div className="col-sm-12">
                      <div className="form-group">
                        <input name="email" type="email" placeholder="Email" />
                      </div>
                    </div>
                    <div className="col-sm-12">
                      <div className="form-group">
                        <input
                          name="phone_booking"
                          type="text"
                          value={tour.name}
                          placeholder="Tour"
                        />
                      </div>
                    </div>
                    {tour.day === "on" && (
                      <div className="col-sm-12">
                        <div className="form-group">
                          <input
                            name="noDay"
                            type="number"
                            placeholder="Number of day(s)"
                          />
                        </div>
                      </div>
                    )}

                    <div className="col-sm-12">
                      <div className="form-group">
                        <input
                          name="noPeople"
                          type="number"
                          placeholder="Number of people"
                        />
                      </div>
                    </div>
                    <div className="col-sm-12">
                      <div className="form-group">
                        <input
                          className="input-date-picker"
                          type="text"
                          name="pickup"
                          autoComplete="off"
                          readOnly
                          placeholder="Pick-up Date"
                        />
                      </div>
                    </div>
                    <div className="col-sm-12">
                    <textarea name="msg" id="" cols={90} rows={9} placeholder="Write your Message"></textarea>
                    </div>

                    <div className="col-sm-12">
                      <div className="form-group submit-btn">
                        <input type="submit" name="submit" value="Boook Now" />
                      </div>
                    </div>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </main>
    </>
  );
}

export default PackageDetail;
