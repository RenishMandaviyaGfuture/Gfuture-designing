import React from 'react';
import Arrow1 from '../assets/Arrow1.png';
import gif1 from '../assets/gif1.gif';
import gif2 from '../assets/gif2.gif';
import gif3 from '../assets/gif3.gif';

const gifData = [
  {
    image: gif1,
    title: 'AI Use Cases & Success Stories',
  },
  {
    image: gif2,
    title: 'Technology Deep Dives',
  },
  {
    image: gif3,
    title: 'Product Updates & Features',
  },
];

const BlogInsights = () => {
  return (
    <div className="px-4 sm:px-6 py-12 max-w-7xl mx-auto text-white">
      {/* 🔹 Heading Section */}
      <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-6 mb-12">
        {/* Title and Description */}
        <div className="flex-1">
          <h1 className="text-3xl sm:text-4xl font-bold mb-3">
            Blog & <span className="text-[#38E8DE]">Insights</span>
          </h1>
          <p className="text-gray-400 max-w-xl">
            Stay ahead with the latest in AI innovation, industry trends, and expert perspectives.
          </p>
        </div>

        {/* Button */}
        <div>
          <button className="bg-gradient-to-r from-[#082F91] to-[#1D9C95] text-white px-6 py-3 rounded-full flex items-center gap-2 hover:scale-105 transition">
            Explore More
            <img src={Arrow1} alt="arrow" className="w-5 h-5" />
          </button>
        </div>
      </div>

      {/* 🔹 GIF Cards Section */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
        {gifData.map((item, index) => (
          <div
            key={index}
            className="bg-[#1F1F1F] rounded-2xl p-4 sm:p-6 shadow-lg hover:shadow-xl transition"
          >
            <div className="relative w-full h-72 sm:h-80 overflow-hidden rounded-xl">
              
              {/* 🏷️ Overlay: Title + Arrow on Top */}
              <div className="absolute top-0 left-0 w-full  px-2   flex items-center justify-between rounded-t-xl z-10">
                <h1 className="text-sm sm:text-base font-medium text-white">
                  {item.title}
                </h1>
                <img
                  src={Arrow1}
                  alt="icon"
                  className="w-5 h-5 sm:w-6 sm:h-6 ml-3 shrink-0"
                />
              </div>

              {/* 🎥 GIF Image */}
              <img
                src={item.image}
                alt={`gif-${index}`}
                className="w-full h-full   object-cover rounded-xl grayscale hover:grayscale-0 transition duration-300"
              />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default BlogInsights;
