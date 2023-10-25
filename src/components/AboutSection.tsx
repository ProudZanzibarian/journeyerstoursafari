import React from "react";
import UpperSection from "./UpperSection";

const AboutSection: React.FC = () => {
  return (
    <main id="content" className="site-main">
      <UpperSection name="About Us" />
      <section className="about-section about-page-section">
        <div className="about-service-wrap">
          <div className="container">
            <div className="section-heading">
              <div className="row align-items-end">
                <div className="col-lg-6">
                  <h5 className="dash-style">ABOUT US</h5>
                  <img src="./src/assets/images/Journeyer.png" width={200} alt="" />
                </div>
                <div className="col-lg-6">
                  <div className="section-disc">
                    <p>
                      Located on the enchanting Zanzibar Island, Journeyers Tour
                      & Safari is a tour operator for Zanzibar Archipelago and
                      the Swahili Coast. We have also partnered with selected
                      service and experience providers on the Tanzania mainland,
                      through whom we offer safari packages, authentic cultural
                      encounters and mountain tours. Provide memorable,
                      authentic visitor experiences to local and international
                      travellers, with a focus on giving travellers an
                      experience of the warmth and diverse cultures of
                      Tanzania’s national community, the magic and sheer wonders
                      of its climate, geography, wilderness and wildlife –
                      safely, comfortably and affordably, while enriching both
                      host communities’ and visitors’ lives alike, through
                      shared knowledge and understanding. Use guest experiences
                      to our country to making better places for people to live
                      in and better places for people to visit. Through
                      philanthropy, give to local communities which do not
                      directly benefit from gains of tourism.
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <div className="about-service-container">
              <div className="row">
                <div className="about-service">
                  <div className="about-service-content">
                    <h4>OUR MISSION</h4>
                    <p>
                      Provide memorable, authentic visitor experiences to local
                      and international travellers, with a focus on giving
                      travellers an experience of the warmth and diverse
                      cultures of Tanzania’s national community, the magic and
                      sheer wonders of its climate, geography, wilderness and
                      wildlife – safely, comfortably and affordably, while
                      enriching both host communities’ and visitors’ lives
                      alike, through shared knowledge and understanding. Use
                      guest experiences to our country to making better places
                      for people to live in and better places for people to
                      visit. Through philanthropy, give to local communities
                      which do not directly benefit from gains of tourism. 


                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
};

export default AboutSection;
