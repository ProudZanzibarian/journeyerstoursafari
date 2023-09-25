import BannerSection from "../components/BannerSection";
import CallBackSection from "../components/CallBackSection";
import Search from "../components/SearchSection";
import Testimonial from "../components/TestimonialSection";
import ZnzSection from "../components/ZnzSection";
import TzSection from "../components/TzSection";
import Packages from "../components/PackageSection";

function Home() {


  return (
    <>
      <BannerSection/>
      <Search/>
      <ZnzSection/>
      <TzSection/>
      <Packages/>
      <CallBackSection/>
      <Testimonial/>
    </>
  );
}

export default Home;
