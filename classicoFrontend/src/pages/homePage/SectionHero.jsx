import React from 'react';
import { Link } from 'react-router-dom';
import heroImage from '/logoclassico.jpg'; // Replace with your actual image path

const SectionHero = () => {
  return (
    <section className="bg-gradient-to-br from-purple-50 to-white rounded-xl overflow-hidden mt-5">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-10 items-center min-h-[600px]">

        {/* Text Content */}
        <div className="space-y-6 text-center md:text-left px-7">
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-serif font-bold text-gray-900 leading-tight">
            Step Into <span className="text-purple-700">Elegance</span>
          </h1>
          <p className="text-base sm:text-lg text-gray-700 leading-relaxed max-w-lg mx-auto md:mx-0">
            Elevate your style with timeless pieces designed to reflect who you are. Uncover unique fashion that speaks to your soul.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center md:justify-start pt-2">
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
        <div className="w-full h-full flex justify-center md:justify-end">
          <img
            src={heroImage}
            alt="Classico Lifestyle Banner"
            className="w-full max-w-md sm:max-w-lg md:max-w-full h-auto md:h-[500px] lg:h-[600px] object-cover sm:rounded-t-2xl md:rounded-none md:rounded-l-4xl shadow-xl"
          />
        </div>
      </div>
    </section>
  );
};

export default SectionHero;