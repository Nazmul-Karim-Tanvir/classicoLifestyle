import React from 'react';

const About = () => {
  return (
    <section className="py-16">
      {/* Hero Section */}
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

      {/* Our Values Section */}
      <div className="mb-16 text-center">
        <h2 className="text-3xl font-semibold text-gray-900 mb-8">Our Core Values</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
          <div className="bg-purple-50 p-6 rounded-lg shadow-md">
            <h3 className="text-xl font-bold text-purple-700 mb-3">Quality</h3>
            <p className="text-gray-700">We source only the best products so you get premium quality every time.</p>
          </div>
          <div className="bg-purple-50 p-6 rounded-lg shadow-md">
            <h3 className="text-xl font-bold text-purple-700 mb-3">Customer Focus</h3>
            <p className="text-gray-700">Your satisfaction is our top priority. We offer support and easy returns.</p>
          </div>
          <div className="bg-purple-50 p-6 rounded-lg shadow-md">
            <h3 className="text-xl font-bold text-purple-700 mb-3">Innovation</h3>
            <p className="text-gray-700">We stay ahead of trends to bring you fresh and exciting products.</p>
          </div>
        </div>
      </div>

      {/* Team Section */}
      <div>
        <h2 className="text-3xl font-semibold text-gray-900 mb-8 text-center">Meet Our Team</h2>
        <div className="flex flex-col md:flex-row justify-center gap-10">
          {/* Team Member */}
          <div className="text-center max-w-xs">
            <img
              src="https://randomuser.me/api/portraits/men/32.jpg"
              alt="Team member"
              className="mx-auto rounded-full w-32 h-32 object-cover shadow-md"
            />
            <h3 className="mt-4 text-xl font-semibold text-gray-900">John Doe</h3>
            <p className="text-purple-600 font-medium">Founder & CEO</p>
          </div>
          {/* Team Member */}
          <div className="text-center max-w-xs">
            <img
              src="https://randomuser.me/api/portraits/women/44.jpg"
              alt="Team member"
              className="mx-auto rounded-full w-32 h-32 object-cover shadow-md"
            />
            <h3 className="mt-4 text-xl font-semibold text-gray-900">Jane Smith</h3>
            <p className="text-purple-600 font-medium">Head of Marketing</p>
          </div>
          {/* Team Member */}
          <div className="text-center max-w-xs">
            <img
              src="https://randomuser.me/api/portraits/men/75.jpg"
              alt="Team member"
              className="mx-auto rounded-full w-32 h-32 object-cover shadow-md"
            />
            <h3 className="mt-4 text-xl font-semibold text-gray-900">Alex Johnson</h3>
            <p className="text-purple-600 font-medium">Lead Designer</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
