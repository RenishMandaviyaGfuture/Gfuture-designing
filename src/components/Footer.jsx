import logo from '../assets/logo.png';
import facebook from '../assets/facebook.png';
import twitter from '../assets/twitter.png';
import linkedin from '../assets/linkedin.png';
import instagram from '../assets/instagram.png';
import Email2 from '../assets/Email2.png';

const Footer = () => {
  return (
    <footer className="w-full lg:w-380 bg-[#1A1A22] rounded-3xl text-white px-2 xs:px-4 md:px-12 lg:px-12 py-6 xs:py-8 sm:py-10">
      {/* Top Grid */}
      <div className="w-full mx-auto grid grid-cols-1 xs:grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3 gap-6 xs:gap-8 sm:gap-10 ">
        {/* Logo and Social */}
        <div>
          <img src={logo} alt="Logo" className="h-8 xs:h-10 sm:h-12 mb-2 xs:mb-3 sm:mb-4" />
          <p className="text-xs xs:text-sm sm:text-base text-gray-400 mb-2 xs:mb-3 sm:mb-4 max-w-xs">
            Lorem Ipsum is simply dummy text of the printing and typesetting industry.
          </p>
          <div className="flex gap-2 xs:gap-3 sm:gap-4">
            <a href="#" aria-label="Facebook">
              <img src={facebook} alt="Facebook" className="h-6 xs:h-7 sm:h-8 w-6 xs:w-7 sm:w-8 hover:scale-110 transition" />
            </a>
            <a href="#" aria-label="Twitter">
              <img src={twitter} alt="Twitter" className="h-6 xs:h-7 sm:h-8 w-6 xs:w-7 sm:w-8 hover:scale-110 transition" />
            </a>
            <a href="#" aria-label="LinkedIn">
              <img src={linkedin} alt="LinkedIn" className="h-6 xs:h-7 sm:h-8 w-6 xs:w-7 sm:w-8 hover:scale-110 transition" />
            </a>
            <a href="#" aria-label="Instagram">
              <img src={instagram} alt="Instagram" className="h-6 xs:h-7 sm:h-8 w-6 xs:w-7 sm:w-8 hover:scale-110 transition" />
            </a>
          </div>
        </div>

        {/* Quick Links */}
        <div className="sm:pl-5 xs:pl-3 pl-2">
          <h2 className="text-base xs:text-lg font-semibold mb-2 xs:mb-3 sm:mb-4">Quick Links</h2>
          <ul className="space-y-1 xs:space-y-2 text-xs xs:text-sm sm:text-base text-gray-300">
            <li><a href="#">Services</a></li>
            <li><a href="#">About</a></li>
            <li><a href="#">Solution</a></li>
            <li><a href="#">Industries</a></li>
            <li><a href="#">Blog</a></li>
            <li><a href="#">Career</a></li>
            <li><a href="#">Contact</a></li>
          </ul>
        </div>

        {/* Other Links */}
        <div className="sm:pl-5 xs:pl-3 pl-2">
          <h2 className="text-base xs:text-lg font-semibold mb-2 xs:mb-3 sm:mb-4">Other Links</h2>
          <ul className="space-y-1 xs:space-y-2 text-xs xs:text-sm sm:text-base text-gray-300">
            <li><a href="#">Terms & Conditions</a></li>
            <li><a href="#">Privacy Policy</a></li>
            <li><a href="#">Legal Disclaimer</a></li>
            <li><a href="#">Cookie Policy</a></li>
          </ul>
        </div>
      </div>

      {/* Marquee */}
      <div className="w-full mt-6 xs:mt-8 sm:mt-10 overflow-hidden">
        <marquee
          behavior="scroll"
          direction="left"
          scrollamount="12"
          className="font-[Orbitron] text-[1.2rem] xs:text-[2rem] sm:text-[3rem] md:text-[4rem] lg:text-[5rem] xl:text-[7rem] text-[#33353B]"
        >
          Transforming Ideas into Intelligent Actions.
        </marquee>
      </div>

      {/* Bottom Bar */}
      <div className="w-full border-t border-[#38384A] pt-2 xs:pt-3 sm:pt-4 mt-2 xs:mt-4 sm:mt-6">
        <div className="flex flex-col xs:flex-row sm:flex-row items-center justify-between gap-2 xs:gap-3 sm:gap-4 px-1 xs:px-2 sm:px-4">
          {/* Left */}
          <h2 className="text-xs xs:text-sm sm:text-base text-white text-center xs:text-left"> 2025 - GFuture Tech Pvt Ltd.</h2>

          {/* Right */}
          <div className="flex items-center gap-1 xs:gap-2">
            <img src={Email2} alt="Email Icon" className="h-3 xs:h-4 w-3 xs:w-4" />
            <h2 className="text-xs xs:text-sm sm:text-base text-white">Contact@gfuturetech.com</h2>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
