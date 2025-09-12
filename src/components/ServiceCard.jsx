// components/ServiceCard.jsx
import React from "react";
import { useNavigate } from "react-router-dom";

export default function ServiceCard({ imgSrc, title, description, link }) {
    const navigate = useNavigate();

  const handleClick = () => {
    navigate(link);
  };
  return (
    <div onClick={handleClick} className="group flex flex-col items-center text-center py-10 px-6 bg-blue-100 rounded-xl transition-all duration-300 h-full hover:bg-[#FFC244] hover:shadow-xl">
      {/* Image */}
      <div className="w-24 h-24 flex items-center justify-center rounded-full overflow-hidden bg-gray-100 mb-4">
        <img
          src={imgSrc}
          alt={title}
          className="w-20 h-20 object-contain transition-transform duration-500 group-hover:scale-110"
        />
      </div>

      {/* Title */}
      <h4 className="text-lg font-semibold text-[#223C74] mb-2">
        {title}
      </h4>

      {/* Description */}
      <p className="text-md text-gray-600 flex-grow ">
        {description}
      </p>
    </div>
  );
}
