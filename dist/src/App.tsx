import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Header from "./components/Header.tsx";
import Home from "./pages/Home.tsx";
import Footer from "./components/Footer.tsx";
import About from "./pages/About.tsx";
import Gallery from "./pages/Gallery.tsx";
import Package from "./pages/Package.tsx";
import Packages from "./pages/Packages.tsx";
import Contact from "./pages/Contact.tsx";
import Tanzania from "./pages/Tanzania.tsx";
import Zanzibar from "./pages/Zanzibar.tsx";
// import "../src/assets/style.css";

function App() {
  return (
    <Router>
      <div className="App">
        <div id="page" className="full-page">
          <Header />
          <main id="content" className="site-main">
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/about" element={<About />} />
              <Route path="/gallery" element={<Gallery />} />
              <Route path="/packages" element={<Packages />} />
              <Route path="/package/:id" element={<Package />} />
              <Route path="/contact" element={<Contact />} />
              <Route path="/tanzania" element={<Tanzania />} />
              <Route path="/zanzibar" element={<Zanzibar />} />

            </Routes>
          </main>
          <Footer />
        </div>
      </div>
    </Router>
  );
}

export default App;
