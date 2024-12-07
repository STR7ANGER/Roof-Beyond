import React from "react";
import { assets } from "../assets/assets.js";

const About = () => {
  return (
    <section id="about" className="bg-white">
      <div className="mx-auto max-w-screen-xl px-4 py-8 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 gap-4 md:grid-cols-2 md:items-center md:gap-8">
          <div>
            <img
              src={assets.brand_img}
              className="rounded-lg w-full h-auto object-cover"
              alt="Roof & Beyond Company"
            />
          </div>
          <div className="p-8 sm:p-12 bg-white">
            <div>
              <h2 className="text-4xl font-extrabold text-gray-900 sm:text-5xl mb-6">
                Roof & Beyond: Your Trusted Experts
              </h2>
              <hr className="border-t-2 border-gray-400 mb-4" />
              <p className="text-lg text-gray-700 leading-relaxed">
                At Roof & Beyond, we bring decades of expertise to every
                project. Our dedicated team combines skilled professionals with
                cutting-edge technology to deliver superior results tailored to
                your unique needs and vision.
              </p>
            </div>
            <div className="mt-12">
              <h3 className="text-2xl font-bold text-gray-900 mb-2">
                About Our Brand
              </h3>
              <hr className="border-t-2 border-gray-400 mb-4" />
              <p className="text-lg text-gray-700 leading-relaxed">
                Passionate About Properties, Dedicated to Your Vision
              </p>
              <div className="grid grid-cols-2 gap-6 mt-6">
                <div>
                  <h4 className="text-2xl font-bold text-gray-900">
                    10+ Years
                  </h4>
                  <p className="text-lg text-gray-700">of Excellence</p>
                </div>
                <div>
                  <h4 className="text-2xl font-bold text-gray-900">12+</h4>
                  <p className="text-lg text-gray-700">Projects Completed</p>
                </div>
                <div>
                  <h4 className="text-2xl font-bold text-gray-900">
                    20+ Mn. Sq. Ft.
                  </h4>
                  <p className="text-lg text-gray-700">Delivered</p>
                </div>
                <div>
                  <h4 className="text-2xl font-bold text-gray-900">25+</h4>
                  <p className="text-lg text-gray-700">Ongoing Projects</p>
                </div>
              </div>
              <div className="mt-6">
                <hr className="border-t-2 border-gray-400 mb-4" />
                <button className="bg-blue-600 hover:bg-blue-700 text-white text-lg font-bold py-3 px-6 rounded-lg">
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
