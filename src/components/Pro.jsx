import React, { useState } from "react";
import { Star, Filter, X } from "lucide-react";
import Navbar from "./NavBar";
import Footer from "./Footer";

const ProProjectCard = ({
  image1,
  image2,
  title,
  price,
  description,
  type,
  rating,
}) => {
  const renderStars = (rating) => {
    const fullStars = Math.floor(rating);
    const hasHalfStar = rating % 1 !== 0;

    return (
      <div className="flex items-center">
        {[...Array(5)].map((_, index) => {
          if (index < fullStars) {
            return (
              <Star
                key={index}
                className="w-4 h-4 text-yellow-500 fill-current"
              />
            );
          }
          if (hasHalfStar && index === fullStars) {
            return (
              <div key={index} className="relative">
                <Star className="w-4 h-4 text-gray-300 fill-current" />
                <Star
                  className="w-4 h-4 text-yellow-500 fill-current absolute top-0 left-0 overflow-hidden"
                  style={{ width: `${(rating % 1) * 100}%` }}
                />
              </div>
            );
          }
          return (
            <Star key={index} className="w-4 h-4 text-gray-300 fill-current" />
          );
        })}
        <span className="ml-2 text-sm text-gray-600">({rating})</span>
      </div>
    );
  };

  return (
    <div className="group flex flex-col h-full bg-white shadow-lg rounded-xl overflow-hidden hover:shadow-xl transition-shadow duration-300">
      <div className="relative h-[400px] w-full flex-shrink-0">
        <img
          src={image1}
          alt={title}
          className="absolute inset-0 h-full w-full object-cover group-hover:opacity-0 opacity-100 transition-opacity duration-300"
        />
        <img
          src={image2}
          alt={title}
          className="absolute inset-0 h-full w-full object-cover opacity-0 group-hover:opacity-100 transition-opacity duration-300"
        />
        <div className="absolute top-4 left-4 bg-white/80 px-2 py-1 rounded-md text-xs font-medium">
          {type}
        </div>
      </div>
      <div className="p-4 flex flex-col flex-grow">
        <div className="flex justify-between items-center mb-2">
          <h3 className="text-sm text-gray-700 group-hover:underline group-hover:underline-offset-4 font-semibold">
            {title}
          </h3>
          <span className="text-sm font-bold text-gray-900">{price}</span>
        </div>
        <div className="flex flex-col flex-grow">
          {renderStars(rating)}
          <p className="text-pretty text-xs text-gray-500 line-clamp-2 mt-2">
            {description}
          </p>
        </div>
      </div>
    </div>
  );
};

const Pro = () => {
  const projectsData = [
    {
      image1:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRPFcNU6MeNKC6D4CMfhOPpNIPmDUc_iuFeFg&s",
      image2:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSCq15NgupyEYTXYsFHmwzw8ese-ppMO1GZ-A&s",
      title: "Modern Urban House | Los Angeles",
      price: "$1,200,000",
      description:
        "Sleek design with contemporary amenities in the heart of the city.",
      type: "House",
      rating: 5,
    },
    {
      image1:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRPFcNU6MeNKC6D4CMfhOPpNIPmDUc_iuFeFg&s",
      image2:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSCq15NgupyEYTXYsFHmwzw8ese-ppMO1GZ-A&s",
      title: "Coastal Bungalow | Malibu",
      price: "$850,000",
      description: "Charming seaside bungalow with panoramic ocean views.",
      type: "Bungalow",
      rating: 4,
    },
    {
      image1:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRPFcNU6MeNKC6D4CMfhOPpNIPmDUc_iuFeFg&s",
      image2:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSCq15NgupyEYTXYsFHmwzw8ese-ppMO1GZ-A&s",
      title: "Luxury Mediterranean Villa | Santorini",
      price: "$5,600,000",
      description:
        "Expansive villa with intricate architectural details and lush gardens.",
      type: "Villa",
      rating: 4,
    },
    {
      image1:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRPFcNU6MeNKC6D4CMfhOPpNIPmDUc_iuFeFg&s",
      image2:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSCq15NgupyEYTXYsFHmwzw8ese-ppMO1GZ-A&s",
      title: "Rustic Countryside Estate | Napa Valley",
      price: "$1,750,000",
      description: "Tranquil country home with acres of private land.",
      type: "Countryside Home",
      rating: 4,
    },
    {
      image1:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRPFcNU6MeNKC6D4CMfhOPpNIPmDUc_iuFeFg&s",
      image2:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSCq15NgupyEYTXYsFHmwzw8ese-ppMO1GZ-A&s",
      title: "Downtown Penthouse | New York",
      price: "$3,250,000",
      description: "Luxury penthouse with 360-degree city skyline views.",
      type: "Penthouse",
      rating: 5,
    },
    {
      image1:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRPFcNU6MeNKC6D4CMfhOPpNIPmDUc_iuFeFg&s",
      image2:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSCq15NgupyEYTXYsFHmwzw8ese-ppMO1GZ-A&s",
      title: "Smart Urban Apartment | San Francisco",
      price: "$650,000",
      description:
        "Modern apartment with smart home technology and minimalist design.",
      type: "Apartment",
      rating: 3,
    },
    {
      image1:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRPFcNU6MeNKC6D4CMfhOPpNIPmDUc_iuFeFg&s",
      image2:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSCq15NgupyEYTXYsFHmwzw8ese-ppMO1GZ-A&s",
      title: "Compact City Flat | London",
      price: "$450,000",
      description: "Efficient living space in prime urban location.",
      type: "Flat",
      rating: 1,
    },
    {
      image1:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRPFcNU6MeNKC6D4CMfhOPpNIPmDUc_iuFeFg&s",
      image2:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSCq15NgupyEYTXYsFHmwzw8ese-ppMO1GZ-A&s",
      title: "Sunny Beach Bungalow | Miami",
      price: "$750,000",
      description:
        "Relaxing beachfront property with stunning views of the sunset.",
      type: "Bungalow",
      rating: 5,
    },
    {
      image1:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRPFcNU6MeNKC6D4CMfhOPpNIPmDUc_iuFeFg&s",
      image2:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSCq15NgupyEYTXYsFHmwzw8ese-ppMO1GZ-A&s",
      title: "Mountain View Villa | Aspen",
      price: "$3,800,000",
      description:
        "A luxurious villa nestled in the mountains with breathtaking views.",
      type: "Villa",
      rating: 5,
    },
    {
      image1:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRPFcNU6MeNKC6D4CMfhOPpNIPmDUc_iuFeFg&s",
      image2:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSCq15NgupyEYTXYsFHmwzw8ese-ppMO1GZ-A&s",
      title: "Charming Suburban House | Chicago",
      price: "$600,000",
      description:
        "A cozy house perfect for families in a peaceful suburban neighborhood.",
      type: "House",
      rating: 4,
    },
    {
      image1:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRPFcNU6MeNKC6D4CMfhOPpNIPmDUc_iuFeFg&s",
      image2:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSCq15NgupyEYTXYsFHmwzw8ese-ppMO1GZ-A&s",
      title: "Luxury City Penthouse | Dubai",
      price: "$8,000,000",
      description:
        "An extravagant penthouse offering a panoramic view of the city skyline.",
      type: "Penthouse",
      rating: 5,
    },
    {
      image1:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRPFcNU6MeNKC6D4CMfhOPpNIPmDUc_iuFeFg&s",
      image2:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSCq15NgupyEYTXYsFHmwzw8ese-ppMO1GZ-A&s",
      title: "Eco-Friendly House | Portland",
      price: "$900,000",
      description:
        "Sustainable living with energy-efficient designs and solar panels.",
      type: "House",
      rating: 4,
    },
    {
      image1:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRPFcNU6MeNKC6D4CMfhOPpNIPmDUc_iuFeFg&s",
      image2:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSCq15NgupyEYTXYsFHmwzw8ese-ppMO1GZ-A&s",
      title: "Seaside Bungalow | Bali",
      price: "$1,100,000",
      description: "A beautiful bungalow by the sea, perfect for relaxation.",
      type: "Bungalow",
      rating: 4,
    },
    {
      image1:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRPFcNU6MeNKC6D4CMfhOPpNIPmDUc_iuFeFg&s",
      image2:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSCq15NgupyEYTXYsFHmwzw8ese-ppMO1GZ-A&s",
      title: "Luxury Countryside Home | Tuscany",
      price: "$2,500,000",
      description: "A sprawling countryside estate with luxurious amenities.",
      type: "Countryside Home",
      rating: 5,
    },
    {
      image1:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRPFcNU6MeNKC6D4CMfhOPpNIPmDUc_iuFeFg&s",
      image2:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSCq15NgupyEYTXYsFHmwzw8ese-ppMO1GZ-A&s",
      title: "Urban Loft Apartment | Paris",
      price: "$950,000",
      description: "Stylish and open-plan apartment in the heart of the city.",
      type: "Apartment",
      rating: 3,
    },
    {
      image1:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRPFcNU6MeNKC6D4CMfhOPpNIPmDUc_iuFeFg&s",
      image2:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSCq15NgupyEYTXYsFHmwzw8ese-ppMO1GZ-A&s",
      title: "Chic Studio Flat | Berlin",
      price: "$300,000",
      description:
        "Compact and chic studio flat in a vibrant urban neighborhood.",
      type: "Flat",
      rating: 2,
    },
    {
      image1:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRPFcNU6MeNKC6D4CMfhOPpNIPmDUc_iuFeFg&s",
      image2:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSCq15NgupyEYTXYsFHmwzw8ese-ppMO1GZ-A&s",
      title: "Modern Villa in the Hills | Beverly Hills",
      price: "$6,500,000",
      description:
        "Contemporary villa with floor-to-ceiling windows and hilltop views.",
      type: "Villa",
      rating: 5,
    },
    {
      image1:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRPFcNU6MeNKC6D4CMfhOPpNIPmDUc_iuFeFg&s",
      image2:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSCq15NgupyEYTXYsFHmwzw8ese-ppMO1GZ-A&s",
      title: "Grand Country Estate | Virginia",
      price: "$12,000,000",
      description:
        "An expansive estate with a grand mansion and extensive grounds.",
      type: "Countryside Home",
      rating: 4,
    },
    {
      image1:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRPFcNU6MeNKC6D4CMfhOPpNIPmDUc_iuFeFg&s",
      image2:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSCq15NgupyEYTXYsFHmwzw8ese-ppMO1GZ-A&s",
      title: "Small Beach Bungalow | Key West",
      price: "$450,000",
      description: "A cozy, affordable bungalow just steps from the beach.",
      type: "Bungalow",
      rating: 3,
    },
    {
      image1:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRPFcNU6MeNKC6D4CMfhOPpNIPmDUc_iuFeFg&s",
      image2:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSCq15NgupyEYTXYsFHmwzw8ese-ppMO1GZ-A&s",
      title: "Luxury City Apartment | Tokyo",
      price: "$2,000,000",
      description:
        "A high-end city apartment with modern features and city views.",
      type: "Apartment",
      rating: 4,
    },
    {
      image1:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRPFcNU6MeNKC6D4CMfhOPpNIPmDUc_iuFeFg&s",
      image2:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSCq15NgupyEYTXYsFHmwzw8ese-ppMO1GZ-A&s",
      title: "Spacious Countryside House | Colorado",
      price: "$1,500,000",
      description:
        "A sprawling house with a large garden and scenic mountain views.",
      type: "House",
      rating: 5,
    },
    {
      image1:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRPFcNU6MeNKC6D4CMfhOPpNIPmDUc_iuFeFg&s",
      image2:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSCq15NgupyEYTXYsFHmwzw8ese-ppMO1GZ-A&s",
      title: "Lakefront Cabin | Montana",
      price: "$450,000",
      description: "Cozy cabin by the lake with stunning water views.",
      type: "Cabin",
      rating: 3,
    },
    {
      image1:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRPFcNU6MeNKC6D4CMfhOPpNIPmDUc_iuFeFg&s",
      image2:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSCq15NgupyEYTXYsFHmwzw8ese-ppMO1GZ-A&s",
      title: "Modern Beachfront Apartment | Maldives",
      price: "$1,200,000",
      description: "Luxury apartment with panoramic oceanfront views.",
      type: "Apartment",
      rating: 4,
    },
    {
      image1:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRPFcNU6MeNKC6D4CMfhOPpNIPmDUc_iuFeFg&s",
      image2:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSCq15NgupyEYTXYsFHmwzw8ese-ppMO1GZ-A&s",
      title: "Rustic Mountain Cabin | Switzerland",
      price: "$600,000",
      description: "A charming retreat nestled in the Swiss Alps.",
      type: "Cabin",
      rating: 5,
    },
    {
      image1:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRPFcNU6MeNKC6D4CMfhOPpNIPmDUc_iuFeFg&s",
      image2:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSCq15NgupyEYTXYsFHmwzw8ese-ppMO1GZ-A&s",
      title: "Charming Countryside Cottage | Ireland",
      price: "$350,000",
      description: "Idyllic cottage surrounded by lush green fields.",
      type: "Cottage",
      rating: 3,
    },
    {
      image1:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRPFcNU6MeNKC6D4CMfhOPpNIPmDUc_iuFeFg&s",
      image2:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSCq15NgupyEYTXYsFHmwzw8ese-ppMO1GZ-A&s",
      title: "Urban Skyline Penthouse | Sydney",
      price: "$2,400,000",
      description: "Modern penthouse with stunning harbor views.",
      type: "Penthouse",
      rating: 4,
    },
    {
      image1:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRPFcNU6MeNKC6D4CMfhOPpNIPmDUc_iuFeFg&s",
      image2:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSCq15NgupyEYTXYsFHmwzw8ese-ppMO1GZ-A&s",
      title: "Luxury Desert Villa | Dubai",
      price: "$5,800,000",
      description: "Extravagant villa in the heart of the desert city.",
      type: "Villa",
      rating: 5,
    },
    {
      image1:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRPFcNU6MeNKC6D4CMfhOPpNIPmDUc_iuFeFg&s",
      image2:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSCq15NgupyEYTXYsFHmwzw8ese-ppMO1GZ-A&s",
      title: "Modern Studio Apartment | Tokyo",
      price: "$550,000",
      description: "Compact yet stylish apartment in the city center.",
      type: "Apartment",
      rating: 4,
    },
    {
      image1:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRPFcNU6MeNKC6D4CMfhOPpNIPmDUc_iuFeFg&s",
      image2:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSCq15NgupyEYTXYsFHmwzw8ese-ppMO1GZ-A&s",
      title: "Sunny Beachfront Bungalow | Hawaii",
      price: "$1,050,000",
      description: "Relaxing beachfront property with direct beach access.",
      type: "Bungalow",
      rating: 5,
    },
    {
      image1:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRPFcNU6MeNKC6D4CMfhOPpNIPmDUc_iuFeFg&s",
      image2:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSCq15NgupyEYTXYsFHmwzw8ese-ppMO1GZ-A&s",
      title: "Historic City House | Rome",
      price: "$900,000",
      description: "Classic house with historic charm and modern upgrades.",
      type: "House",
      rating: 4,
    },
    {
      image1:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRPFcNU6MeNKC6D4CMfhOPpNIPmDUc_iuFeFg&s",
      image2:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSCq15NgupyEYTXYsFHmwzw8ese-ppMO1GZ-A&s",
      title: "Eco-Friendly Home | Portland",
      price: "$700,000",
      description: "Sustainable home with solar panels and modern features.",
      type: "House",
      rating: 5,
    },
    {
      image1:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRPFcNU6MeNKC6D4CMfhOPpNIPmDUc_iuFeFg&s",
      image2:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSCq15NgupyEYTXYsFHmwzw8ese-ppMO1GZ-A&s",
      title: "Luxury Hilltop Villa | Tuscany",
      price: "$3,500,000",
      description: "Luxurious villa with panoramic countryside views.",
      type: "Villa",
      rating: 5,
    },
    {
      image1:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRPFcNU6MeNKC6D4CMfhOPpNIPmDUc_iuFeFg&s",
      image2:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSCq15NgupyEYTXYsFHmwzw8ese-ppMO1GZ-A&s",
      title: "Urban Loft | Berlin",
      price: "$650,000",
      description: "Stylish loft in the heart of a vibrant city.",
      type: "Apartment",
      rating: 3,
    },
    {
      image1:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRPFcNU6MeNKC6D4CMfhOPpNIPmDUc_iuFeFg&s",
      image2:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSCq15NgupyEYTXYsFHmwzw8ese-ppMO1GZ-A&s",
      title: "Compact City Flat | London",
      price: "$350,000",
      description: "Minimalist flat for efficient city living.",
      type: "Flat",
      rating: 2,
    },
    {
      image1:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRPFcNU6MeNKC6D4CMfhOPpNIPmDUc_iuFeFg&s",
      image2:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSCq15NgupyEYTXYsFHmwzw8ese-ppMO1GZ-A&s",
      title: "Charming Lake House | Austria",
      price: "$2,200,000",
      description: "Quaint house overlooking a serene mountain lake.",
      type: "House",
      rating: 5,
    },
    {
      image1:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRPFcNU6MeNKC6D4CMfhOPpNIPmDUc_iuFeFg&s",
      image2:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSCq15NgupyEYTXYsFHmwzw8ese-ppMO1GZ-A&s",
      title: "Luxury City Penthouse | Singapore",
      price: "$2,800,000",
      description: "Sophisticated penthouse with stunning city views.",
      type: "Penthouse",
      rating: 5,
    },
    {
      image1:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRPFcNU6MeNKC6D4CMfhOPpNIPmDUc_iuFeFg&s",
      image2:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSCq15NgupyEYTXYsFHmwzw8ese-ppMO1GZ-A&s",
      title: "Traditional Cottage | Scotland",
      price: "$480,000",
      description: "Rustic charm with modern comfort in the countryside.",
      type: "Cottage",
      rating: 1,
    },
    {
      image1:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRPFcNU6MeNKC6D4CMfhOPpNIPmDUc_iuFeFg&s",
      image2:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSCq15NgupyEYTXYsFHmwzw8ese-ppMO1GZ-A&s",
      title: "Contemporary Seaside Villa | Greece",
      price: "$3,700,000",
      description: "Modern villa overlooking the azure Mediterranean Sea.",
      type: "Villa",
      rating: 5,
    },
    {
      image1:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRPFcNU6MeNKC6D4CMfhOPpNIPmDUc_iuFeFg&s",
      image2:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSCq15NgupyEYTXYsFHmwzw8ese-ppMO1GZ-A&s",
      title: "Downtown Loft | New York",
      price: "$1,500,000",
      description: "Spacious loft with industrial decor and skyline views.",
      type: "Loft",
      rating: 4,
    },
    {
      image1:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRPFcNU6MeNKC6D4CMfhOPpNIPmDUc_iuFeFg&s",
      image2:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSCq15NgupyEYTXYsFHmwzw8ese-ppMO1GZ-A&s",
      title: "Secluded Forest Cabin | Canada",
      price: "$420,000",
      description: "Peaceful cabin surrounded by dense forest greenery.",
      type: "Cabin",
      rating: 3,
    },
    {
      image1:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRPFcNU6MeNKC6D4CMfhOPpNIPmDUc_iuFeFg&s",
      image2:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSCq15NgupyEYTXYsFHmwzw8ese-ppMO1GZ-A&s",
      title: "Modern Waterfront Apartment | Miami",
      price: "$1,800,000",
      description: "Luxury apartment with breathtaking water views.",
      type: "Apartment",
      rating: 5,
    },
    {
      image1:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRPFcNU6MeNKC6D4CMfhOPpNIPmDUc_iuFeFg&s",
      image2:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSCq15NgupyEYTXYsFHmwzw8ese-ppMO1GZ-A&s",
      title: "Minimalist Studio Flat | Seoul",
      price: "$400,000",
      description: "Compact living space with clean, modern design.",
      type: "Flat",
      rating: 3,
    },
    {
      image1:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRPFcNU6MeNKC6D4CMfhOPpNIPmDUc_iuFeFg&s",
      image2:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSCq15NgupyEYTXYsFHmwzw8ese-ppMO1GZ-A&s",
      title: "Luxury Countryside Estate | France",
      price: "$4,500,000",
      description: "Expansive estate with vineyards and classic architecture.",
      type: "Estate",
      rating: 5,
    },
    {
      image1:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRPFcNU6MeNKC6D4CMfhOPpNIPmDUc_iuFeFg&s",
      image2:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSCq15NgupyEYTXYsFHmwzw8ese-ppMO1GZ-A&s",
      title: "Chic City Penthouse | Los Angeles",
      price: "$3,200,000",
      description: "Stylish penthouse with top-of-the-line amenities.",
      type: "Penthouse",
      rating: 4,
    },
  ];
  const [filters, setFilters] = useState({
    type: [],
    exactRating: null,
    minPrice: 0,
    maxPrice: Infinity,
  });

  const propertyTypes = [...new Set(projectsData.map((p) => p.type))];

  const filteredProjects = projectsData.filter((project) => {
    const typeMatch =
      filters.type.length === 0 || filters.type.includes(project.type);

    const ratingMatch =
      filters.exactRating === null || project.rating === filters.exactRating;

    const price = parseFloat(project.price.replace(/[^0-9.-]+/g, ""));
    const priceMatch = price >= filters.minPrice && price <= filters.maxPrice;

    return typeMatch && ratingMatch && priceMatch;
  });

  const handleTypeFilter = (type) => {
    setFilters((prev) => ({
      ...prev,
      type: prev.type.includes(type)
        ? prev.type.filter((t) => t !== type)
        : [...prev.type, type],
    }));
  };

  const handleRatingFilter = (rating) => {
    setFilters((prev) => ({
      ...prev,
      exactRating: prev.exactRating === rating ? null : rating,
    }));
  };

  const handlePriceFilter = (min, max) => {
    setFilters((prev) => ({ ...prev, minPrice: min, maxPrice: max }));
  };

  const clearPropertyTypeFilter = () => {
    setFilters((prev) => ({ ...prev, type: [] }));
  };

  const clearRatingFilter = () => {
    setFilters((prev) => ({ ...prev, exactRating: null }));
  };

  const clearPriceFilter = () => {
    setFilters((prev) => ({ ...prev, minPrice: 0, maxPrice: Infinity }));
  };

  const getPriceRangeLabel = () => {
    if (filters.minPrice === 0 && filters.maxPrice === 500000)
      return "Under $500K";
    if (filters.minPrice === 500000 && filters.maxPrice === 1000000)
      return "$500K - $1M";
    if (filters.minPrice === 1000000 && filters.maxPrice === 3000000)
      return "$1M - $3M";
    if (filters.minPrice === 3000000 && filters.maxPrice === Infinity)
      return "Above $3M";
    return "All Prices";
  };

  return (
    <div className="flex flex-col min-h-screen">
      <Navbar />

      <div className="flex flex-grow mt-[9vh]">
        {/* Filter Sidebar - Dark Theme */}
        <div className="w-64 p-6 bg-gray-800 border-r border-gray-700 text-gray-200">
          <div className="flex items-center mb-6">
            <Filter className="mr-2 text-gray-300" />
            <h2 className="text-xl font-bold text-gray-100">Filters</h2>
          </div>

          {/* Property Type Filter */}
          <div className="mb-6">
            <div className="flex justify-between items-center mb-3">
              <h3 className="font-semibold text-gray-200">Property Type</h3>
              {filters.type.length > 0 && (
                <button
                  onClick={clearPropertyTypeFilter}
                  className="text-red-400 hover:text-red-500 flex items-center text-sm"
                >
                  <X className="w-4 h-4 mr-1" /> Clear
                </button>
              )}
            </div>
            {propertyTypes.map((type) => (
              <div key={type} className="flex items-center mb-2">
                <input
                  type="checkbox"
                  id={type}
                  checked={filters.type.includes(type)}
                  onChange={() => handleTypeFilter(type)}
                  className="mr-2 bg-gray-700 border-gray-600 text-blue-500 focus:ring-blue-500"
                />
                <label htmlFor={type} className="text-gray-300">
                  {type}
                </label>
              </div>
            ))}
          </div>

          {/* Rating Filter */}
          <div className="mb-6">
            <div className="flex justify-between items-center mb-3">
              <h3 className="font-semibold text-gray-200">Rating</h3>
              {filters.exactRating !== null && (
                <button
                  onClick={clearRatingFilter}
                  className="text-red-400 hover:text-red-500 flex items-center text-sm"
                >
                  <X className="w-4 h-4 mr-1" /> Clear
                </button>
              )}
            </div>
            {[5, 4, 3, 2, 1].map((rating) => (
              <div key={rating} className="flex items-center mb-2">
                <input
                  type="radio"
                  id={`rating-${rating}`}
                  name="rating"
                  checked={filters.exactRating === rating}
                  onChange={() => handleRatingFilter(rating)}
                  className="mr-2 bg-gray-700 border-gray-600 text-blue-500 focus:ring-blue-500"
                />
                <label
                  htmlFor={`rating-${rating}`}
                  className="flex items-center text-gray-300"
                >
                  {[...Array(5)].map((_, index) => (
                    <Star
                      key={index}
                      className={`w-4 h-4 ${
                        index < rating
                          ? "text-yellow-400 fill-current"
                          : "text-gray-600 fill-current"
                      }`}
                    />
                  ))}
                  <span className="ml-2 text-sm">{rating} stars</span>
                </label>
              </div>
            ))}
          </div>

          {/* Price Filter */}
          <div>
            <div className="flex justify-between items-center mb-3">
              <h3 className="font-semibold text-gray-200">Price Range</h3>
              {(filters.minPrice !== 0 || filters.maxPrice !== Infinity) && (
                <button
                  onClick={clearPriceFilter}
                  className="text-red-400 hover:text-red-500 flex items-center text-sm"
                >
                  <X className="w-4 h-4 mr-1" /> Clear
                </button>
              )}
            </div>
            <div className="flex flex-col space-y-2">
              <button
                onClick={() => handlePriceFilter(0, 500000)}
                className={`text-left hover:bg-gray-700 p-2 rounded text-gray-300 ${
                  getPriceRangeLabel() === "Under $500K" ? "bg-blue-900" : ""
                }`}
              >
                Under $500K
              </button>
              <button
                onClick={() => handlePriceFilter(500000, 1000000)}
                className={`text-left hover:bg-gray-700 p-2 rounded text-gray-300 ${
                  getPriceRangeLabel() === "$500K - $1M" ? "bg-blue-900" : ""
                }`}
              >
                $500K - $1M
              </button>
              <button
                onClick={() => handlePriceFilter(1000000, 3000000)}
                className={`text-left hover:bg-gray-700 p-2 rounded text-gray-300 ${
                  getPriceRangeLabel() === "$1M - $3M" ? "bg-blue-900" : ""
                }`}
              >
                $1M - $3M
              </button>
              <button
                onClick={() => handlePriceFilter(3000000, Infinity)}
                className={`text-left hover:bg-gray-700 p-2 rounded text-gray-300 ${
                  getPriceRangeLabel() === "Above $3M" ? "bg-blue-900" : ""
                }`}
              >
                Above $3M
              </button>
            </div>
          </div>
        </div>
        {/* Projects Grid - Unchanged Light Theme */}
        <div className="flex-grow p-8">
          <h1 className="text-4xl font-bold mb-6">
            Professional Real Estate Collection
          </h1>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {filteredProjects.map((project, index) => (
              <ProProjectCard
                key={index}
                image1={project.image1}
                image2={project.image2}
                title={project.title}
                price={project.price}
                description={project.description}
                type={project.type}
                rating={project.rating}
              />
            ))}
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default Pro;
