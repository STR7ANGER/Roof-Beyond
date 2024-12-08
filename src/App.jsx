import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Header from "./components/Header.jsx";
import About from "./components/About.jsx";
import Testimonials from "./components/Testimonial.jsx";
import Projects from "./components/Projects.jsx";
import Footer from "./components/Footer.jsx";
import Pro from "./components/Pro";

const App = () => {
  return (
    <Router>
      <div>
        <Routes>
          <Route path="/" element={
            <>
              <Header />
              <About />
              <Projects />
              <Testimonials />
              <Footer />
            </>
          } />
          <Route path="/pro" element={<Pro />} />
        </Routes>
      </div>
    </Router>
  );
};

export default App;