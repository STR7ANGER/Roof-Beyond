import React from "react";
import {
  Instagram,
  Linkedin,
  MapPin,
  Phone,
  Mail,
} from "lucide-react";
import { assets } from "../assets/assets";

const Footer = () => {
  return (
    <footer className="bg-gradient-to-r from-gray-900 via-black to-gray-900 bg-opacity-80 backdrop-blur-xl shadow-2xl h-[9vh] flex items-center justify-between px-8 text-white">
      <div className="flex items-center space-x-4">
        <img
          src={assets.logo}
          alt="Logo"
          className="h-25 w-20 object-contain"
        />
        <div className="text-2xl font-bold">Roof & Beyond</div>
        <div className="flex space-x-4 ml-8">
          <a href="#" className="hover:text-gray-300 transition-colors">
            <Linkedin size={24} />
          </a>
          <a href="#" className="hover:text-gray-300 transition-colors">
            <Instagram size={24} />
          </a>
        </div>
      </div>

      <div className="flex items-center space-x-6">
        <div className="flex items-center space-x-2">
          <MapPin size={20} />
          <span>123 Real Estate Lane</span>
        </div>
        <div className="flex items-center space-x-2">
          <Phone size={20} />
          <span>(555) 123-4567</span>
        </div>
        <div className="flex items-center space-x-2">
          <Mail size={20} />
          <span>contact@roofandbeyond.com</span>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
