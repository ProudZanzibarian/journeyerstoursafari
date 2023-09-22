import Activity from "../components/ActivitySection";
import BannerSection from "../components/BannerSection";
import BestPhotoSection from "../components/BestPhotoSection";
import CallBackSection from "../components/CallBackSection";
import Search from "../components/SearchSection";
import Testimonial from "../components/TestimonialSection";
import ZnzSection from "../components/ZnzSection";
import DestinationSection from "../components/DestinationSection";
import TzSection from "../components/TzSection";


function Home() {
  return (
    <>
      <BannerSection/>
      <Search/>
      <ZnzSection/>
      <TzSection/>
      <DestinationSection/>
      <CallBackSection/>
      <Activity/>
      <BestPhotoSection/>
      <Testimonial/>
    </>
  );
}

export default Home;
