import ScrollToTop from "../components/Totop";
import TourList from "../components/TourList";
import UpperSection from "../components/UpperSection";

function ZanExcursion() {
  return (
    <>
    <ScrollToTop/>
      <UpperSection name={"Zanzibar Excursion"} />
      <section className="package-section">
        <div className="container">
          <div className="section-heading text-center">
            <div className="row">
              <div className="col-lg-8 offset-lg-2">
                <h5 className="dash-style">Zanzibar Day Trips</h5>
                <p>
                  Zanzibar is an archipelago about 86 km long and 39 km wide.
                  It’s formed by two main islands, Unguja (commonly known
                  as Zanzibar) and Pemba, as well as several smaller islands
                  including Mafia, Chumbe and Mnemba Island. It's the place
                  endowed to have nice people, beautiful beaches, weather and
                  variety of tropical fruits. Zanzibar is also well known for
                  growing spices and that's why is called spice island.
                </p>
              </div>
            </div>
          </div>
          <div className="package-inner">
            <div className="row">
              <TourList limit={100} shortDesc={true} category="znz" />
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default ZanExcursion;
