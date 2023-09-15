import React from "react";

const GallerySection: React.FC = () => {
  return (
      <div className="gallery-section">
        <div className="container">
          <div className="gallery-outer-wrap">
            <div className="gallery-inner-wrap gallery-container grid">
              <div className="single-gallery grid-item">
                <figure className="gallery-img">
                  <img src="assets/images/gallery-1.jpg" alt="" />
                  <div className="gallery-title">
                    <h3>
                      <a
                        href="assets/images/gallery-1.jpg"
                        data-lightbox="lightbox-set"
                      >
                        Santorini Island
                      </a>
                    </h3>
                  </div>
                </figure>
              </div>
              <div className="single-gallery grid-item">
                <figure className="gallery-img">
                  <img src="assets/images/gallery-2.jpg" alt="" />
                  <div className="gallery-title">
                    <h3>
                      <a
                        href="assets/images/gallery-2.jpg"
                        data-lightbox="lightbox-set"
                      >
                        Malaysia Beach
                      </a>
                    </h3>
                  </div>
                </figure>
              </div>
              <div className="single-gallery grid-item">
                <figure className="gallery-img">
                  <img src="assets/images/gallery-3.jpg" alt="" />
                  <div className="gallery-title">
                    <h3>
                      <a
                        href="assets/images/gallery-3.jpg"
                        data-lightbox="lightbox-set"
                      >
                        Tibet Mountain
                      </a>
                    </h3>
                  </div>
                </figure>
              </div>
              <div className="single-gallery grid-item">
                <figure className="gallery-img">
                  <img src="assets/images/gallery-4.jpg" alt="" />
                  <div className="gallery-title">
                    <h3>
                      <a
                        href="assets/images/gallery-4.jpg"
                        data-lightbox="lightbox-set"
                      >
                        Arizona Desert
                      </a>
                    </h3>
                  </div>
                </figure>
              </div>
              <div className="single-gallery grid-item">
                <figure className="gallery-img">
                  <img src="assets/images/gallery-5.jpg" alt="" />
                  <div className="gallery-title">
                    <h3>
                      <a
                        href="assets/images/gallery-5.jpg"
                        data-lightbox="lightbox-set"
                      >
                        Burj Khalifa (Dubai)
                      </a>
                    </h3>
                  </div>
                </figure>
              </div>
              <div className="single-gallery grid-item">
                <figure className="gallery-img">
                  <img src="assets/images/gallery-6.jpg" alt="" />
                  <div className="gallery-title">
                    <h3>
                      <a
                        href="assets/images/gallery-6.jpg"
                        data-lightbox="lightbox-set"
                      >
                        Oxolotan Island
                      </a>
                    </h3>
                  </div>
                </figure>
              </div>
              <div className="single-gallery grid-item">
                <figure className="gallery-img">
                  <img src="assets/images/gallery-7.jpg" alt="" />
                  <div className="gallery-title">
                    <h3>
                      <a
                        href="assets/images/gallery-7.jpg"
                        data-lightbox="lightbox-set"
                      >
                        Narita Airport
                      </a>
                    </h3>
                  </div>
                </figure>
              </div>
              <div className="single-gallery grid-item">
                <figure className="gallery-img">
                  <img src="assets/images/gallery-8.jpg" alt="" />
                  <div className="gallery-title">
                    <h3>
                      <a
                        href="assets/images/gallery-8.jpg"
                        data-lightbox="lightbox-set"
                      >
                        Thailand Temple
                      </a>
                    </h3>
                  </div>
                </figure>
              </div>
            </div>
          </div>
        </div>
      </div>
  );
};

export default GallerySection;
