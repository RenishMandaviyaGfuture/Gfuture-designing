import { motion } from "framer-motion";
import AnimationGlow from "../assets/Animation_Glowing.mp4";
import Arrow1 from "../assets/Arrow1.png";
import circle from "../assets/circle.png";
import gabrielaAI from "../assets/gabriela_ai.png";
import googleLogo from "../assets/google_logo.png";
import microsoftLogo from "../assets/microsoft_logo.png";
import About from '../pages/About.jsx';
import Services from "./Services.jsx";
import Solution from "./Solution.jsx";
import Contact from "./Contact.jsx";

const Home = () => {
  return (
    <div
      className="relative w-full min-h-screen overflow-hidden"
      style={{ scrollbarWidth: "none", msOverflowStyle: "none" }}
    >
      {/* ✅ Hide scrollbar in WebKit (Chrome, Safari) */}
      <style>
        {`
          ::-webkit-scrollbar {
            display: none;
          }
        `}
      </style>

      {/* ✅ Background Video */}
      <video
        autoPlay
        loop
        muted
        playsInline
        className="absolute top-0 left-0 w-full h-160 object-cover brightness-50 z-0"
      >
        <source src={AnimationGlow} type="video/mp4" />
        Your browser does not support the video tag.
      </video>

      {/* ✅ Content Layer */}
      <div className="relative z-10 px-4 sm:px-6 lg:px-0 py-6">
        <div className="grid grid-cols-1 px-4 sm:px-6 lg:px-12 md:grid-cols-2 items-center gap-10">
          {/* Left Grid */}
          <div className="flex flex-col gap-6">
            <img
              src={circle}
              alt="Circle Logo"
              className="w-20 h-20 sm:w-28 sm:h-28 mt-[-30.05px] ml-[10.19px]"
            />

            <h1
              style={{ fontFamily: "Orbitron, sans-serif" }}
              className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white leading-snug"
            >
              Powering <span className="text-[#205FD3]">Smarter</span>
              <br />
              Decisions With <span className="text-[#38E8DE]">AI</span>
            </h1>

            <p className="text-white text-base sm:text-lg">
              We develop futuristic solutions for leading-edge startups <br/> across
              the globe as well as Fortune 500 enterprises.
            </p>

            {/* ✅ Call-to-action button */}
            <button
              className="
                group flex items-center gap-2 
                text-white font-semibold px-6 py-3 rounded-3xl w-fit
                bg-gradient-to-r from-[#386AE7] to-[#38E8DE]
                hover:bg-gradient-to-r hover:from-[#38E8DE] hover:to-[#386AE7]
                transition-all duration-700 ease-in-out
              "
            >
              Request a Consultation
              <img
                src={Arrow1}
                alt="Arrow"
                className="
                  w-5 h-5 transform transition-transform duration-700 ease-in-out
                  group-hover:rotate-110
                "
              />
            </button>

            {/* ✅ Partner Logos */}
            <div className="flex flex-wrap gap-6 items-center mt-8">
              {/* Google - 1 */}
              <div className="group">
                <img
                  src={googleLogo}
                  alt="Google"
                  className="w-[110px] h-[30px] filter grayscale group-hover:grayscale-0 transition-all duration-300"
                />
              </div>

              {/* Microsoft - 1 */}
              <div className="group">
                <img
                  src={microsoftLogo}
                  alt="Microsoft"
                  className="w-[110px] h-[30px] filter grayscale group-hover:grayscale-0 transition-all duration-300"
                />
              </div>

              {/* Google - 2 */}
              <div className="group">
                <img
                  src={googleLogo}
                  alt="Google"
                  className="w-[110px] h-[30px] filter grayscale group-hover:grayscale-0 transition-all duration-300"
                />
              </div>

              {/* Microsoft - 2 */}
              <div className="group">
                <img
                  src={microsoftLogo}
                  alt="Microsoft"
                  className="w-[110px] h-[30px] filter grayscale group-hover:grayscale-0 transition-all duration-300"
                />
              </div>
            </div>
          </div>

          {/* Right Grid - AI Image */}
          <div className="flex justify-center">
            <div className="w-[574px] h-[595px]">
              <img
                src={gabrielaAI}
                alt="Gabriela AI"
                className="w-full h-full object-contain"
              />
            </div>
          </div>
        </div>
      </div>
      {/* Animated About Section */}
      <section id="about">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          viewport={{ once: true, amount: 0.3 }}
        >
          <About />
        </motion.div>
      </section>
      {/* Animated Services Section */}
      <section id="services">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          viewport={{ once: true, amount: 0.3 }}
        >
          <Services />
        </motion.div>
      </section>

       <section id="solution" >
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          viewport={{ once: false, amount: 0.1 }}
        >
          <Solution />
        </motion.div>
      </section>

       <section id="contact" >
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          viewport={{ once: false, amount: 0.1 }}
        >
          <Contact />
        </motion.div>
      </section>
      
    </div>
  );
};

export default Home;
