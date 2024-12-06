import React from 'react';
import { assets } from '../assets/assets.js';

const About = () => {
  return (
    <section className="bg-white">
      <div className="mx-auto max-w-screen-xl px-4 py-8 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 gap-4 md:grid-cols-2 md:items-center md:gap-8">
          <div>
            <img
              src={assets.brand_img}
              className="rounded-lg w-full h-auto object-cover"
              alt="Roof & Beyond Company"
            />
          </div>
          <div>
            <div>
              <h2 className="text-2xl font-semibold text-gray-900 sm:text-3xl mb-4">
                Roof & Beyond: Your Trusted Roofing Experts
              </h2>
              <p className="text-gray-700 leading-relaxed">
                At Roof & Beyond, we bring decades of expertise to every roofing project. Our dedicated team combines skilled craftsmanship with cutting-edge technology to deliver superior roofing solutions tailored to your unique needs.
              </p>
            </div>
            <div className="mt-8">
              <h3 className="text-lg font-medium text-gray-900">About Our Brand</h3>
              <p className="text-gray-700 leading-relaxed">
                Passionate About Properties, Dedicated to Your Vision
              </p>
              <div className="grid grid-cols-2 gap-4 mt-4">
                <div>
                  <h4 className="text-xl font-medium text-gray-900">10+ Years</h4>
                  <p className="text-gray-700">of Excellence</p>
                </div>
                <div>
                  <h4 className="text-xl font-medium text-gray-900">12+</h4>
                  <p className="text-gray-700">Projects Completed</p>
                </div>
                <div>
                  <h4 className="text-xl font-medium text-gray-900">20+ Mn. Sq. Ft.</h4>
                  <p className="text-gray-700">Delivered</p>
                </div>
                <div>
                  <h4 className="text-xl font-medium text-gray-900">25+</h4>
                  <p className="text-gray-700">Ongoing Projects</p>
                </div>
              </div>
              <div className="mt-4">
                <button className="bg-blue-500 hover:bg-blue-600 text-white font-medium py-2 px-4 rounded">
                  Learn more
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;