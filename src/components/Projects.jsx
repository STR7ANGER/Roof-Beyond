import React from "react";
import { Star } from "lucide-react";

const ProjectCard = ({ image1, image2, title, price, description }) => {
  return (
    <div className="group flex flex-col h-full bg-white shadow-lg rounded-xl overflow-hidden hover:shadow-xl transition-shadow duration-300">
      <div className="relative h-[400px] w-full flex-shrink-0">
        <img
          src={image1}
          alt=""
          className="absolute inset-0 h-full w-full object-cover group-hover:opacity-0 opacity-100 transition-opacity duration-300"
        />
        <img
          src={image2}
          alt=""
          className="absolute inset-0 h-full w-full object-cover opacity-0 group-hover:opacity-100 transition-opacity duration-300"
        />
      </div>
      <div className="p-4 flex flex-col flex-grow">
        <div className="flex justify-between items-center mb-2">
          <h3 className="text-sm text-gray-700 group-hover:underline group-hover:underline-offset-4 font-semibold">
            {title}
          </h3>
          <span className="text-sm font-bold text-gray-900">{price}</span>
        </div>
        <div className="flex items-center flex-grow">
          <div className="bg-green-500 text-white px-2 py-0.5 rounded-md flex items-center text-xs mr-2">
            <Star className="w-3.5 h-3.5 mr-1" fill="white" />
            5.0
          </div>
          <p className="text-pretty text-xs text-gray-500 line-clamp-2">
            {description}
          </p>
        </div>
      </div>
    </div>
  );
};

const Projects = () => {
  const projectsData = [
    {
      image1: "https://t3.ftcdn.net/jpg/06/69/53/10/360_F_669531006_I4JjdgpCLMmPs2nwVP3zhBvPJe7bzfB8.jpg",
      image2: "https://static.wixstatic.com/media/bf8702_588c45d5a563446f8724133f43c634bc~mv2.webp/v1/fill/w_738,h_511,al_c,q_85,enc_auto/bf8702_588c45d5a563446f8724133f43c634bc~mv2.webp",
      title: "Small Headphones",
      price: "$1,2000,000.00",
      description: "Lorem ipsum dolor sit amet consectetur adipisicing elit.",
    },
    {
      image1: "https://img.freepik.com/premium-photo/exterior-luxury-house-with-swimming-pool-modern-villa-generative-aixa_174954-811.jpg",
      image2: "https://fancyhouse-design.com/wp-content/uploads/2023/11/This-villas-interior-design-combines-clean-lines-and-neutral-tones-for-a-modern-touch..jpg",
      title: "Wireless Earbuds",
      price: "$3,400.000.00",
      description: "Consectetur adipisicing elit omnis quibusdam ab maiores.",
    },
    {
      image1: "https://cms.interiorcompany.com/wp-content/uploads/2023/11/simple-house-design-go-for-minimalist.png",
      image2: "https://3.imimg.com/data3/ON/BL/MY-15636581/commercial-interior-designing-service-500x500.jpg",
      title: "Pro Speaker",
      price: "$700,000.00",
      description: "Omnis quibusdam ab maiores placeat odio id?",
    },
    {
      image1: "https://i.pinimg.com/736x/20/55/b2/2055b204890b01547efda2c1341079e8.jpg",
      image2: "https://i.pinimg.com/736x/af/bd/02/afbd02e8adf355aa66fb98bd490c2801.jpg",
      title: "Smart Watch",
      price: "$2,750,00.00",
      description: "Placeat odio id consectetur adipisicing elit.",
    },
    {
      image1: "https://i.pinimg.com/736x/d3/b3/66/d3b366912094c367ff0964ec7219707b.jpg",
      image2: "https://cdn.decorilla.com/online-decorating/wp-content/uploads/2023/12/Modern-interior-design-ideas-2025-by-Decorilla-1024x574.jpeg?width=900",
      title: "Bluetooth Mic",
      price: "$7,800,000.00",
      description: "Ab maiores placeat odio id consectetur adipisicing.",
    },
    {
      image1: "https://ahouseinthehills.com/wp-content/uploads/2013/06/modern_architecture_a_house_in_the_hills004.jpg",
      image2: "https://as1.ftcdn.net/v2/jpg/05/57/01/22/1000_F_557012275_svUKApkpwQPHWcS6bl7Q2nNwD5dE3VJo.jpg",
      title: "Gaming Headset",
      price: "$4,640,000.00",
      description: "Maiores placeat odio id consectetur adipisicing elit.",
    },
  ];

  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-6xl font-extrabold text-gray-800 mb-8 px-12 text-left">
        Top Projects
      </h1>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {projectsData.map((project, index) => (
          <ProjectCard
            key={index}
            image1={project.image1}
            image2={project.image2}
            title={project.title}
            price={project.price}
            description={project.description}
          />
        ))}
      </div>
    </div>
  );
};

export default Projects;