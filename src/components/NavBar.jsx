import React, { useState } from 'react';
import { assets } from '../assets/assets.js'
import { 
  Navbar, 
  NavbarBrand, 
  NavbarContent, 
  NavbarItem, 
  Link, 
  Button 
} from "@nextui-org/react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X } from 'lucide-react';

export default function AwesomeNavbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const navItems = [
    { label: 'Home', href: '#home' },
    { label: 'About', href: '#about' },
    { label: 'Projects', href: '#projects' },
    { label: 'Testimonials', href: '#testimonials' }
  ];

  return (
    <Navbar 
      shouldHideOnScroll
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
            damping: 10 
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
      <NavbarContent 
        className="hidden lg:flex space-x-6" 
        justify="center"
      >
        {navItems.map((item, index) => (
          <NavbarItem key={item.label}>
            <motion.a
              href={item.href}
              whileHover={{ 
                scale: 1.1, 
                textShadow: "0 0 8px rgba(99,102,241,0.6)" 
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
          initial={{ x: 20, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          whileHover={{ 
            scale: 1.05, 
            boxShadow: "0 0 15px rgba(99,102,241,0.5)" 
          }}
          whileTap={{ scale: 0.95 }}
          className="bg-gradient-to-r from-indigo-600 to-purple-600 
            text-white ml-4 px-5 py-3 rounded-full 
            transition-all duration-300 
            hover:from-indigo-700 hover:to-purple-700
            flex items-center space-x-2 
            group relative overflow-hidden"
        >
        
          <span className="transition-all duration-300 group-hover:translate-x-[-10px]">Sign Up</span>
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
            <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5 21 12m0 0-7.5 7.5M21 12H3" />
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
                  whileTap={{ scale: 0.95 }}
                  className="text-white text-lg font-medium"
                >
                  {item.label}
                </motion.a>
              ))}
              <motion.button
                whileTap={{ scale: 0.95 }}
                className="bg-gradient-to-r from-indigo-600 to-purple-600 
                  text-white px-8 py-3 rounded-full mt-4
                  group relative overflow-hidden"
              >
                <span className="transition-all duration-300 group-hover:translate-x-[-10px]">Sign Up</span>
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
                  <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5 21 12m0 0-7.5 7.5M21 12H3" />
                </motion.svg>
              </motion.button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </Navbar>
  );
}