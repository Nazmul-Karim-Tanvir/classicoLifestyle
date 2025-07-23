import React from 'react';
import { Link } from 'react-router-dom';
import heroImage from '/logoclassico.jpg'; // Use your image path here

const SectionHero = () => {
  return (
    <section className="bg-gradient-to-br from-purple-50 to-white py-20 px-6 sm:px-10 lg:px-20 rounded-2xl">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
        
        {/* Text Content */}
        <div className="space-y-6">
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-serif font-bold text-gray-900 leading-tight tracking-tight">
            Step Into <span className="text-purple-700">Elegance</span>
          </h1>
          <p className="text-base sm:text-lg text-gray-700 leading-relaxed">
            Elevate your style with timeless pieces designed to reflect who you are. Uncover unique fashion that speaks to your soul.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 pt-2">
            <Link
              to="/product"
              className="bg-purple-700 text-white px-6 py-3 rounded-lg text-base sm:text-lg font-medium shadow hover:bg-purple-800 transition duration-300"
            >
              Shop Now
            </Link>
            <Link
              to="/about"
              className="border border-purple-700 text-purple-700 px-6 py-3 rounded-lg text-base sm:text-lg font-medium hover:bg-purple-100 transition duration-300"
            >
              Learn More
            </Link>
          </div>
        </div>

        {/* Image */}
        <div className="w-full">
          <img
            src={heroImage}
            alt="Classico Lifestyle Banner"
            className="w-full h-auto object-cover rounded-3xl shadow-xl"
          />
        </div>
      </div>
    </section>
  );
};

export default SectionHero;