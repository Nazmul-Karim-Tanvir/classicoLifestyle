import React from 'react';
import { Link } from 'react-router-dom';
import { Facebook, Instagram, Twitter } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-gradient-to-tr from-purple-50 to-white border-t border-purple-300 text-gray-700 py-10">
      <div className="max-w-[90%] mx-auto grid grid-cols-1 md:grid-cols-2 gap-10">
        
        {/* Left Column: Brand Info */}
        <div>
          <h2 className="text-2xl font-bold text-purple-700 mb-3">Classico Lifestyle</h2>
          <p className="text-sm leading-relaxed mb-4">
            Where timeless design meets modern lifestyle. We craft fashion with elegance and simplicity.
          </p>
          <p className="text-xs text-gray-500">
            &copy; {new Date().getFullYear()} <span className="font-medium">Nazmul Karim Tanvir</span>. All rights reserved.
          </p>
        </div>

        {/* Right Column: Navigation & Socials */}
        <div className="flex flex-col md:items-end gap-4">
          <ul className="space-y-1 text-sm">
            <li><Link to="/" className="hover:text-purple-600 transition">Home</Link></li>
            <li><Link to="/shop" className="hover:text-purple-600 transition">Shop</Link></li>
            <li><Link to="/about" className="hover:text-purple-600 transition">About</Link></li>
            <li><Link to="/contact" className="hover:text-purple-600 transition">Contact</Link></li>
          </ul>

          <div className="flex gap-4 mt-2">
            <a href="#" className="hover:text-purple-700 transition"><Facebook size={20} /></a>
            <a href="#" className="hover:text-purple-700 transition"><Instagram size={20} /></a>
            <a href="#" className="hover:text-purple-700 transition"><Twitter size={20} /></a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
