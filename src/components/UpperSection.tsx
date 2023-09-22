import React from "react";

interface UpperSectionProps {
  name: string;
}

const UpperSection: React.FC<UpperSectionProps> = ({ name }) => {
  return (
    <section className="inner-banner-wrap">
      <div
        className="inner-baner-container"
        style={{
          backgroundImage: "url(src/assets/images/banner2.jpeg)"
        }}
      >
        <div className="container">
          <div className="inner-banner-content">
            <h1 className="inner-title">{name}</h1>
          </div>
        </div>
      </div>
      <div className="inner-shape"></div>
    </section>
  );
};

export default UpperSection;
