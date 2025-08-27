import React from 'react';
import { Link } from 'react-router-dom';
const Hero = () => {
  return <section className="py-12 md:py-20">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row items-center gap-12">
          <div className="md:w-1/2 space-y-6">
            <h1 className="text-[#BF5700] text-2xl font-bold">
              UT Austin Chemical Engineering
            </h1>
            <h2 className="text-3xl md:text-4xl font-bold text-gray-800">
              Undergraduate Advisory Board
            </h2>
            <p className="text-gray-600 text-lg">
              Bridging the gap between students and faculty to enhance the
              undergraduate experience in Chemical Engineering. We represent
              student voices, advocate for improvements, and foster community
              within our department.
            </p>
            <div className="flex flex-wrap gap-4 pt-4">
              <Link to="https://forms.gle/fm8kSKvvrW4mR7bS6" className="px-6 py-3 bg-[#BF5700] text-white rounded-md hover:bg-[#A64A00] transition-colors">
                Join Us
              </Link>
              <Link to="/about" className="px-6 py-3 border border-[#BF5700] text-[#BF5700] rounded-md hover:bg-[#FFF0E6] transition-colors">
                Learn More
              </Link>
            </div>
          </div>
          <div className="md:w-1/2 rounded-lg overflow-hidden shadow-lg">
            <img src="/uab.jpg" alt="UT Austin" className="w-full h-auto rounded-lg" />
          </div>
        </div>
      </div>
    </section>;
};
export default Hero;