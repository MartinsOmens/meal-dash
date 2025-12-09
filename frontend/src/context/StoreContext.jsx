import { createContext, useMemo, useState } from "react";
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

  // ✅ CALCULATE SUBTOTAL
  const subtotal = food_list.reduce((acc, item) => {
    const itemId = item._id || item.id;
    if (cartItems[itemId] > 0) {
      acc += item.price * cartItems[itemId];
    }
    return acc;
  }, 0);

  // ✅ DELIVERY FEE LOGIC
  const deliveryFee = subtotal === 0 ? 0 : 300;

  // ✅ FINAL TOTAL
  const total = subtotal + deliveryFee;

  // ✅ TOTAL NUMBER OF ITEMS IN CART
  const cartCount = useMemo(() => {
    return Object.values(cartItems).reduce(
      (acc, quantity) => acc + quantity,
      0
    );
  }, [cartItems]);

  const contextValue = {
    food_list,
    cartItems,
    addToCart,
    removeFromCart,
    subtotal,
    deliveryFee,
    total,
    cartCount,
  };

  return (
    <StoreContext.Provider value={contextValue}>
      {props.children}
    </StoreContext.Provider>
  );
};

export default StoreContextProvider;
