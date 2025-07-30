import first from "../assets/01.png";
import second from "../assets/02.png";
import third from "../assets/03.png";
import fourth from "../assets/04.png";
import ai_01 from "../assets/ai_01.png";
import card from "../assets/card.png";
import chooseOne from "../assets/choose1.jpg";
import comma from "../assets/comma.png";
import edtech from "../assets/edteck.png";
import healthcare from "../assets/healthcare.png";
import industriesBg from "../assets/industriesBg.png";
import leftArrow from "../assets/leftArrow.png";
import person from "../assets/person.png";
import retail from "../assets/retail.png";
import rightArrow from "../assets/rightArrow.png";
import stars from "../assets/stars.png";
import BlogInsights from "../components/BlogInsights";
import CashStudy from "../components/CashStudy.jsx";
import Industries from "../components/Industries.jsx";
// import Footer from "../components/Footer.jsx";
// import Contact from "./Contact.jsx";
const Solution = () => {
  return (
    <div className="px-2 xs:px-4 py-6 xs:py-8 sm:py-12 max-w-7xl mx-auto ">
      {/* Why Choose Us Section */}
      <div className="text-center mb-6 xs:mb-8 sm:mb-12">
        <h1 className="text-2xl xs:text-3xl sm:text-4xl font-bold mb-2 xs:mb-3 sm:mb-4 text-white">
          Why Choose <span className="text-[#38E8DE]">Us</span>
        </h1>
        <p className="text-xs xs:text-sm sm:text-base text-gray-300 max-w-xs xs:max-w-md sm:max-w-2xl mx-auto">
          Our team of AI specialists builds tailored solutions using
          cutting-edge technologies—turning complex problems into competitive
          advantages.
        </p>
      </div>

      {/* choose1 Left + Features Right in Single Row */}
      <div className="flex flex-col  lg:flex-row items-center justify-between gap-4 xs:gap-6 sm:gap-8 mb-10 xs:mb-14 sm:mb-20">
        {/* Left Section */}
        <div className="w-full lg:w-2/2 relative">
          {/* Small top-left image */}
          <img
            src={first}
            alt=""
            className="w-6 xs:w-8 sm:w-10 lg:w-20 absolute top-2 xs:top-3 sm:top-4 left-2 xs:left-3 sm:left-4 z-10"
          />

          {/* Overlay card */}
          <div className="absolute top-[125px] xs:top-[120px] sm:top-[150px] md:top-[300px] lg:top-[320px] left-[2px] xs:left-[5px] md:left-[20px] lg:left-[20px] bg-[#1F1F1F]/80 rounded-4xl p-2 xs:p-3 sm:p-4 text-white w-85 xs:w-50 sm:w-75 md:w-[500px] lg:w-[680px] z-10 backdrop-blur-sm shadow-lg">
            <div className="flex items-start gap-3 xs:gap-3 sm:gap-4">
              {/* Icon/Image */}
              <img
                src={card}
                alt="Card"
                className="w-6 xs:w-8 sm:w-10 lg:w-12 h-6 xs:h-8 sm:h-10 lg:h-12 object-cover"
              />

              {/* Text Content */}
              <div className="flex flex-col  ">
                <h1 className="text-xs xs:text-sm sm:text-base lg:text-xl font-semibold">
                  AI Strategy & Consulting
                </h1>
                <p className="text-xs xs:text-sm sm:text-base text-gray-300 leading-snug">
                  We help you define, plan, and implement AI strategies aligned
                  with your business goals.
                </p>
              </div>
            </div>
          </div>

          {/* Main image */}
          <img
            src={chooseOne}
            alt="Choose Us Main"
            className="w-full lg:w-200 rounded-3xl shadow-lg object-cover"
          />
        </div>

        {/* Right Feature Boxes (in one horizontal row) */}
        <div className="w-full  lg:w-1/3 flex flex-row lg:flex-row gap-2 xs:gap-4 sm:gap-8 items-center justify-center">
          {[
            { img: second, title: "Enterprise Security" },
            { img: third, title: "Explainable AI" },
            { img: fourth, title: "Trusted Partnerships" },
          ].map((item, index) => (
            <div
              key={index}
              className="border border-black rounded-3xl bg-[#1F1F1F] p-2 xs:p-3 sm:p-4 w-[60px] xs:w-[80px] sm:w-[100px] h-[210px] xs:h-[200px] sm:h-[300px] md:h-[400px] lg:h-[460px] mt-2 xs:mt-3 sm:mt-5 flex flex-col items-center justify-between shadow-md"
            >
              <img
                src={item.img}
                alt={item.title}
                className="w-8 xs:w-10 sm:w-15 h-8 xs:h-10 sm:h-15"
              />
              <h2 className="text-xs xs:text-sm sm:text-base lg:text-3xl font-semibold text-white [writing-mode:sideways-lr] text-center">
                {item.title}
              </h2>
            </div>
          ))}
        </div>
      </div>

      {/* Industries We Serve */}
      <div id="industries">
        <Industries />
      </div>

      <div
        className=" bg-center bg-no-repeat p-2 xs:p-4 sm:p-8 rounded-3xl"
        style={{ backgroundImage: `url(${industriesBg})` }}
      >
        <div className="grid xs:grid-cols-1 md:grid-cols-2 gap-4 xs:gap-6 sm:gap-10 mb-4 xs:mb-6 sm:mb-8 mt-4 xs:mt-6 sm:mt-8">
          {/* Card 1 */}
          <div className="p-2 xs:p-4 sm:p-6 shadow hover:shadow-lg transition flex flex-col items-center text-center">
            <img
              src={ai_01}
              alt="Finance"
              className="w-8 xs:w-10 sm:w-15 h-8 xs:h-10 sm:h-15 mb-2 xs:mb-3 sm:mb-4"
            />
            <h2 className="text-base xs:text-lg sm:text-xl font-semibold mb-1 xs:mb-1.5 sm:mb-2">
              Finance
            </h2>
            <p className="text-xs xs:text-sm sm:text-base text-gray-400">
              Harnessing the power of AI at the core of every solution we build.
            </p>
          </div>

          {/* Card 2 */}
          <div className="p-6 shadow hover:shadow-lg transition flex flex-col items-center text-center">
            <img src={retail} alt="Retail" className="w-15 h-15 mb-4" />
            <h2 className="text-xl font-semibold mb-2">Retail</h2>
            <p className="text-gray-400">
              Robust, scalable protection built to meet the highest industry
              standards.
            </p>
          </div>

          {/* Card 3 */}
          <div className="p-6 shadow hover:shadow-lg transition flex flex-col items-center text-center">
            <img src={healthcare} alt="Healthcare" className="w-15 h-15 mb-4" />
            <h2 className="text-xl font-semibold mb-2">Healthcare</h2>
            <p className="text-gray-400">
              Healthcare solutions using AI for diagnostics and operations
              efficiency.
            </p>
          </div>

          {/* Card 4 */}
          <div className="p-6 shadow hover:shadow-lg transition flex flex-col items-center text-center">
            <img src={edtech} alt="Edtech" className="w-15 h-15 mb-4" />
            <h2 className="text-xl font-semibold mb-2">Edtech</h2>
            <p className="text-gray-400">
              Building AI solutions that are transparent, fair, and accountable.
            </p>
          </div>
        </div>
      </div>

      {/* Testimonials */}
      <div className="relative rounded-3xl max-w-7xl bg-[#1F1F1F] py-12 px-8 mx-auto">
        {/* Heading + Arrows */}
        <div className="flex justify-between items-start mb-10">
          {/* Heading */}
          <h1 className="text-3xl font-bold ml-10 text-white">
            What our <span className="text-[#38E8DE]">client</span> <br /> says
          </h1>

          {/* Arrows stacked vertically */}
          <div className="flex flex-col items-center gap-4">
            <img
              src={leftArrow}
              alt="Left"
              className="w-8 h-8 mr-8 cursor-pointer hover:scale-110 transition"
            />
            <img
              src={rightArrow}
              alt="Right"
              className="w-8 h-8 mr-8 cursor-pointer hover:scale-110 transition"
            />
          </div>
        </div>

        {/* Testimonial Card */}
        <div className="max-w-7xl mx-auto rounded-3xl shadow-lg bg-[#1F1F1F] p-2 flex flex-col md:flex-row items-stretch gap-12 text-white">
          {/* 👤 Person image with comma */}
          <div className="relative w-fit mx-auto md:mx-0">
            {/* Comma icon - Responsive position */}
            <img
              src={comma}
              alt="Quote"
              className="absolute -top-4 left-1/1 -translate-x-1/2 w-6 h-6 sm:w-8 sm:h-8 md:w-10 md:h-10 z-10"
            />

            {/* Person image */}
            <img
              src={person}
              alt="Client"
              className="w-40 h-40 sm:w-48 sm:h-48 object-cover  shadow-lg"
            />
          </div>

          {/* 📝 Testimonial content block with equal height */}
          <div className="flex-1 bg-[#111112] p-4 rounded-xl flex flex-col justify-between">
            {/* Name + stars */}
            <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between mb-2">
              <h1 className="text-2xl font-semibold">Darrell Steward</h1>
              <img src={stars} alt="Rating" className="w-28" />
            </div>

            {/* Designation */}
            <h2 className="text-sm text-[#6D6B72] mb-3">CEO, ABC Int. Ltd.</h2>

            {/* Testimonial text */}
            <p className="text-sm text-gray-300 leading-relaxed">
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry. Lorem Ipsum has been the industry's standard dummy text 
              ever since the 1500s, when an unknown printer took a galley of
              type and scrambled it to make a type specimen book. It has
              survived not only five centuries.
            </p>
          </div>
        </div>
      </div>

      <div id="blogInsights">
        <BlogInsights />
        <CashStudy />
      </div>
    </div>
  );
};

export default Solution;
