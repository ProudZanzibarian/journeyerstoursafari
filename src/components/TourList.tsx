import { useState, useEffect } from "react";
import { Link } from "react-router-dom";

interface Tour {
  id: number;
  name: string;
  description: string;
}

function TourList() {
  const [tours, setTours] = useState<Tour[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    fetch("./src/assets/db/data.json")
      .then((response) => {
        if (!response.ok) {
          throw new Error("Network response was not ok");
        }
        return response.json();
      })
      .then((data) => {
        setTours(data.package);
        setLoading(false);
      })
      .catch((error) => {
        setError(error.message);
        setLoading(false);
      });
  }, []);

  // Render loading state
  if (loading) {
    return <p>Loading...</p>;
  }

  // Render error state
  if (error) {
    return <p>Error: {error}</p>;
  }

  // Render data when successfully retrieved
  return (
    <>
      {tours.map((tour) => (
        <div className="col-lg-4 col-md-6" key={tour.id}>
          <div className="package-wrap">
            <figure className="feature-image">
              <a href="#">
                <img src="assets/images/img5.jpg" alt="" />
              </a>
            </figure>
            <div className="package-price">
              <h6>
                <span>$1,900 </span> / per person
              </h6>
            </div>
            <div className="package-content-wrap">
              <div className="package-meta text-center">
                <ul>
                  <li>
                    <i className="far fa-clock"></i>
                    7D/6N
                  </li>
                  <li>
                    <i className="fas fa-user-friends"></i>
                    People: 5
                  </li>
                  <li>
                    <i className="fas fa-map-marker-alt"></i>
                    {tour.name}
                  </li>
                </ul>
              </div>
              <div className="package-content">
                <h3>
                  <Link to={`/package/${tour.id}`}> {tour.name}</Link>
                </h3>
                <div className="review-area">
                  <span className="review-text">(25 reviews)</span>
                  <div className="rating-start" title="Rated 5 out of 5">
                    <span style={{ width: "60%" }}></span>
                  </div>
                </div>
                <p>{tour.description.substring(0, 100)}...</p>
                <div className="btn-wrap">
                  <a href="#" className="button-text width-6">
                    Book Now<i className="fas fa-arrow-right"></i>
                  </a>
                  <a href="#" className="button-text width-6">
                    Wish List<i className="far fa-heart"></i>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      ))}
    </>
  );
}

export default TourList;
