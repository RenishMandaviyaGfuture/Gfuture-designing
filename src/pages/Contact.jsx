import map from "../assets/map.png";
import Location from "../assets/location.png";
import Mobile from "../assets/contact.png";
import Email from "../assets/email.png";
import flag from "../assets/flag.png";
import Arrow4 from "../assets/Arrow4.png";
import background2 from "../assets/background2.png";
import Footer from "../components/Footer.jsx";

const Contact = () => {
  return (
    <>
      <div className="px-8 xs:px-4 md:px-12 lg:px-10 py-4 max-w-7xl mx-auto text-white">
        {/* Header */}
        <div className="text-start mb-6 sm:mb-10">
          <h1 className="text-2xl xs:text-3xl sm:text-4xl font-bold">
            Get in <span className="text-[#38E8DE]">Touch</span>
          </h1>
          <p className="text-xs xs:text-sm sm:text-base text-gray-400 mt-2">
            Lorem ipsum dolor sit amet, consectetur
          </p>
        </div>

        {/* Info + Form */}
        <div className="grid grid-cols-1 md:grid-cols-1 lg:grid-cols-2 gap-2">
          {/* Contact Info */}
          <div className="space-y-6 sm:space-y-10">
            {/* Phone */}
            <div className="flex items-start gap-3 sm:gap-4">
              <img src={Mobile} alt="Phone" className="w-8 sm:w-10 h-8 sm:h-10" />
              <div>
                <h4 className="text-sm sm:text-base text-gray-400">Phone Number</h4>
                <h2 className="text-base sm:text-lg font-semibold">+91 87802 63375</h2>
              </div>
            </div>

            {/* Email */}
            <div className="flex items-start gap-3 sm:gap-4">
              <img src={Email} alt="Email" className="w-8 sm:w-10 h-8 sm:h-10" />
              <div>
                <h4 className="text-sm sm:text-base text-gray-400">Email</h4>
                <h2 className="text-base sm:text-lg font-semibold">contact@gfuturetech.com</h2>
              </div>
            </div>

            {/* Location */}
            <div className="flex items-start gap-3 sm:gap-4">
              <img src={Location} alt="Location" className="w-8 sm:w-10 h-8 sm:h-10" />
              <div>
                <h4 className="text-sm sm:text-base text-gray-400">Headquarter</h4>
                <h2 className="text-base sm:text-lg font-semibold">Ahmedabad, India</h2>
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <div className="bg-[#1a1a1a] p-4 xs:p-6 sm:p-10 md:p-6 rounded-3xl shadow-lg">
            <h1 className="text-2xl sm:text-3xl font-bold mb-4 sm:mb-6">
              Contact <span className="text-[#38E8DE]">US</span>
            </h1>
            <form className="space-y-3">
              <div>
                <label className="block text-sm sm:text-base mb-1">Name</label>
                <input
                  type="text"
                  placeholder="Enter your name"
                  className="w-full px-3 py-2 sm:py-3 rounded-md bg-[#030303] text-white border border-gray-600 focus:outline-none"
                />
              </div>

              <div>
                <label className="block text-sm sm:text-base mb-1">Email</label>
                <input
                  type="email"
                  placeholder="Enter your email"
                  className="w-full px-3 py-2 sm:py-3 rounded-md bg-[#030303] text-white border border-gray-600 focus:outline-none"
                />
              </div>

              <div className="flex flex-col md:flex-row gap-3">
                <div className="flex-1">
                  <label className="block text-sm sm:text-base mb-1">Project Budget</label>
                  <select className="w-full px-3 py-2 sm:py-3 rounded-md bg-[#030303] border border-gray-600 text-white">
                    <option value="disabled selected" >Select an option</option>
                    <option>$500</option>
                    <option>$1000</option>
                    <option>$1500</option>
                    <option>$2000</option>
                  </select>
                </div>

                <div className="flex-1">
                  <label className="block text-sm sm:text-base mb-1">Amount</label>
                  <input
                    type="text"
                    placeholder="Enter amount"
                    className="w-full px-3 py-2 sm:py-3 rounded-md bg-[#030303] text-white border border-gray-600"
                  />
                </div>
              </div>

              <div>
                <label className="block text-sm sm:text-base mb-1">Message</label>
                <textarea
                  rows={4}
                  placeholder="Your message..."
                  className="w-full px-3 py-2 sm:py-3 rounded-md bg-[#030303] text-white border border-gray-600"
                ></textarea>
              </div>

              <img src={Arrow4} alt="Arrow" className="mt-3 w-8 sm:w-10" />
            </form>
          </div>
        </div>

        {/* Office Section */}
        <div className="mt-12 sm:mt-16 text-center">
          <h1 className="text-2xl sm:text-3xl font-bold mb-6 sm:mb-8">
            Our <span className="text-[#2ce0d6]">Offices</span>
          </h1>

          {/* Map + Cards */}
          <div className="relative w-full  overflow-hidden shadow-lg">
            {/* Map */}
            <img src={map} alt="Map" className="w-full h-auto object-cover " />

            {/* Office Cards for md and up */}
            <div className="hidden md:block">
              {/* Office Card 1 */}
              <div className="absolute top-[17%] left-[19%]">
                <OfficeCard />
              </div>

              {/* Office Card 2 */}
              <div className="absolute top-[18%] left-[68%]">
                <OfficeCard />
              </div>
            </div>
          </div>

          {/* Stacked Cards for mobile/small screens */}
          <div className="mt-0 md:hidden space-y-4">
            <OfficeCard />
            <OfficeCard />
          </div>
        </div>
      </div>
      <Footer />

    </>
  );
};

// Office Card Component
const OfficeCard = () => {
  return (
    <div
      className="relative bg-cover bg-center bg-no-repeat p-3 xs:p-5 sm:p-6 w-[50vw] xs:w-[280px] sm:w-[320px] md:w-[245px] mx-auto text-center"
      style={{ backgroundImage: `url(${background2})` }}
    >
      <div className="absolute inset-0 bg-[linear-gradient(110deg,#38E8DE,#386AE7)] rounded-2xl z-0"></div>
      <div className="relative z-10">
        <img src={flag} alt="Flag" className="w-6 sm:w-8 h-6 sm:h-8 mx-auto mb-2" />
        <h2 className="text-lg sm:text-xl font-semibold text-white mb-2">Ahmedabad</h2>
        <p className="text-sm sm:text-base text-gray-300 leading-snug">
          204 Signature Complex, <br />
          ZYDUS Hospital Road, <br />
          Thaltej, Ahmedabad - 380059
        </p>
      </div>
    </div>
  );
};

export default Contact;
