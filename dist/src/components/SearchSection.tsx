import React, { useEffect, useState } from "react";

interface Tour {
  id: number;
  name: string;
}

const Search: React.FC = () => {
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

  return (
    <div className="trip-search-section shape-search-section">
      <div className="slider-shape"></div>
      <div className="container">
        <div className="trip-search-inner white-bg d-flex">
          <div className="input-group">
            <label> Full Name </label>
            <input type="text" name="fname" placeholder="Ful Name" />
          </div>
          <div className="input-group">
            <label> Email </label>
            <input type="email" name="email" placeholder="email" />
          </div>
          <div className="input-group">
            <label> Select Destination </label>
            <select name="" id="">
              <option value="">--Select Tour--</option>
              {tours.map((tour) => (
                <option value={tour.name}>{tour.name}</option>
              ))}
            </select>
          </div>
          <div className="input-group">
            <label> People Number </label>
            <input type="number" name="s" placeholder="No.of People" />
          </div>
          <div className="input-group width-col-3">
            <label> Arrival Date </label>
            <i className="far fa-calendar"></i>
            <input
              className="input-date-picker"
              type="text"
              name="s"
              placeholder="MM / DD / YY"
              autoComplete="off"
              readOnly
            />
          </div>
          <div className="input-group width-col-3">
            <label className="screen-reader-text"> Search </label>
            <input type="submit" name="travel-search" value="Book Now" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Search;
