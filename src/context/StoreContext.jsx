import { createContext, useEffect, useState } from "react";
import { food_list } from "../assets/assets";

export const StoreContext = createContext(null);

const StoreContextProvider = (props) => {
  const [cartItems, setCartItems] = useState({});

  // ✅ Add Item
  const addToCart = (id) => {
    setCartItems((prev) => {
      const updated = { ...prev, [id]: (prev[id] || 0) + 1 };
      return updated;
    });
  };
  // ✅ Remove Item
  const removeFromCart = (id) => {
    setCartItems((prev) => {
      if (!prev[id]) return prev;
      return { ...prev, [id]: prev[id] - 1 };
    });
  };
 

  const contextValue = {
    food_list,
    cartItems,
    addToCart,
    removeFromCart,
    
  };

  return (
    <StoreContext.Provider value={contextValue}>
      {props.children}
    </StoreContext.Provider>
  );
};

export default StoreContextProvider;
