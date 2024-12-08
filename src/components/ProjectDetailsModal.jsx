import React from 'react';
import { X, Star } from 'lucide-react'; // Add Star import

const ProjectDetailsModal = ({ project, onClose }) => {
  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-50 p-4">
      <div className="bg-white rounded-xl max-w-2xl w-full max-h-[90vh] overflow-y-auto">
        <div className="relative">
          {/* Close Button */}
          <button 
            onClick={onClose} 
            className="absolute top-4 right-4 z-10 bg-gray-100 rounded-full p-2 hover:bg-gray-200 transition"
          >
            <X className="w-6 h-6 text-gray-700" />
          </button>

          {/* Image Carousel */}
          <div className="grid grid-cols-2 gap-4 p-6">
            <img 
              src={project.image1} 
              alt={`${project.title} - Image 1`} 
              className="w-full h-96 object-cover rounded-lg"
            />
            <img 
              src={project.image2} 
              alt={`${project.title} - Image 2`} 
              className="w-full h-96 object-cover rounded-lg"
            />
          </div>

          {/* Project Details */}
          <div className="p-6 pt-0">
            <h2 className="text-2xl font-bold mb-4">{project.title}</h2>
            <div className="flex justify-between items-center mb-4">
              <span className="text-xl font-semibold text-gray-800">{project.price}</span>
              <span className="text-sm bg-gray-200 px-3 py-1 rounded">{project.type}</span>
            </div>
            
            <p className="text-gray-600 mb-4">{project.description}</p>
            
            <div className="flex items-center">
              {[...Array(5)].map((_, index) => (
                <Star
                  key={index}
                  className={`w-5 h-5 ${
                    index < Math.floor(project.rating)
                      ? "text-yellow-500 fill-current"
                      : "text-gray-300 fill-current"
                  }`}
                />
              ))}
              <span className="ml-2 text-sm text-gray-600">({project.rating})</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProjectDetailsModal;