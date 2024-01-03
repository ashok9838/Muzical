import About from "./my components/About";
import Footer from "./my components/Footer";
import Header from "./my components/Header";
import Home from "./my components/Home";
import Contact from "./my components/Contact";
import Blog from "./my components/Blog";

import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

function App() {
  return (
    <>
      <Router>

      <Header />

      <Routes>

      <Route exact path="/" element={<Home />} />
      <Route exact path="/about" element={<About />} />
      <Route exact path="/contact" element={<Contact />} />
      <Route exact path="/blog" element={<Blog />} />

      </Routes>

      <Footer />

      </Router>
    </>
  );
}

export default App;
