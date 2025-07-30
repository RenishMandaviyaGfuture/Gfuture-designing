import { useState } from "react";
import { motion } from "framer-motion";
import useScrollSpy from "../hooks/useScrollSpy";
import logo from "../assets/logo.png";
// import { label } from 'framer-motion/client';

const navLinks = [
  { id: "home", label: "Home" },
  { id: "about", label: "About" },
  { id: "services", label: "Services" },
  { id: "solution", label: "Solution" },
  { id: "industries", label: "Industries" },
  { id:'blogInsights',label:'BlogInsights'},
  { id:'contact',label:'Contact'},
];

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [clickedNav, setClickedNav] = useState(null);
  const activeSection = useScrollSpy(
    navLinks.map((link) => link.id),
    80
  );

  const handleScrollTo = (id) => {
    const el = document.getElementById(id);
    if (el) {
      setClickedNav(id);
      el.scrollIntoView({ behavior: "smooth", block:"start" });
      setMenuOpen(false);
      setTimeout(() => setClickedNav(null), 1000);
    }
  };

  const currentActive = clickedNav || activeSection;

  return (
    <nav className="z-50 bg-[#262626] w-full h-[50px] xs:h-[60px] sm:h-[80px] flex items-center px-2 xs:px-4 sm:px-6 max-w-[1840px] mx-auto">
      {/* 🔹 Logo */}
      <div className="flex items-center w-[80px] xs:w-[100px] sm:w-[120px]">
        <img src={logo} alt="Logo" className="w-full h-auto" />
      </div>

      {/* 🔹 Centered Nav */}
      <div className="hidden lg:flex gap-2 xs:gap-3 sm:gap-4 mx-auto px-2 xs:px-4 sm:px-6 py-1 xs:py-1.5 sm:py-2 rounded-full">
        {navLinks.map((link) => (
          <motion.button
            key={link.id}
            onClick={() => handleScrollTo(link.id)}
            className="px-8 py-2 text-center flex items-center justify-center font-medium rounded-full"
            initial={false}
            animate={{
              background:
                currentActive === link.id
                  ? "linear-gradient(to right, #082F91, #1D9C95)"
                  : "transparent",
              color: currentActive === link.id ? "#ffffff" : "#D3D3D3",
            }}
            transition={{ duration: 0.6 }}
          >
            {link.label}
          </motion.button>
        ))}
      </div>

      {/* 🔹 Right Side: Select + Hamburger */}
      <div className="flex items-center gap-2 ml-auto">
        {/* Desktop Select */}
        <select className="hidden xs:block sm:block px-2 xs:px-2.5 sm:px-3 bg-[#262626] py-1 xs:py-1.5 rounded-2xl border text-[#D3D3D3]">
          <option value="Hire Now" className="text-[#D3D3D3] bg-[#262626]">
            Hire Now
          </option>
          <option value="Freelance" className="text-[#D3D3D3] bg-[#262626]">
            Freelance
          </option>
          <option value="Full Time" className="text-[#D3D3D3] bg-[#262626]  ">
            Full Time
          </option>
        </select>

        {/* Mobile Select */}
        <select className="block xs:hidden sm:hidden text-[#D3D3D3] bg-[#262626] border px-1 xs:px-1.5 py-1 rounded">
          <option value="Hire Now" className="sm:text-sm md:text-sm ">Hire Now</option>
          <option value="Freelance" className="sm:text-sm md:text-sm">Freelance</option>
          <option value="Full Time" className="sm:text-sm md:text-sm">Full Time</option>
        </select>

        {/* Hamburger */}
        <button
          className="text-white text-2xl xs:text-2xl sm:text-3xl block lg:hidden"
          onClick={() => setMenuOpen(!menuOpen)}
        >
          ☰
        </button>
      </div>

      {/* 🔹 Mobile Nav Dropdown */}
      {menuOpen && (
        <div className="absolute top-[50px] xs:top-[60px] sm:top-[80px] left-0 w-full bg-[#262626] flex flex-col items-center gap-2 xs:gap-3 sm:gap-4 py-2 xs:py-3 sm:py-4 z-50 lg:hidden">
          {navLinks.map((link) => (
            <button
              key={link.id}
              onClick={() => handleScrollTo(link.id)}
              className={`px-4 py-2 w-full text-start ml-10 ${
                currentActive === link.id ? "text-white" : "text-[#D3D3D3]"
              }`}
            >
              {link.label}
            </button>
          ))}
        </div>
      )}
    </nav>
  );
};

export default Navbar;
