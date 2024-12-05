import React from "react";

import {
  Navbar,
  NavbarBrand,
  NavbarContent,
  NavbarItem,
  Link,
  Button,
} from "@nextui-org/react";
import { assets } from "../assets/assets.js";

export default function App() {
  return (
    <Navbar
      shouldHideOnScroll
      classNames={{
        base: "bg-black bg-opacity-50 backdrop-blur-md h-20",
        wrapper: "px-6 max-w-full",
      }}
    >
      <NavbarBrand className="flex items-center space-x-4">
        <img
          src={assets.logo}
          alt="Company Logo"
          className="h-12 w-12"
        />
        <p className="font-bold text-white text-xl">ROOF & BEYOND</p>
      </NavbarBrand>
      <NavbarContent
        className="absolute left-1/2 transform -translate-x-1/2 hidden sm:flex gap-8"
        justify="center"
      >
        <NavbarItem>
          <Link
            color="foreground"
            href="#"
            className="text-lg text-white hover:text-indigo-300"
          >
            Home
          </Link>
        </NavbarItem>
        <NavbarItem>
          <Link
            color="foreground"
            href="#"
            className="text-lg text-white hover:text-indigo-300"
          >
            About
          </Link>
        </NavbarItem>
        <NavbarItem>
          <Link
            color="foreground"
            href="#"
            className="text-lg text-white hover:text-indigo-300"
          >
            Projects
          </Link>
        </NavbarItem>
        <NavbarItem isActive>
          <Link
            href="#"
            aria-current="page"
            className="text-lg text-white hover:text-indigo-300"
          >
            Testimonials
          </Link>
        </NavbarItem>
      </NavbarContent>
      <NavbarContent justify="end" className="space-x-4">
        <NavbarItem>
          <a 
            href="#" 
            className="group relative inline-flex items-center overflow-hidden rounded bg-indigo-600 px-8 py-3 text-white focus:outline-none focus:ring active:bg-indigo-500"
          >
            <span className="absolute -end-full transition-all group-hover:end-4">
              <svg 
                className="size-5" 
                xmlns="http://www.w3.org/2000/svg" 
                fill="none" 
                viewBox="0 0 24 24" 
                stroke="currentColor"
              >
                <path 
                  strokeLinecap="round" 
                  strokeLinejoin="round" 
                  strokeWidth="2" 
                  d="M17 8l4 4m0 0l-4 4m4-4H3" 
                />
              </svg>
            </span>
            <span className="text-sm font-medium transition-all group-hover:me-4">
              Sign Up
            </span>
          </a>
        </NavbarItem>
      </NavbarContent>
    </Navbar>
  );
}