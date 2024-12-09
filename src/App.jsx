import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { ScrollAnimation } from './components/ScrollAnimation';
import Header from "./components/Header.jsx";
import About from "./components/About.jsx";
import Testimonials from "./components/Testimonial.jsx";
import Projects from "./components/Projects.jsx";
import Footer from "./components/Footer.jsx";
import Pro from "./components/Pro";
import Abt from "./components/Abt.jsx";
import SignUp from "./components/sign_up.jsx";
import Login from "./components/login.jsx";

const App = () => {
  return (
    <Router>
      <div>
        {/* Fixed Navbar */}
        <Header />

        <Routes>
          <Route
            path="/"
            element={
              <>
                <ScrollAnimation animationStyle="slide-left">
                  <About />
                </ScrollAnimation>
                <ScrollAnimation animationStyle="slide-right">
                  <Projects />
                </ScrollAnimation>
                <ScrollAnimation animationStyle="fade">
                  <Testimonials />
                </ScrollAnimation>
                <ScrollAnimation animationStyle="scale">
                  <Footer />
                </ScrollAnimation>
              </>
            }
          />
          <Route path="/pro" element={<Pro />} />
          <Route path="/abt" element={<Abt />} />
          <Route path="/signup" element={<SignUp />} />
          <Route path="/login" element={<Login />} />
        </Routes>
      </div>
    </Router>
  );
};

export default App;
