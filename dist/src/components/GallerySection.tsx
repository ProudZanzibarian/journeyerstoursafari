import React from "react";

interface GalleryItem {
  id: number;
  title: string;
  url: string;
}

interface GallerySectionProps {
  galleryItems: GalleryItem[];
}

const GallerySection: React.FC<GallerySectionProps> = ({ galleryItems }) => {
  return (
    <div className="gallery-section">
      <div className="container">
        <div className="gallery-outer-wrap">
          <div className="gallery-inner-wrap gallery-container grid">
            {galleryItems.map((item) => (
              <div className="single-gallery grid-item" key={item.id}>
                <figure className="gallery-img">
                  <img src={`src/assets/images/${item.url}`} alt={item.title} />
                  <div className="gallery-title">
                    <h3>
                      <a href={`src/assets/images/${item.url}`} data-lightbox="lightbox-set">
                        View Image
                      </a>
                    </h3>
                  </div>
                </figure>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default GallerySection;
