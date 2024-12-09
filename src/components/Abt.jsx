import React from "react";
import Navbar from "./NavBar";
import Footer from "./Footer";
import { Linkedin } from 'lucide-react';
import {
  VerticalTimeline,
  VerticalTimelineElement,
} from "react-vertical-timeline-component";
import "react-vertical-timeline-component/style.min.css";
import {
  BuildingOffice2Icon,
  LightBulbIcon,
  RocketLaunchIcon,
  TrophyIcon,
  GlobeAltIcon,
  StarIcon,
} from "@heroicons/react/24/solid";

// Extracted Timeline Component
const CompanyTimeline = () => {
  const companyMilestones = [
    {
      year: 2010,
      event: "Foundation",
      description:
        "Started as a small online platform to connect buyers and sellers of local properties.",
      icon: <BuildingOffice2Icon className="text-blue-500" />,
    },
    {
      year: 2013,
      event: "First Major Sale",
      description:
        "Facilitated our first multi-million-dollar property sale, earning customer trust.",
      icon: <TrophyIcon className="text-green-500" />,
    },
    {
      year: 2016,
      event: "Mobile App Launch",
      description:
        "Introduced a mobile app for seamless property search and instant inquiries.",
      icon: <LightBulbIcon className="text-yellow-500" />,
    },
    {
      year: 2018,
      event: "National Reach",
      description:
        "Expanded services to cover all major cities across the country.",
      icon: <GlobeAltIcon className="text-purple-500" />,
    },
    {
      year: 2020,
      event: "Eco-Friendly Properties",
      description:
        "Began promoting eco-friendly properties, aligning with sustainable living values.",
      icon: <StarIcon className="text-emerald-500" />,
    },
    {
      year: 2022,
      event: "AI-Driven Insights",
      description:
        "Implemented AI tools for personalized property recommendations and market analytics.",
      icon: <RocketLaunchIcon className="text-red-500" />,
    },
    {
      year: 2023,
      event: "Smart Home Listings",
      description:
        "Partnered with leading developers to list smart homes with integrated IoT solutions.",
      icon: <LightBulbIcon className="text-indigo-500" />,
    },
    {
      year: 2024,
      event: "Global Expansion",
      description:
        "Planning to expand services internationally, starting with key global cities.",
      icon: <RocketLaunchIcon className="text-cyan-500" />,
    },
  ];

  return (
    <div className="bg-gray-50 py-12">
      <h2 className="text-4xl font-bold text-center mb-10 text-gray-800">
        Our Evolutionary Journey
      </h2>
      <VerticalTimeline lineColor="blue">
        {companyMilestones.map((milestone) => (
          <VerticalTimelineElement
            key={milestone.year}
            date={milestone.year}
            iconStyle={{
              background: "white",
              color: milestone.icon.props.className.split(" ")[1],
            }}
            icon={milestone.icon}
            contentStyle={{
              background: "white",
              boxShadow:
                "0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06)",
            }}
            contentArrowStyle={{ borderRight: "7px solid blue" }}
          >
            <h3 className="text-xl font-semibold text-gray-900">
              {milestone.event}
            </h3>
            <p className="text-gray-600">{milestone.description}</p>
          </VerticalTimelineElement>
        ))}
      </VerticalTimeline>
    </div>
  );
};

const Abt = () => {
  const teamMembers = [
    {
      name: "Aditya",
      role: "Founder & CEO",
      description: "Visionary leader with 15 years of  management experience",
      image: "/adi.jpg",
      linkedin: "https://www.linkedin.com/in/aditya-maurya-31457b281",
    },
    {
      name: "Naval",
      role: "Chief Technical Officer",
      description: "Expert in innovative technologies and sustainable design",
      image: "/naval.png",
      linkedin: "https://www.linkedin.com/in/navalbihani15/",
    },
    {
      name: "Arjav",
      role: "Head of Project Design",
      description:
        "Award-winning architect specializing in residential and commercial design",
      image: "/arj.jpg",
      linkedin: "https://www.linkedin.com/in/arjavjain014/",
    },
  ];

  return (
    <>
      <Navbar />
      {/* Adjust top padding to match Navbar height */}
      <div className="bg-gray-50 min-h-screen pt-16">
        <div className="container mx-auto px-4 py-12">
          <section className="mb-16">
            <h1 className="text-5xl font-extrabold text-center text-gray-900 mb-8">
              Roof & Beyond: Building Dreams, Protecting Futures
            </h1>

            <div className="grid md:grid-cols-2 gap-12 items-center">
              <div>
                <img
                  src="https://alamedahistory.wordpress.com/files/2009/03/jean-and-little-bro.jpg"
                  alt="Roof & Beyond Company History"
                  className="rounded-lg shadow-2xl object-cover w-full h-96"
                />
              </div>
              <div>
                <h2 className="text-3xl font-bold text-gray-800 mb-6">
                  Our Journey of Excellence
                </h2>
                <p className="text-lg text-gray-700 leading-relaxed mb-6">
                  Founded with a passion for transforming roofing from a
                  necessity to an art form, Roof & Beyond has been pioneering
                  innovative solutions that blend cutting-edge technology with
                  unparalleled craftsmanship. Our commitment goes beyond mere
                  construction—we create protective spaces that tell your unique
                  story.
                </p>
                <div className="bg-blue-50 p-6 rounded-lg border-l-4 border-blue-500">
                  <blockquote className="italic text-gray-600">
                    "Every roof is a canvas, every project a masterpiece of
                    protection and design."
                    <span className="block text-right mt-2 text-gray-800">
                      — Sarah Thompson, Founder
                    </span>
                  </blockquote>
                </div>
              </div>
            </div>
          </section>

          <section className="mb-16">
            <h2 className="text-4xl font-bold text-center text-gray-900 mb-12">
              Meet Our Leadership
            </h2>
            <div className="grid md:grid-cols-3 gap-8">
              {teamMembers.map((member, index) => (
                <div
                  key={index}
                  className="bg-white rounded-lg shadow-lg overflow-hidden transform transition duration-300 hover:scale-105"
                >
                  <img
                    src={member.image}
                    alt={member.name}
                    className="w-full h-64 object-contain"
                  />
                  <div className="p-6">
                    <div className="flex justify-between items-center mb-2">
                      <h3 className="text-2xl font-bold text-gray-900">
                        {member.name}
                      </h3>
                      {member.linkedin && (
                        <a
                          href={member.linkedin}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="text-black-600 hover:text-blue-800 transition-colors"
                        >
                          <Linkedin size={24} />
                        </a>
                      )}
                    </div>
                    <p className="text-blue-600 font-semibold mb-4">
                      {member.role}
                    </p>
                    <p className="text-gray-700">{member.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </section>

          <CompanyTimeline />
        </div>
      </div>
      <Footer />
    </>
  );
};

export default Abt;
