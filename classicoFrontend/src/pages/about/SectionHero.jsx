import React from "react";
import { motion } from "framer-motion";

const SectionHero = () => {
  return (
    <section className="relative overflow-hidden bg-gradient-to-br from-purple-50 via-white to-purple-100 rounded-3xl mt-10 mb-20 px-6 sm:px-10 lg:px-16 py-12 sm:py-16">
      <div className="grid grid-cols-1 md:grid-cols-2 items-center gap-10 lg:gap-16 max-w-6xl mx-auto">

        {/* Text Content */}
        <motion.div
          initial={{ opacity: 0, x: -40 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="space-y-6 text-center md:text-left"
        >
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-serif font-bold text-gray-900 leading-tight">
            About <span className="text-purple-700">Classico Lifestyle</span>
          </h1>
          <p className="text-gray-700 text-base sm:text-lg lg:text-xl leading-relaxed">
            At <span className="font-semibold text-purple-700">Classico Lifestyle</span>, 
            we redefine modern living by combining <span className="font-medium">elegance</span>, 
            <span className="font-medium">comfort</span>, and <span className="font-medium">quality</span>. 
            From fashion to technology, every product tells a story of craftsmanship and innovation.
          </p>
          <p className="text-gray-600 text-sm sm:text-base leading-relaxed">
            Since our founding, we’ve focused on creating a lifestyle that speaks to individuality. 
            We carefully curate every piece to inspire confidence and help you express your personality effortlessly.
          </p>
          <div className="pt-3">
            <button className="bg-gradient-to-r from-purple-700 to-purple-500 text-white px-6 sm:px-8 py-3 rounded-xl text-base sm:text-lg font-semibold shadow-md hover:shadow-lg hover:scale-105 transition-all duration-300">
              Explore Our Story
            </button>
          </div>
        </motion.div>

        {/* Image */}
        <motion.div
          initial={{ opacity: 0, x: 40 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          viewport={{ once: true }}
          className="relative"
        >
          <div className="absolute inset-0 bg-purple-400/10 rounded-3xl blur-3xl"></div>
          <img
            src=""
            alt="About us"
            className="relative rounded-2xl shadow-2xl object-cover w-full h-64 sm:h-80 lg:h-[400px]"
          />
        </motion.div>
      </div>
    </section>
  );
};

export default SectionHero;