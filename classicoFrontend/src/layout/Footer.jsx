import React from 'react';
import { Link } from 'react-router-dom';
import { Facebook, Instagram, Twitter } from 'lucide-react';
import logo from '/logo.jpg'; // Make sure this path is correct

const Footer = () => {
  return (
    <footer className="bg-gradient-to-tr from-gray-900 via-black to-gray-900 text-white pt-12 pb-6">
      <div className="max-w-[90%] mx-auto px-6 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">

        {/* Logo & Description */}
        <div className="flex flex-col gap-4 items-start">
          <Link to="/" className="flex items-center">
            <img
              src={logo}
              alt="Classico Lifestyle Logo"
              className="h-16 w-auto rounded shadow-md object-contain"
              onError={(e) => { e.target.src = '/fallback.png'; }}
            />
          </Link>
          <p className="text-sm text-gray-400">
            Elevate your everyday style with <span className="text-purple-400 font-semibold">Classico Lifestyle</span>.
          </p>
          <p className="text-xs text-gray-500">
            &copy; {new Date().getFullYear()} Nazmul Karim Tanvir. All rights reserved.
          </p>
        </div>

        {/* Navigation Links */}
        <div className="flex flex-col items-center text-center">
          <h3 className="text-lg font-semibold text-purple-400 mb-3">Quick Links</h3>
          <ul className="space-y-2 text-sm text-gray-300">
            <li><Link to="/" className="hover:text-purple-400 transition">Home</Link></li>
            <li><Link to="/product" className="hover:text-purple-400 transition">Shop</Link></li>
            <li><Link to="/about" className="hover:text-purple-400 transition">About</Link></li>
            <li><Link to="/contact" className="hover:text-purple-400 transition">Contact</Link></li>
          </ul>
        </div>

        {/* Social Media Icons */}
        <div className="flex flex-col items-center text-center">
          <h3 className="text-lg font-semibold text-purple-400 mb-3">Follow Us</h3>
          <div className="flex gap-5 justify-center">
            <a href="#" className="hover:text-purple-400 transition" aria-label="Facebook">
              <Facebook size={22} />
            </a>
            <a href="#" className="hover:text-purple-400 transition" aria-label="Instagram">
              <Instagram size={22} />
            </a>
            <a href="#" className="hover:text-purple-400 transition" aria-label="Twitter">
              <Twitter size={22} />
            </a>
          </div>
        </div>

      </div>
    </footer>
  );
};

export default Footer;
