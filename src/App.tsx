import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Header from "./components/Header.tsx";
import Home from "./pages/Home.tsx";
import Footer from "./components/Footer.tsx";
import About from "./pages/About.tsx";
import Gallery from "./pages/Gallery.tsx";
import Package from "./components/packageSection.tsx";
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
            <Route path="/about" element={<About/>} />
            <Route path="/gallery" element={<Gallery/>} />
            <Route path="/package/:id" element={<Package/>} />
          </Routes>
          </main>
          <Footer />
        </div>
      </div>
    </Router>
  );
}

export default App;
