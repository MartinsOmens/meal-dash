import React from "react";
import { assets } from "../assets/assets";

const Header = () => {
  return (
    <div className="w-full flex justify-center mt-16 md:mt-24">
      {/* ✅ This wrapper keeps max-w-7xl across ALL screens */}
      <div className="w-full max-w-7xl px-4 sm:px-6 lg:px-0">
        <div
          className="w-full h-[260px] sm:h-80 md:h-[380px] lg:h-[420px]
                     bg-cover bg-center rounded-xl
                     flex items-center relative overflow-hidden"
          style={{ backgroundImage: `url(${assets.Banner_1})` }}
        >
          {/* ✅ Overlay */}
          <div className="absolute inset-0 bg-black/40 rounded-xl"></div>

          {/* ✅ Content */}
          <div className="relative max-w-full sm:max-w-md md:max-w-lg px-4 sm:px-6">
            <h2 className="text-2xl sm:text-3xl md:text-5xl font-bold text-white mb-3 leading-tight">
              Order your favourite food here
            </h2>

            <p className="text-sm sm:text-base md:text-lg text-white mb-4">
              Choose from a diverse menu featuring a delectable array of dishes
              crafted with the finest ingredients.
            </p>

            <button
              onClick={() =>
                document
                  .getElementById("food-menu")
                  ?.scrollIntoView({ behavior: "smooth" })
              }
              className="bg-[#49557e] hover:bg-[#3f4a6b] transition text-white 
                               px-4 sm:px-5 md:px-6 
                               py-2 rounded-md text-sm sm:text-base"
            >
              View Menu
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;
