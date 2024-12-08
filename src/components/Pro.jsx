import React, { useState, useEffect } from "react";
import { Star, Filter, X } from "lucide-react";
import Navbar from "./NavBar";
import Footer from "./Footer";
import projectsData from './projectsData.json'; 

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
  const [projectData, setProjectData] = useState([]);
  const [filters, setFilters] = useState({
    type: [],
    exactRating: null,
    minPrice: 0,
    maxPrice: Infinity,
  });

  // Load data from JSON file when component mounts
  useEffect(() => {
    // For local JSON import, we can directly use the imported data
    setProjectData(projectsData.projects);
  }, []);

  const propertyTypes = [...new Set(projectData.map((p) => p.type))];

  const filteredProjects = projectData.filter((project) => {
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
        <div className="w-64 p-6 bg-gray-900 border-r border-gray-700 text-gray-200">
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