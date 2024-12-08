import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { assets } from '../assets/assets.js';
import { useNavigate } from "react-router-dom";

const SignUp = () => {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    password: '',
    confirmPassword: '',
    role: 'buyer'
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (formData.password !== formData.confirmPassword) {
      alert("Passwords do not match!");
      return;
    }
    // Add your sign-up logic here
    console.log("Sign Up Data:", formData);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-100 via-white to-gray-100 flex items-center justify-center px-4 py-12">
      <motion.div 
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.5 }}
        className="bg-white rounded-2xl shadow-2xl w-full max-w-md p-8 border border-gray-200"
      >
        <div className="flex flex-col items-center mb-8">
          <motion.img 
            src={assets.logo} 
            alt="Roof & Beyond Logo" 
            className="h-24 w-24 rounded-full mb-4"
            initial={{ scale: 0.8, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ delay: 0.2 }}
          />
          <h2 className="text-3xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-blue-600 to-indigo-600">
            Roof & Beyond
          </h2>
          <p className="text-gray-600 mt-2">Create Your Account</p>
        </div>
        
        <form onSubmit={handleSubmit} className="space-y-4">
          <div className="flex space-x-4">
            <motion.input 
              type="text" 
              name="firstName"
              value={formData.firstName}
              onChange={handleChange}
              placeholder="First Name"
              required
              whileFocus={{ scale: 1.02 }}
              className="w-1/2 bg-gray-50 border border-gray-300 rounded-lg px-4 py-3 text-gray-800 placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
            <motion.input 
              type="text" 
              name="lastName"
              value={formData.lastName}
              onChange={handleChange}
              placeholder="Last Name"
              required
              whileFocus={{ scale: 1.02 }}
              className="w-1/2 bg-gray-50 border border-gray-300 rounded-lg px-4 py-3 text-gray-800 placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>
          
          <motion.input 
            type="email" 
            name="email"
            value={formData.email}
            onChange={handleChange}
            placeholder="Email Address"
            required
            whileFocus={{ scale: 1.02 }}
            className="w-full bg-gray-50 border border-gray-300 rounded-lg px-4 py-3 text-gray-800 placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
          
          <motion.input 
            type="password" 
            name="password"
            value={formData.password}
            onChange={handleChange}
            placeholder="Password"
            required
            whileFocus={{ scale: 1.02 }}
            className="w-full bg-gray-50 border border-gray-300 rounded-lg px-4 py-3 text-gray-800 placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
          
          <motion.input 
            type="password" 
            name="confirmPassword"
            value={formData.confirmPassword}
            onChange={handleChange}
            placeholder="Confirm Password"
            required
            whileFocus={{ scale: 1.02 }}
            className="w-full bg-gray-50 border border-gray-300 rounded-lg px-4 py-3 text-gray-800 placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
          
          <div className="w-full">
            <select 
              name="role"
              value={formData.role}
              onChange={handleChange}
              className="w-full bg-gray-50 border border-gray-300 rounded-lg px-4 py-3 text-gray-800 focus:outline-none focus:ring-2 focus:ring-blue-500"
            >
              <option value="buyer" className="bg-white">Buyer</option>
              <option value="seller" className="bg-white">Seller</option>
            </select>
          </div>
          
          <motion.button
            type="submit"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="w-full bg-gradient-to-r from-blue-600 to-indigo-600 
            text-white py-3 rounded-lg 
            transition-all duration-300 
            hover:from-blue-700 hover:to-indigo-700
            flex items-center justify-center space-x-2 
            group relative overflow-hidden"
          >
            <span>Create Account</span>
            <svg 
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
            </svg>
          </motion.button>
        </form>
        
        <div className="mt-6 text-center">
          <p className="text-gray-600">
            Already have an account? {' '}
            <a 
              onClick={ () => navigate("/Login")}
              className="text-blue-600 hover:text-blue-700 transition-colors"
              
            >
              Log In
            </a>
          </p>
        </div>
      </motion.div>
    </div>
  );
};

export default SignUp;