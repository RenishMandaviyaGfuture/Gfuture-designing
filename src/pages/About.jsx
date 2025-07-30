import Arrow1 from "../assets/Arrow1.png";

const About = () => {
  return (
    <div className="py-16 xs:py-20 sm:py-30 bg-black ">
      {/* Main horizontal layout with border on top and bottom */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 xs:gap-12 sm:gap-15 border-t border-b border-[#212125] w-full">
        
        {/* Column 1: About Info */}
        <div className="text-center md:text-left space-y-6 xs:space-y-7 sm:space-y-8 md:border-r border-[#212125] pr-4 xs:pr-5 sm:pr-6 pl-4 xs:pl-5 sm:pl-6">
          <h1 className="text-2xl xs:text-3xl sm:text-4xl font-bold text-white mt-6 xs:mt-8 sm:mt-10">
            About <span className="text-blue-600">Us</span>
          </h1>
          <p className="text-xs xs:text-sm sm:text-base text-gray-700">
            Founded: 2020 <br />
            <span className="font-semibold">Based in India</span>
          </p>
        </div>

        {/* Column 2: Description + Button */}
        <div className="space-y-6 xs:space-y-7 sm:space-y-8 text-[#6D6B72] text-xs xs:text-sm sm:text-base leading-relaxed md:border-r border-[#212125] pr-4 xs:pr-5 sm:pr-6 pl-4 xs:pl-5 sm:pl-6">
          <p className="pb-2 border-b md:border-none border-[#212125] font-poppins mt-6 xs:mt-8 sm:mt-10">
            Founded in 2020, our mission is to harness the power of AI to solve real-world problems and empower businesses and individuals alike. We specialize in building intelligent solutions that drive innovation, improve decision-making, and create smarter digital experiences.
          </p>
          <p className="pb-2 border-b text-[#CAC6DD] md:border-none border-[#212125] font-poppins">
            Our team is made up of passionate engineers, data scientists, and innovators committed to responsible AI development. We collaborate with global partners, enterprises, and startups to bring cutting-edge AI technologies to life.
          </p>
          <button
            className="
              group flex items-center gap-2 mb-6 xs:mb-8 sm:mb-10
              text-white font-semibold px-4 xs:px-5 sm:px-6 py-2 xs:py-2.5 sm:py-3 rounded-3xl w-fit
              bg-gradient-to-r from-[#386AE7] to-[#38E8DE]
              hover:bg-gradient-to-r hover:from-[#38E8DE] hover:to-[#386AE7]
              transition-all duration-700 ease-in-out
            "
          >
            Explore More
            <img
              src={Arrow1}
              alt="Arrow"
              className="w-4 xs:w-5 h-4 xs:h-5 transform transition-transform duration-700 ease-in-out group-hover:rotate-110"
            />
          </button>
        </div>

        {/* Column 3: Stats - Vertical Stack */}
        <div className="flex flex-col gap-6 xs:gap-7 sm:gap-9 text-center md:text-left mt-6 xs:mt-8 sm:mt-10 pl-4 xs:pl-5 sm:pl-6 pr-4 xs:pr-5 sm:pr-6">
          <div >
            <h1 className="text-xl xs:text-2xl sm:text-4xl font-poppins font-bold text-[#205FD3]">50+</h1>
            <h4 className="text-xs xs:text-sm sm:text-base text-[#D3D3D3]">Projects Completed</h4>
          </div>
          <div>
            <h1 className="text-xl xs:text-2xl sm:text-4xl font-poppins font-bold text-[#38E8DE]">5+</h1>
            <h4 className="text-xs xs:text-sm sm:text-base text-[#D3D3D3]">Awards Received</h4>
          </div>
          <div>
            <h1 className="text-xl xs:text-2xl sm:text-4xl font-poppins font-bold text-[#205FD3]">5+</h1>
            <h4 className="text-xs xs:text-sm sm:text-base text-[#D3D3D3]">Years of Experience</h4>
          </div>
          <div>
            <h1 className="text-xl xs:text-2xl sm:text-4xl font-poppins font-bold text-[#38E8DE]">50+</h1>
            <h4 className="text-xs xs:text-sm sm:text-base text-[#D3D3D3]">Team Members</h4>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
