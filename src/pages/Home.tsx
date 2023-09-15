import Activity from "../components/ActivitySection";
import BannerSection from "../components/BannerSection";
import BestPhotoSection from "../components/BestPhotoSection";
import CallBackSection from "../components/CallBackSection";
import Search from "../components/SearchSection";
import Testimonial from "../components/TestimonialSection";
import Package from "../components/packageSection";


function Home() {
  return (
    <>
      <BannerSection/>
      <Search/>
      <Package/>
      <CallBackSection/>
      <Activity/>
      <BestPhotoSection/>
      <Testimonial/>
    </>
  );
}

export default Home;
