import ContactDetail from "../components/ContactDetail";
import ScrollToTop from "../components/Totop";
import UpperSection from "../components/UpperSection";

function Contact() {
  return (
    <>
      <ScrollToTop />
      <UpperSection name="Contact Us" />
      <ContactDetail />
    </>
  );
}

export default Contact;
