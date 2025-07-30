import React from 'react';
import Arrow from '../assets/Arrow1.png';
import Arrows from '../assets/Arrow4.png';
import clipBoard from '../assets/clipBoard.png';
import screens1 from '../assets/screens1.png';
import screens2 from '../assets/screens2.png';

const CashStudy = () => {
  return (
    <div className="px-2 xs:px-4 py-8 xs:py-12 sm:py-16 mx-auto text-white">
      {/* Section Header */}
      <div className="text-center mb-10 xs:mb-14 sm:mb-20">
        <h1 className="text-2xl xs:text-3xl sm:text-4xl font-bold mb-2 xs:mb-3 sm:mb-4">Case Studies</h1>
        <p className="text-xs xs:text-sm sm:text-base text-[#6D6B72] max-w-2xl mx-auto mb-2 xs:mb-3 sm:mb-4">
          Our case studies demonstrate measurable results, client satisfaction, and the strategic value of our AI expertise.
        </p>
        <button className="mt-4 xs:mt-5 sm:mt-6 bg-gradient-to-r from-[#082F91] to-[#1D9C95] text-white px-4 xs:px-5 sm:px-6 py-2 xs:py-2.5 sm:py-3 rounded-full flex items-center gap-1 xs:gap-2 mx-auto hover:scale-105 transition">
          Explore More
          <img src={Arrow} alt="arrow" className="w-3 xs:w-4 sm:w-4 h-3 xs:h-4 sm:h-4" />
        </button>
      </div>

      {/* ✅ Two Case Studies Side by Side */}
<div className="flex flex-col lg:flex-row mb-8 xs:mb-10 sm:mb-12 gap-8 xs:gap-10 sm:gap-14">

  {/* 👉 First Case Study (Left Side) */}
  <div className="flex-1 bg-gradient-to-b from-[#1B1BD226] to-[#3D3D6180] rounded-2xl p-4 xs:p-6 sm:p-8">
    {/* Text Content */}
    <div className="text-center mb-4 xs:mb-6 sm:mb-8">
      <img src={clipBoard} alt="clipboard" className="w-7 xs:w-8 sm:w-10 h-7 xs:h-8 sm:h-10 mb-4 xs:mb-6 sm:mb-8 mx-auto" />
      <h1 className="text-lg xs:text-xl sm:text-2xl font-semibold mb-1 text-[#CAC6DD]">Set Challenges and track</h1>
      <h2 className="text-base xs:text-lg sm:text-xl font-medium text-[#CAC6DD] mb-2 xs:mb-3 sm:mb-4">your progress</h2>
      <p className="text-xs xs:text-sm sm:text-base text-gray-[#CAC6DD] mb-3 xs:mb-4 sm:mb-6">
        Build your financial literacy within a transparent <br/> <span className="text-[#CAC6DD] font-semibold">community</span>
      </p>
      <img src={Arrows} alt="arrow" className="w-6 xs:w-7 sm:w-8 h-6 xs:h-7 sm:h-8 mx-auto" />
    </div>

    {/* Screens */}
    <div className="relative top-1 xs:top-3 ">
      <img
        src={screens1}
        alt="screen1"
        className="w-full lg:w-110 h-55 xs:h-48 sm:h-60 md:h-130 lg:h-80 object-cover rounded-3xl border-3 border-[#34344C]"
      />
      <img
        src={screens2}
        alt="screen2"
        className="w-1/2 xs:w-2/5 sm:w-1/3 md:w-1/2 lg:w-1/3 h-60 xs:h-52 sm:h-28 md:h-150 lg:h-90 object-contain rounded-xl absolute bottom-0 left-42 xs:left-50 sm:left-70 md:left-100 lg:left-80 shadow-lg"
      />
    </div>
  </div>

  {/* 👉 Second Case Study (Right Side) */}
  <div className="flex-1 bg-[linear-gradient(180deg,_#111213,_#387d53)] rounded-2xl p-4 xs:p-6 sm:p-8 ">
    {/* Text Content */}
    <div className="text-center mb-4 xs:mb-6 sm:mb-8">
      <img src={clipBoard} alt="clipboard" className="w-7 xs:w-8 sm:w-10 h-7 xs:h-8 sm:h-10 mb-2 xs:mb-3 sm:mb-4 mx-auto" />
       <h1 className="text-lg xs:text-xl sm:text-2xl font-semibold mb-1 text-[#CAC6DD]">Set Challenges and track</h1>
      <h2 className="text-base xs:text-lg sm:text-xl font-medium text-[#CAC6DD] mb-2 xs:mb-3 sm:mb-4">your progress</h2>
      <p className="text-xs xs:text-sm sm:text-base text-gray-[#CAC6DD] mb-3 xs:mb-4 sm:mb-6">
        Build your financial literacy within a transparent <br/> <span className="text-[#CAC6DD] font-semibold">community</span>
      </p>
      <img src={Arrows} alt="arrow" className="w-6 xs:w-7 sm:w-8 h-6 xs:h-7 sm:h-8 mx-auto" />
    </div>

    {/* Screens */}
    <div className="relative top-2 xs:top-3   ">
      <img
        src={screens1}
        alt="screen1"
        className="w-full lg:w-110 h-50 xs:h-48 sm:h-60 md:h-130 lg:h-80 object-cover rounded-3xl border-3 border-[#34344C]"
      />
      <img
        src={screens2}
        alt="screen2"
        className="w-1/2 xs:w-2/5 sm:w-1/3 md:w-1/2 lg:w-1/3 h-60 xs:h-50 sm:h-50 md:h-150 lg:h-90 object-contain rounded-xl absolute bottom-0 left-42 xs:left-50 sm:left-70 md:left-100 lg:left-80 shadow-lg"
      />
    </div>
  </div>

</div>

    </div>
  );
};

export default CashStudy;
