import React from 'react';
import { Link } from 'react-router-dom';
const Footer = () => {
  return <footer className="bg-white py-8 border-t">
      <div className="container mx-auto px-4">
        <div className="text-center">
          <p className="text-xl font-semibold mb-4">Proud to be at UT Austin</p>
          <div className="flex justify-center space-x-6 mb-6">
            <Link to="/" className="text-gray-600 hover:text-[#BF5700]">
              Home
            </Link>
            <Link to="/about" className="text-gray-600 hover:text-[#BF5700]">
              About
            </Link>
            <Link to="/contact" className="text-gray-600 hover:text-[#BF5700]">
              Contact
            </Link>
          </div>
        </div>
      </div>
    </footer>;
};
export default Footer;