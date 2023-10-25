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
        <form action="" method="post">
          <div className="trip-search-inner white-bg d-flex">
            <div className="input-group">
              <label> Full Name </label>
              <input type="text" name="fname" placeholder="Full Name" />
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
                  <>
                    <option value={tour.name}>{tour.name}</option>
                  </>
                ))}
                <option value="Ngorongoro">Ngorongoro</option>

                <option value="Transfer">Transfer</option>
                <option value="Others">Others</option>
              </select>
            </div>
            <div className="input-group">
              <label> People Number </label>
              <input type="number" name="s" placeholder="No.of People" />
            </div>
            <div className="input-group width-col-3">
              <label> Pick-up Date </label>
              <input
                className="input-date-picker"
                type="date"
                name="s"
                placeholder="MM / DD / YY"
              />
            </div>
            <div className="input-group " id="desc">
              <textarea
                name="msg"
                id=""
                cols={90}
                rows={1}
                placeholder="Write your Message"
              ></textarea>
            </div>
            <div className="input-group width-col-3">
              <label className="screen-reader-text"> Search </label>
              <input type="submit" name="travel-search" value="Book Now" />
            </div>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Search;
