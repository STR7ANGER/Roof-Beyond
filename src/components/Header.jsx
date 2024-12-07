import React from "react";
import NavBar from "./NavBar.jsx";

const Header = () => {
  return (
    <div
      className="relative min-h-screen bg-cover bg-center flex flex-col items-center justify-center w-full overflow-hidden"
      style={{ backgroundImage: "url('https://cdn.prod.website-files.com/63a02e61e7ffb565c30bcfc7/65fa5e6535ec537dc53bd0d1_modern%20house%20ideas.webp')" }}
      id="Header"
    >
      <NavBar />
      <div className="flex flex-col items-center justify-center flex-grow text-center text-white">
        <img className="mx-auto mb-4" src="/head.svg" alt="Header Icon" />
        <h1 className="text-4xl  md:text-6xl font-bold mb-4">
          Welcome to Roof & Beyond
        </h1>
        <p className="text-xl md:text-2xl">From a House Till Home</p>
      </div>
    </div>
  );
};

export default Header;
