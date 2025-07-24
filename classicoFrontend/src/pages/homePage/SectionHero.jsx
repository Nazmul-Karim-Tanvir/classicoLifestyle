import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

import hero1 from '../../assets/images/heroImages/hero1.jpg';
import hero2 from '../../assets/images/heroImages/hero2.jpg';
import hero3 from '../../assets/images/heroImages/hero3.jpg';

const heroImages = [hero1, hero2, hero3];

const SectionHero = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % heroImages.length);
    }, 5000);
    return () => clearInterval(interval);
  }, []);

  return (
    <section className="bg-gradient-to-br from-purple-50 to-white rounded-xl overflow-hidden mt-5">
      <div className="grid grid-cols-1 md:grid-cols-2 items-center min-h-[500px] sm:min-h-[600px] lg:min-h-[700px]">

        {/* Text Area */}
        <div className="space-y-6 text-center md:text-left px-7 py-10 sm:py-16">
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-serif font-bold text-gray-900 leading-tight">
            Step Into <span className="text-purple-800">Elegance</span>
          </h1>
          <p className="text-base sm:text-lg text-gray-700 leading-relaxed max-w-lg mx-auto md:mx-0">
            Elevate your style with timeless pieces designed to reflect who you are. Uncover unique fashion that speaks to your soul.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center md:justify-start pt-2">
            <Link
              to="/product"
              className="bg-purple-800 text-white px-6 py-3 rounded-lg text-base sm:text-lg font-medium shadow hover:bg-purple-800 transition duration-300"
            >
              Shop Now
            </Link>
            <Link
              to="/about"
              className="border border-purple-800 text-purple-800 px-6 py-3 rounded-lg text-base sm:text-lg font-medium hover:bg-purple-100 transition duration-300"
            >
              Learn More
            </Link>
          </div>
        </div>

        {/* Image Carousel */}
        <div className="relative w-full h-[300px] sm:h-[400px] md:h-full overflow-hidden">
          {heroImages.map((img, index) => (
            <img
              key={index}
              src={img}
              alt={`Hero ${index + 1}`}
              className={`absolute inset-0 w-full h-full object-cover transition-opacity duration-1000 ease-in-out 
                ${index === currentIndex ? 'opacity-100 z-10' : 'opacity-0 z-0'}
              `}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default SectionHero;