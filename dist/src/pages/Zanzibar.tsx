import { useState, useEffect } from "react";
import GallerySection from "../components/GallerySection";
import UpperSection from "../components/UpperSection";

function Zanzibar() {
  const [galleryItems, setGalleryItems] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    fetch("./src/assets/data.json")
      .then((response) => {
        if (!response.ok) {
          throw new Error("Network response was not ok");
        }
        return response.json();
      })
      .then((data) => {
        setGalleryItems(data.ZanGallery);
        setLoading(false);
      })
      .catch((error) => {
        setError(error.message);
        setLoading(false);
      });
  }, []);

  return (
    <>
      <UpperSection name=" Zanzibar " />
      {loading ? (
        <p>Loading...</p>
      ) : error ? (
        <p>Error: {error}</p>
      ) : (
        <GallerySection galleryItems={galleryItems} />
      )}
    </>
  );
}

export default Zanzibar;
