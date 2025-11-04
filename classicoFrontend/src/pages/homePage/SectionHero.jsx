import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";

import hero1 from "../../assets/images/bagImages/bag1.png";
import hero2 from "../../assets/images/bagImages/bag2.png";
import hero3 from "../../assets/images/bagImages/bag3.png";

const heroImages = [hero1, hero2, hero3];

const SectionHero = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % heroImages.length);
    }, 4500);
    return () => clearInterval(interval);
  }, []);

  return (
    <section className="relative overflow-hidden bg-gradient-to-br from-purple-100 via-pink-50 to-white rounded-3xl mt-8 shadow-md">
      <div className="grid grid-cols-1 md:grid-cols-2 items-center min-h-[500px] sm:min-h-[600px] lg:min-h-[700px] xl:min-h-[750px]">

        {/* --- Text Area --- */}
        <div className="flex flex-col justify-center px-6 sm:px-10 lg:px-16 py-12 sm:py-16 space-y-6 text-center md:text-left">
          <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-extrabold font-serif text-gray-900 leading-tight">
            Step Into <span className="text-purple-700">Elegance</span>
          </h1>
          <p className="text-gray-600 text-sm sm:text-base md:text-lg lg:text-xl max-w-md mx-auto md:mx-0 leading-relaxed">
            Discover craftsmanship and design that define your individuality.
            Our collection blends classic charm with modern sophistication.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center md:justify-start pt-2 sm:pt-4">
            <Link
              to="/product"
              className="bg-gradient-to-r from-purple-700 to-purple-500 text-white px-7 py-3 rounded-2xl text-base sm:text-lg font-semibold shadow-lg hover:shadow-xl hover:scale-105 transition-all duration-300"
            >
              Shop Now
            </Link>
            <Link
              to="/about"
              className="border border-purple-700 text-purple-700 px-7 py-3 rounded-2xl text-base sm:text-lg font-semibold hover:bg-purple-100 hover:shadow-md transition-all duration-300"
            >
              Learn More
            </Link>
          </div>
        </div>

        {/* --- Image Carousel --- */}
        <div className="relative flex items-center justify-center h-[250px] sm:h-[350px] md:h-[500px] lg:h-[650px] overflow-hidden">
          {heroImages.map((img, index) => (
            <img
              key={index}
              src={img}
              alt={`Hero ${index + 1}`}
              className={`absolute transition-all duration-[1200ms] ease-in-out transform 
                ${index === currentIndex ? "opacity-100 scale-100 z-10" : "opacity-0 scale-105 z-0"}
                object-contain mx-auto
                sm:right-[5%] sm:mx-0
              `}
              style={{
                maxHeight: "85%",
                width: "auto",
              }}
            />
          ))}
        </div>
      </div>

      {/* Soft bottom fade */}
      <div className="absolute inset-x-0 bottom-0 h-28 bg-gradient-to-t from-white/70 to-transparent pointer-events-none"></div>
    </section>
  );
};

export default SectionHero;
