import React, { useState } from "react";
import Navbar from "./NavBar";
import Footer from "./Footer";
import "./Abt.css";

const Abt = () => {
  return (
    <>
      <Navbar />
      <div>
        <div className="abt-container">
          <h1 className="abt-title">Welcome to the Madness!</h1>
          <p className="abt-description">
            This is not your typical About page. Prepare yourself for the
            ultimate rollercoaster of information and chaos. 🤪
          </p>
          <div className="abt-grid">
            <div className="abt-item neon-border">🔥 We love coding</div>
            <div className="abt-item neon-border">🎮 Gaming is life</div>
            <div className="abt-item neon-border">💡 Innovation is key</div>
            <div className="abt-item neon-border">🚀 Sky is not the limit</div>
          </div>
          <div className="abt-crazy-section">
            <h2 className="abt-subtitle">Crazy Facts</h2>
            <ul className="abt-list">
              <li>We once built a website in under 24 hours! ⏱️</li>
              <li>Our mascot is a coding cat named Debug. 🐱</li>
              <li>Every bug teaches us something new! 🐛</li>
            </ul>
          </div>
          <div className="abt-disco">
            <p>🎉 Let's make it disco! 🎉</p>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default Abt;
