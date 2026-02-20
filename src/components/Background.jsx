import React, { useState, useEffect } from "react";
import { FaCircle } from "react-icons/fa";
import vehicle1 from "../assets/vechicle1.webp" 
import vehicle2 from "../assets/vechicle2.webp" 
import vehicle3 from "../assets/vechicle3.webp" 
import vehicle4  from "../assets/vehicle4.jpg" 
import vehicle5 from "../assets/vehicle5.jpg" 
import vehicle6 from "../assets/vehicle6.jpg" 
import vehicle7 from "../assets/vehicle7.jpg" 
import vehicle8 from "../assets/vehicle8.jpg" 
import vehicle9 from "../assets/vehicle8.webp" 
import vehicle10  from "../assets/vehicle10.webp" 
function Background() {
  const images = [vehicle1, vehicle2, vehicle3,vehicle4,vehicle5,vehicle6,vehicle7,vehicle8,vehicle9,vehicle10]; 
  const [current, setCurrent] = useState(0);
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrent((prev) => (prev + 1) % images.length);
    }, 3000);
    return () => clearInterval(interval);
  }, [images.length]);

  return (
    <div className="relative w-full h-[350px] sm:h-[600px] overflow-hidden">
      <img
        src={images[current]}
        alt="Vehicle"
        className="w-full h-full object-contain transition-all duration-700"
      />
      <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 flex gap-3">
        {images.map((_, index) => (
          <FaCircle
            key={index}
            size={12}
            className={`cursor-pointer ${
              current === index ? "text-red-600" : "text-gray-400"
            }`}
            onClick={() => setCurrent(index)}
          />
        ))}
      </div>
    </div>
  );
}
export default Background;
