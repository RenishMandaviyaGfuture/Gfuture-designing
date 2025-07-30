import FR_Visionaries from "../assets/Visionaries_white.mp4";
import Analysis from "../assets/analysis.png";
import Insights from "../assets/insights.png";
import Optimization from "../assets/optimization.png";
import Arrow1 from "../assets/Arrow1.png";
import Arrow3 from "../assets/Arrow3.png";
import ImageBg from "../assets/ImageBg.png";

const Services = () => {
  return (
    <div className="relative bg-[#18181A] text-white py-16 px-4 sm:px-8 lg:px-20 font-poppins overflow-hidden">
      {/* 🔹 Background cross image on bottom-left */}
      <img
        src={ImageBg}
        alt="Cross"
        className="absolute left-0 bottom-0 w-40 sm:w-52 opacity-30 rotate-45 z-0 pointer-events-none"
      />

      <div className="relative z-10 max-w-7xl mx-auto">
        <h1 className="text-4xl font-bold text-blue-500 mb-2">
          Our <span className="text-[#38E8DE]">Services</span>
        </h1>
        <p className="text-white text-lg mb-12">
          End-to-End AI Services <br /> for a Digital Future.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-1 lg:grid-cols-2 gap-12 items-start">
          {/* 🔹 Left Side - Video with Overlays */}
          <div className="relative w-full rounded-lg overflow-hidden h-[380px] sm:h-[560px] md:h-[570px] lg:h-[550px] xl:h-[600px]">
            
            <video
              autoPlay
              loop
              muted
              playsInline
              className="w-full h-full object-cover rounded-3xl shadow-lg"
            >
              <source src={FR_Visionaries} type="video/mp4" />
              Your browser does not support the video tag.
            </video>

            {/* Overlay Icons */}
            <img
              src={Analysis}
              alt="Analysis"
              className="absolute z-10 top-[10%] left-[10%] w-30 sm:w-24 md:w-50"
            />
            <img
              src={Insights}
              alt="Insights"
              className="absolute z-10 top-[15%] right-[15%] w-30 sm:w-24 md:w-50"
            />
            <img
              src={Optimization}
              alt="Optimization"
              className="absolute z-10 bottom-[22%] left-[5%] w-30 sm:w-28 md:w-50"
            />

            {/* Caption */}
            <div className="absolute z-20 bottom-0 left-0 w-full  py-3 px-4 text-center">
               <div className="flex justify-center mb-4">
                <img src={Arrow3} className="w-8 sm:w-8 md:w-12 ml-70 mb-55 sm:ml-150 md:ml-150 sm:mb-100  md:mb-95 lg:ml-135 lg:mb-105 " alt="Arrow" />
              </div>
              <h1 className="text-blue-500 text-base sm:text-xl md:text-2xl font-bold">
                Supply Chain Management
              </h1>
              <p className="text-[#6D6B72] text-xs sm:text-sm md:text-[#6D6B72] mt-1 max-w-xl mx-auto leading-relaxed">
                SCM is the strategic coordination and oversight of all activities
                involved in sourcing, procurement, production, and logistics
                management.
              </p>
            </div>
          </div>

          {/* 🔹 Right Side - Text, Button, Services */}
          <div className="flex flex-col justify-center space-y-6">
            <p className="text-[#CAC6DD] text-sm sm:text-base md:text-lg leading-relaxed">
              We deliver smart, AI-driven solutions tailored to streamline
              operations, enhance customer experiences, and drive business
              growth. Our service portfolio spans from AI consulting to custom
              model deployment, helping you innovate faster.
            </p>

            <button
              className="group flex items-center gap-2 text-white font-semibold px-6 py-3 rounded-3xl w-fit
              bg-gradient-to-r from-[#386AE7] to-[#38E8DE]
              hover:from-[#38E8DE] hover:to-[#386AE7]
              transition-all duration-700 ease-in-out"
            >
              Request a Consultation
              <img
                src={Arrow1}
                alt="Arrow"
                className="w-5 h-5 transform transition-transform duration-700 ease-in-out group-hover:rotate-110"
              />
            </button>

            {/* Service Cards */}
            <div className="flex flex-col gap-6">
              {/* Service 2 */}
              <div className="transition w-full">
                <h1 className="text-4xl font-bold text-[#303037] mb-[-20px]">02</h1>
                <div className="flex justify-between items-center border-b border-[#212125] pb-8">
                  <p className="text-2xl text-[#FFFFFF] ml-2">AI-Powered Analytics</p>
                  <img src={Arrow3} alt="Arrow" className="w-8 h-8" />
                </div>
              </div>

              {/* Service 3 */}
              <div className="transition w-full">
                <h1 className="text-4xl font-bold text-[#303037] mb-[-20px]">03</h1>
                <div className="flex justify-between items-center border-b border-[#212125] pb-8">
                  <p className="text-2xl text-[#FFFFFF] ml-2">Machine Learning Solutions</p>
                  <img src={Arrow3} alt="Arrow" className="w-8 h-8" />
                </div>
              </div>

              {/* Service 4 */}
              <div className="transition w-full">
                <h1 className="text-4xl font-bold text-[#303037] mb-[-20px]">04</h1>
                <div className="flex justify-between items-center border-b border-[#212125] pb-8">
                  <p className="text-2xl text-[#FFFFFF] ml-2">Generative AI Solutions</p>
                  <img src={Arrow3} alt="Arrow" className="w-8 h-8" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Services;
