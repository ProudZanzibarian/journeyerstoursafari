import React, { useEffect, useState } from "react";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

interface Tour {
  id: number;
  name: string;
}

const Search: React.FC = () => {
  const [formData, setFormData] = useState({
    fname: "",
    email: "",
    destination: "",
    people: "",
    tel: "", 
    date: "",
    message: "",
  });

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

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData((prevFormData) => ({
      ...prevFormData,
      [name]: value,
    }));
  };

  const validateForm = () => {
    if (
      !formData.fname ||
      !formData.email ||
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
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        console.log("Booking form submitted successfully!");
        toast.success("Booking form submitted successfully!");
        setFormData({
          fname: "",
          email: "",
          destination: "",
          people: "",
          tel: "", 
          date: "",
          message: "",
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

  if (loading) {
    return <p>Loading...</p>;
  }

  if (error) {
    return <p>Error: {error}</p>;
  }

  return (
    <div className="trip-search-section shape-search-section">
      <div className="slider-shape"></div>
      <div className="container">
        <form onSubmit={handleSubmit} method="post">
          <div className="trip-search-inner white-bg d-flex">
            <div className="input-group">
              <label> Full Name </label>
              <input type="text" name="fname" placeholder="Full Name" value={formData.fname} onChange={handleChange} />
            </div>
            <div className="input-group">
              <label> Email </label>
              <input type="email" name="email" placeholder="Email" value={formData.email} onChange={handleChange} />
            </div>
            <div className="input-group">
              <label> Select Destination </label>
              <select name="destination" id="destination" value={formData.destination} onChange={handleChange}>
                <option value="">--Select Tour--</option>
                {tours.map((tour) => (
                  <option key={tour.id} value={tour.name}>
                    {tour.name}
                  </option>
                ))}
                <option value="Ngorongoro">Ngorongoro</option>
                <option value="Transfer">Transfer</option>
                <option value="Others">Others</option>
              </select>
            </div>
            <div className="input-group">
              <label> People Number </label>
              <input type="number" name="people" placeholder="No. of People" value={formData.people} onChange={handleChange} />
            </div>
            <div className="input-group width-col-3">
              <label> Pick-up Date </label>
              <input
                className="input-date-picker"
                type="date"
                name="date"
                placeholder="MM / DD / YY"
                value={formData.date}
                onChange={handleChange}
              />
            </div>
            <div className="input-group">
              <input
                name="tel"
                type="tel"
                maxLength={10}
                placeholder="Tel / Whatsapp"
                value={formData.tel}
                onChange={handleChange}
              />
            </div>
            <div className="input-group " id="desc">
              <textarea
                name="message"
                id=""
                cols={90}
                rows={1}
                placeholder="Write your Message"
                value={formData.message}
                onChange={handleChange}
              ></textarea>
            </div>
            <div className="input-group width-col-3">
              <label className="screen-reader-text"> Search </label>
              <input type="submit" name="travel-search" value="Book Now" />
            </div>
          </div>
        </form>
      </div>
      < ToastContainer/>
    </div>
  );
};

export default Search;
