import React from "react";
import {
  Instagram,
  Linkedin,
  MapPin,
  Phone,
  Mail,
  Github,
  Twitter,
} from "lucide-react";
import { assets } from "../assets/assets";

const Footer = () => {
  return (
    <footer id="Contact" className="bg-gradient-to-r from-gray-900 via-black to-gray-900 text-white py-12">
      <div className="container mx-auto px-4 grid md:grid-cols-4 gap-8">
        <div>
          <div className="flex items-center space-x-4 mb-4">
            <img
              src={assets.logo}
              alt="Logo"
              className="h-10 w-10 object-contain"
            />
            <h3 className="text-xl font-bold">Roof & Beyond</h3>
          </div>
          <p className="text-gray-400 text-sm">
            Transforming real estate experiences through innovative solutions.
          </p>
        </div>

        <div>
          <h4 className="font-semibold mb-4">Quick Links</h4>
          <ul className="space-y-2 text-sm">
            <li><a href="#" className="hover:text-blue-400">Home</a></li>
            <li><a href="#about" className="hover:text-blue-400">About</a></li>
            <li><a href="#projects" className="hover:text-blue-400">Projects</a></li>
          </ul>
        </div>

        <div>
          <h4 className="font-semibold mb-4">Legal</h4>
          <ul className="space-y-2 text-sm">
            <li><a href="" className="hover:text-blue-400">Privacy Policy</a></li>
            <li><a href="" className="hover:text-blue-400">Terms of Service</a></li>
            <li><a href="" className="hover:text-blue-400">Cookie Policy</a></li>
          </ul>
        </div>

        <div>
          <h4 className="font-semibold mb-4">Contact</h4>
          <div className="space-y-2 text-sm">
            <div className="flex items-center space-x-2">
              <MapPin size={16} /><span>123 Real Estate Lane</span>
            </div>
            <div className="flex items-center space-x-2">
              <Phone size={16} /><span>(555) 123-4567</span>
            </div>
            <div className="flex items-center space-x-2">
              <Mail size={16} /><span>contact@roofandbeyond.com</span>
            </div>
          </div>
        </div>

        <div className="col-span-full border-t border-gray-700 pt-6 mt-6 flex justify-between items-center">
          <p className="text-sm text-gray-400">
            © 2024 Roof & Beyond. All Rights Reserved.
          </p>
          <div className="flex space-x-4">
            <a href="#" className="text-gray-400 hover:text-white">
              <Linkedin size={20} />
            </a>
            <a href="#" className="text-gray-400 hover:text-white">
              <Instagram size={20} />
            </a>
            <a href="#" className="text-gray-400 hover:text-white">
              <Twitter size={20} />
            </a>
            <a href="#" className="text-gray-400 hover:text-white">
              <Github size={20} />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;