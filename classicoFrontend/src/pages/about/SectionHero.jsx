import React from 'react';

const SectionHero = () => {
  return (
    <div className="flex flex-col md:flex-row items-center gap-10 mb-16">
      {/* Text */}
      <div className="md:w-1/2 space-y-6">
        <h1 className="text-4xl sm:text-5xl lg:text-6xl font-serif font-bold text-gray-900 leading-tight">
          About <span className="text-purple-600">Classico Lifestyle</span>
        </h1>
        <p className="text-gray-700 text-lg leading-relaxed">
          At Classico Lifestyle, we’re passionate about bringing you the latest trends and timeless classics in fashion, electronics, and lifestyle. Our mission is to empower you with style and quality at affordable prices.
        </p>
        <p className="text-gray-600">
          Since our founding, we’ve focused on customer satisfaction, offering handpicked products that fit your lifestyle and personality.
        </p>
      </div>

      {/* Image */}
      <div className="md:w-1/2">
        <img
          src="https://images.unsplash.com/photo-1512436991641-6745cdb1723f?auto=format&fit=crop&w=800&q=80"
          alt="About us"
          className="rounded-xl shadow-lg object-cover w-full h-64 md:h-80"
        />
      </div>
    </div>
  );
};

export default SectionHero;