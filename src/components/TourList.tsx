import { useState, useEffect } from "react";
import { Link } from "react-router-dom";

interface Tour {
  id: number;
  name: string;
  description: string;
  location: string;
  image: string;
}
interface TourListProps {
  limit: number;
  shortDesc: boolean;
  category : string;
}

function TourList({ limit, shortDesc,  category }: TourListProps) {
  const [tours, setTours] = useState<Tour[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    fetch("./src/assets/data.json")
      .then((response) => {
        if (!response.ok) {
          throw new Error("Network response was not ok");
        }
        return response.json();
      })
      .then((data) => {
        const filteredTours = data.package.filter((tour: { category: string; }) => tour.category === category);
        setTours(filteredTours);        setLoading(false);
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

  const limitedTours = tours.slice(0, limit);

  // Render data when successfully retrieved
  return (
    <>
      {limitedTours.map((tour) => (
        <div className="col-lg-4 col-md-6" key={tour.id}>
          <div className="package-wrap">
            <figure className="feature-image">
              <a href="#">
                <img src={`src/assets/images/${tour.image}`} alt="" />
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
                    <i className="fas fa-map-marker-alt"></i>
                    {tour.location}
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
                <p>{!shortDesc ? tour.description : `${tour.description.substring(0, 100)}...`}</p>
                <div className="btn-wrap">
                  <Link to={`/package/${tour.id}`} className="button-text width-6">
                    Book Now<i className="fas fa-arrow-right"></i>
                  </Link>
                  <Link to={`/package/${tour.id}`} className="button-text width-6">
                    Read More
                  </Link>
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
