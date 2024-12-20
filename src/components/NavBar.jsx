import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { assets } from "../assets/assets.js";
import {
  Navbar as NextUINavbar,
  NavbarBrand,
  NavbarContent,
  NavbarItem,
  Link,
  Button,
} from "@nextui-org/react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X } from "lucide-react";

function Navbar() {
  const navigate = useNavigate();
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isNavVisible, setIsNavVisible] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);

  const navItems = [
    { 
      label: "Home", 
      href: "#", 
      onClick: () => navigate("/") 
    },
    { 
      label: "About", 
      href: "#about",
      onClick: () => navigate("/Abt") 
    },
    {
      label: "Projects",
      href: "#projects",
      onClick: () => navigate("/Pro"),
    },
    { 
      label: "Seller", 
      href: "#Seller",
      onClick: () => navigate("/seller")  
    },
    { 
      label: "Testimonials", 
      href: "#testimonials",
      onClick: () => {
        if (window.location.pathname !== '/') {
          navigate('/');
        }
        
        setTimeout(() => {
          const testimonialSection = document.querySelector('#testimonials');
          if (testimonialSection) {
            testimonialSection.scrollIntoView({ behavior: 'smooth' });
          }
        }, 100);
      }
    },
    { 
      label: "Contact", 
      href: "#Contact",
      onClick: () => {
        const element = document.querySelector("#Contact");
        if (element) {
          element.scrollIntoView({ behavior: "smooth", block: "end" });
        }
      }
    },
  ];

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;

      // Show navbar when scrolling up
      if (currentScrollY < lastScrollY) {
        setIsNavVisible(true);
      }
      // Hide navbar when scrolling down and not at the top of the page
      else if (currentScrollY > lastScrollY && currentScrollY > 100) {
        setIsNavVisible(false);
      }

      setLastScrollY(currentScrollY);
    };

    // Add scroll event listener
    window.addEventListener("scroll", handleScroll, { passive: true });

    // Cleanup event listener
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [lastScrollY]);

  return (
    <motion.div
      initial={{ y: 0 }}
      animate={{ y: isNavVisible ? 0 : "-100%" }}
      transition={{ duration: 0.3, ease: "easeInOut" }}
      className="fixed top-0 left-0 right-0 z-50"
    >
      <NextUINavbar
        maxWidth="full"
        className="bg-gradient-to-r h-[9vh] from-gray-900 via-black to-gray-900 bg-opacity-80 backdrop-blur-xl shadow-2xl"
      >
        {/* Desktop & Mobile Logo */}
        <NavbarBrand className="flex items-center space-x-4">
          <motion.img
            src={assets.logo}
            alt="Company Logo"
            initial={{ scale: 0.8, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{
              type: "spring",
              stiffness: 300,
              damping: 10,
            }}
            className="h-16 w-16 rounded-full transition-all"
          />
          <motion.h1
            initial={{ x: -20, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            className="text-2xl font-bold text-white bg-clip-text text-transparent bg-gradient-to-r from-indigo-500 to-purple-500 tracking-wider"
          >
            ROOF & BEYOND
          </motion.h1>
        </NavbarBrand>

        {/* Desktop Navigation */}
        <NavbarContent className="hidden lg:flex space-x-6" justify="center">
          {navItems.map((item) => (
            <NavbarItem key={item.label}>
              <motion.a
                href={item.href}
                onClick={(e) => {
                  // Prevent default href behavior if onClick is present
                  if (item.onClick) {
                    e.preventDefault();
                    item.onClick();
                  }
                }}
                whileHover={{
                  scale: 1.1,
                  textShadow: "0 0 8px rgba(99,102,241,0.6)",
                }}
                whileTap={{ scale: 0.95 }}
                className="relative text-white text-sm font-medium group"
              >
                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-gradient-to-r from-indigo-500 to-purple-500 transition-all duration-300 group-hover:w-full"></span>
                {item.label}
              </motion.a>
            </NavbarItem>
          ))}
        </NavbarContent>

        {/* Mobile Menu Toggle */}
        <NavbarContent justify="end" className="lg:hidden">
          <motion.button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            whileTap={{ scale: 0.9 }}
            className="text-white focus:outline-none"
          >
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </motion.button>
        </NavbarContent>

        {/* Call to Action */}
        <NavbarContent justify="end" className="hidden lg:flex">
          <motion.button
            onClick={() => navigate("/signup")}
            initial={{ x: 20, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            whileHover={{
              scale: 1.05,
              boxShadow: "0 0 15px rgba(99,102,241,0.5)",
            }}
            whileTap={{ scale: 0.95 }}
            className="bg-gradient-to-r from-indigo-600 to-purple-600 
              text-white ml-4 px-5 py-3 rounded-full 
              transition-all duration-300 
              hover:from-indigo-700 hover:to-purple-700
              flex items-center space-x-2 
              group relative overflow-hidden"
          >
            <span className="transition-all duration-300 group-hover:translate-x-[-10px]">
              Sign Up
            </span>
            <motion.svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              className="w-5 h-5 absolute right-[-30px] top-1/2 transform -translate-y-1/2 
                transition-all duration-300 
                group-hover:translate-x-[-35px] 
                opacity-0 group-hover:opacity-100"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M13.5 4.5 21 12m0 0-7.5 7.5M21 12H3"
              />
            </motion.svg>
          </motion.button>
        </NavbarContent>

        {/* Mobile Menu Drawer */}
        <AnimatePresence>
          {isMenuOpen && (
            <motion.div
              initial={{ opacity: 0, y: -50 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -50 }}
              className="absolute top-full left-0 w-full bg-black/90 backdrop-blur-lg lg:hidden"
            >
              <div className="flex flex-col items-center space-y-4 py-6">
                {navItems.map((item) => (
                  <motion.a
                    key={item.label}
                    href={item.href}
                    onClick={(e) => {
                      // Close mobile menu and navigate
                      if (item.onClick) {
                        e.preventDefault();
                        item.onClick();
                      }
                      setIsMenuOpen(false);
                    }}
                    whileTap={{ scale: 0.95 }}
                    className="text-white text-lg font-medium"
                  >
                    {item.label}
                  </motion.a>
                ))}
                <motion.button
                  onClick={() => navigate("/signup")}
                  whileTap={{ scale: 0.95 }}
                  className="bg-gradient-to-r from-indigo-600 to-purple-600 
                    text-white px-8 py-3 rounded-full mt-4
                    group relative overflow-hidden"
                >
                  <span className="transition-all duration-300 group-hover:translate-x-[-10px]">
                    Sign Up
                  </span>
                  <motion.svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth={1.5}
                    stroke="currentColor"
                    className="w-5 h-5 absolute right-[-30px] top-1/2 transform -translate-y-1/2 
                      transition-all duration-300 
                      group-hover:translate-x-[-20px] 
                      opacity-0 group-hover:opacity-100"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M13.5 4.5 21 12m0 0-7.5 7.5M21 12H3"
                    />
                  </motion.svg>
                </motion.button>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </NextUINavbar>
    </motion.div>
  );
}

export default Navbar;