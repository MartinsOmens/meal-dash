
import React from "react";
import { menu_list } from "../assets/assets";

const ExploreMenu = ({ category, setCategory }) => {
  return (
    <section
      className="w-full flex justify-center mt-16 px-4 sm:px-6 lg:px-8"
      id="food-menu"
    >
      <div className="w-full max-w-7xl">
        {/* ✅ Title */}
        <h1 className="text-xl sm:text-2xl md:text-3xl font-bold mb-2 text-[#262626]">
          Explore from the menu
        </h1>

        {/* ✅ Description */}
        <p className="text-gray-600 text-sm sm:text-base max-w-2xl mb-6">
          Choose from a diverse menu featuring a delectable array of dishes. Our
          mission is to satisfy your cravings and elevate your dining
          experience, one delicious meal at a time.
        </p>

        {/* ✅ Responsive Categories */}
        <div className="w-full flex gap-4 sm:gap-6 items-center justify-between overflow-x-auto scrollbar-hide py-3">
          {menu_list.map((item, index) => {
            const isActive = category === item.menu_name;

            return (

              <button
                key={index}
                onClick={() =>
                  setCategory((prev) =>
                    prev === item.menu_name ? "All" : item.menu_name
                  )
                }
                className="flex flex-col items-center justify-center gap-2 min-w-16 sm:min-w-20 focus:outline-none"
                
              >
                {/* ✅ Image (FIXED SIZES NOT VW) */}
                <img
                  src={item.menu_image}
                  alt={item.menu_name}
                  className={`
                    w-16 h-16 
                    sm:w-20 sm:h-20 
                    md:w-24 md:h-24 
                    lg:w-20 lg:h-20
                    object-cover 
                    rounded-full
                    transition-all duration-300
                    ${
                      isActive
                        ? "scale-105 border-2 border-[#49557e] p-1"
                        : "opacity-80 hover:opacity-100"
                    }
                  `}
                />

                {/* ✅ Text */}
                <p
                  className={`text-xs sm:text-sm text-center transition ${
                    isActive ? "text-[#49557e] font-semibold" : "text-[#808080]"
                  }`}
                >
                  {item.menu_name}
                </p>
              </button>
            );

          })}
        </div>

        {/* ✅ Divider */}
        <hr className="w-full h-1 bg-gray-200 border-0 my-10 rounded" />
      </div>
    </section>
  );
};

export default ExploreMenu;
