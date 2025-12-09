import React, { useContext, useState } from "react";
import { FaShoppingCart, FaSearch } from "react-icons/fa";
import { Link, useNavigate } from "react-router-dom";
import { StoreContext } from "../context/StoreContext";
const Navbar = ({ setShowLogin }) => {
  const [activeLink, setActiveLink] = useState("home");

  const navigate = useNavigate();

  const { cartCount, total } = useContext(StoreContext);

  const handleScroll = (id, name) => {
    setActiveLink(name);
    navigate("/");
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
  };
  const scrollToTop = () => {
    setActiveLink("home");
    navigate("/");
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

          <Link to="/cart">
            <div className="relative cursor-pointer">
              <FaShoppingCart className="text-2xl text-[#49557e]" />
              {cartCount > 0 && (
                <span className="absolute -top-2 -right-2 bg-red-500 text-white text-xs min-w-[18px] h-[18px] flex items-center justify-center rounded-full px-1">
                  {cartCount}
                </span>
              )}
              
            </div>
          </Link>

          <button
            onClick={() => setShowLogin(true)}
            className="border border-[#49557e] rounded-full text-[#49557e] font-medium px-6 py-2 hover:bg-[#49557e] hover:text-white transition"
          >
            Sign In
          </button>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
