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
        base: "bg-black bg-opacity-50 backdrop-blur-md h-24",         
        wrapper: "px-6 max-w-full",       
      }}     
    >       
      <NavbarBrand className="flex items-center space-x-4">         
        <img           
          src={assets.logo}           
          alt="Company Logo"           
          className="h-16 w-16"         
        />         
        <p className="font-bold text-white text-xl">ROOF & BEYOND</p>       
      </NavbarBrand>       
      <NavbarContent         
        className="absolute left-1/2 transform -translate-x-1/2 hidden lg:flex gap-8"       
        justify="center"       
      >         
        <NavbarItem>           
          <a              
            href="#"              
            className="group relative inline-block overflow-hidden px-8 py-3 focus:outline-none focus:ring"           
          >             
            <span className="absolute inset-x-0 bottom-0 h-[2px] bg-white transition-all group-hover:h-full group-active:bg-indigo-500" ></span>             
            <span className="relative text-sm font-medium text-white transition-colors group-hover:text-black" > 
              Home 
            </span>           
          </a>         
        </NavbarItem>         
        <NavbarItem>           
          <a              
            href="#"              
            className="group relative inline-block overflow-hidden px-8 py-3 focus:outline-none focus:ring"           
          >             
            <span className="absolute inset-x-0 bottom-0 h-[2px] bg-white transition-all group-hover:h-full group-active:bg-indigo-500" ></span>             
            <span className="relative text-sm font-medium text-white transition-colors group-hover:text-black" > 
              About 
            </span>           
          </a>         
        </NavbarItem>         
        <NavbarItem>           
          <a              
            href="#"              
            className="group relative inline-block overflow-hidden px-8 py-3 focus:outline-none focus:ring"           
          >             
            <span className="absolute inset-x-0 bottom-0 h-[2px] bg-white transition-all group-hover:h-full group-active:bg-indigo-500" ></span>             
            <span className="relative text-sm font-medium text-white transition-colors group-hover:text-black" > 
              Projects 
            </span>           
          </a>         
        </NavbarItem>         
        <NavbarItem isActive>           
          <a              
            href="#"              
            className="group relative inline-block overflow-hidden px-8 py-3 focus:outline-none focus:ring"           
          >             
            <span className="absolute inset-x-0 bottom-0 h-[2px] bg-white transition-all group-hover:h-full group-active:bg-indigo-500" ></span>             
            <span className="relative text-sm font-medium text-white transition-colors group-hover:text-black" > 
              Testimonials 
            </span>           
          </a>         
        </NavbarItem>       
      </NavbarContent>       
      <NavbarContent justify="end" className="space-x-4">         
        <NavbarItem>           
          <a              
            href="#"              
            className="group relative inline-flex items-center overflow-hidden rounded-lg bg-gray-800 px-8 py-3 text-white hover:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-gray-600 transition-all duration-300"           
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