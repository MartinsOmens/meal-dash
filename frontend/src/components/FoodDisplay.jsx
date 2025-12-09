import React, { useContext } from "react";
import { StoreContext } from "../context/StoreContext";
import FoodItem from "./FoodItem";
import { motion, AnimatePresence } from "framer-motion";

const FoodDisplay = ({ category }) => {
  const { food_list } = useContext(StoreContext);

  const filteredFood =
    category === "All"
      ? food_list
      : food_list.filter((item) => item.category === category);

  return (
    <div className="w-full max-w-7xl mx-auto flex  py-2 pb-20" id="food-menu">
      <div>
        <h2 className="text-xl sm:text-2xl md:text-3xl font-bold mb-2 text-[#262626]">
          Top dishes near you
        </h2>
        <div className="w-full grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          <AnimatePresence>
            {filteredFood.length > 0 ? (
              filteredFood.map((item) => (
                <motion.div
                  key={item.id}
                  layout
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: 20 }}
                  transition={{ duration: 0.4, ease: "easeOut" }}
                >
                  <FoodItem
                    id={item.id}
                    name={item.name}
                    image={item.image}
                    description={item.description}
                    price={item.price}
                    rating={item.rating}
                  />
                </motion.div>
              ))
            ) : (
              <motion.p
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                className="text-gray-500 col-span-full text-center"
              >
                No food available in this category.
              </motion.p>
            )}
          </AnimatePresence>
        </div>
      </div>
    </div>
  );
};

export default FoodDisplay;
