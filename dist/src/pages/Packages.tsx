import TourList from "../components/TourList";
import UpperSection from "../components/UpperSection";

function Packages() {
  return (
    <>
      <UpperSection name={"All Packages"} />
      <section className="package-section">
        <div className="container">
          <div className="section-heading text-center">
          </div>
          <div className="package-inner">
            <div className="row">
              <TourList limit={100} shortDesc={true} category="pck" />
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default Packages;
