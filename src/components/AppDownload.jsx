import React from "react";
import { assets } from "../assets/assets";

const AppDownload = () => {
  return (
    <section
      className="w-full flex items-center justify-center py-16 sm:py-20"
      id="mobile-app"
    >
      <div className="w-full max-w-7xl px-4 sm:px-6 lg:px-0 text-center">
        {/* ✅ Heading */}
        <p className="text-gray-700 text-3xl sm:text-4xl md:text-5xl font-bold leading-tight">
          For better experience, download <br />
          <span className="text-gray-600">Meal</span>
          <span className="text-green-600">Dash</span>
        </p>

        {/* ✅ Store Buttons */}
        <div className="flex flex-wrap items-center justify-center gap-6 mt-10">
          <img
            src={assets.Play_Store}
            alt="play-store"
            className="w-[max(30vw,140px)] sm:w-[180px] md:w-[200px] cursor-pointer 
                       transition-all duration-300 ease-in-out 
                       hover:scale-110 hover:opacity-90"
          />

          <img
            src={assets.Apple_Store}
            alt="apple-store"
            className="w-[max(30vw,140px)] sm:w-[180px] md:w-[200px] cursor-pointer 
                       transition-all duration-300 ease-in-out 
                       hover:scale-110 hover:opacity-90"
          />
        </div>
      </div>
    </section>
  );
};

export default AppDownload;
