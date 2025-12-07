import React, { useState } from "react";
import { assets } from "../assets/assets";
import { FaShoppingCart, FaSearch } from "react-icons/fa";

const Navbar = ({setShowLogin}) => {
  const [activeLink, setActiveLink] = useState("home");

  const handleScroll = (id, name) => {
    setActiveLink(name);
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
  };
  const scrollToTop = () => {
    setActiveLink("home");
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const linkStyle = (name) =>
    `font-medium cursor-pointer transition pb-1 ${
      activeLink === name
        ? "text-[#49557e] border-b-2 border-[#49557e]"
        : "text-gray-600 hover:text-[#49557e] hover:border-b-2 hover:border-[#49557e]"
    }`;

  return (
    <nav className="w-full bg-gray-100 fixed top-0 left-0 z-50 shadow-lg">
      <div className="max-w-7xl mx-auto flex items-center justify-between px-4 h-[70px]">
        {/* ✅ Logo */}
        <div onClick={scrollToTop} className="cursor-pointer">
          <h2 className="text-gray-700 text-lg sm:text-xl font-semibold">
            Meal<span className="text-green-600">Dash</span>
          </h2>
        </div>
        {/* ✅ Scroll Links */}
        <div className="hidden md:flex gap-8">
          <span onClick={scrollToTop} className={linkStyle("home")}>
            Home
          </span>

          <span
            onClick={() => handleScroll("food-menu", "menu")}
            className={linkStyle("menu")}
          >
            Menu
          </span>

          <span
            onClick={() => handleScroll("mobile-app", "mobile")}
            className={linkStyle("mobile")}
          >
            Mobile-app
          </span>

          <span
            onClick={() => handleScroll("contact-us", "contact")}
            className={linkStyle("contact")}
          >
            Contact Us
          </span>
        </div>

        {/* ✅ Icons */}
        <div className="flex items-center gap-6">
          <FaSearch className="text-2xl text-[#49557e] cursor-pointer" />

          <div className="relative cursor-pointer">
            <FaShoppingCart className="text-2xl text-[#49557e]" />
            <span className="absolute -top-1.5 -right-1.5 h-3 w-3 rounded-full bg-red-500"></span>
          </div>

          <button onClick={() => setShowLogin(true)}
          className="border border-[#49557e] rounded-full text-[#49557e] font-medium px-6 py-2 hover:bg-[#49557e] hover:text-white transition">
            Sign In
          </button>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
