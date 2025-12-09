import React, { useContext } from "react";
import { StoreContext } from "../context/StoreContext";
import { useNavigate } from "react-router-dom";

const Cart = () => {
  const {
    food_list,
    cartItems,
    addToCart,
    removeFromCart,
    subtotal,
    deliveryFee,
    total,
  } = useContext(StoreContext);

  const navigate = useNavigate();

  const handleCheckout = () => {
    if (subtotal === 0) {
      alert("Your cart is empty");
      return;
    }

    navigate("/checkout");
  };

  return (
    <div className="w-full flex justify-center mt-16 md:mt-24">
      <div className="w-full max-w-7xl px-4 pt-10 sm:px-6 lg:px-0">
        {/* ✅ Cart Header */}
        <div className="grid grid-cols-6 font-semibold text-gray-600 text-sm md:text-base">
          <p>Items</p>
          <p>Title</p>
          <p>Price</p>
          <p>Quantity</p>
          <p>Total</p>
          <p>Remove</p>
        </div>

        <hr className="my-4" />

        {/* ✅ Cart Items */}
        <div className="space-y-4">
          {food_list.map((item) => {
            const itemId = item._id || item.id;

            if (cartItems[itemId] > 0) {
              return (
                <div key={itemId}>
                  <div className="grid grid-cols-6 items-center text-sm py-2">
                    <img
                      src={item.image}
                      alt={item.name}
                      className="w-12 h-12 md:w-14 md:h-14 object-cover rounded"
                    />

                    <p>{item.name}</p>

                    <p>₦{item.price}</p>

                    {/* ✅ Quantity */}
                    <div className="flex items-center gap-2">
                      <button
                        onClick={() => removeFromCart(itemId)}
                        className="px-2 bg-gray-200 rounded"
                      >
                        -
                      </button>

                      <p>{cartItems[itemId]}</p>

                      <button
                        onClick={() => addToCart(itemId)}
                        className="px-2 bg-gray-200 rounded"
                      >
                        +
                      </button>
                    </div>

                    {/* ✅ Item Total */}
                    <p>₦{item.price * cartItems[itemId]}</p>

                    {/* ✅ Remove */}
                    <div className="flex items-center">
                      <button
                        onClick={() => removeFromCart(itemId)}
                        className="text-gray-400 font-bold text-sm hover:scale-110 transition"
                      >
                        ✕
                      </button>
                    </div>
                  </div>

                  <hr className="border-gray-200" />
                </div>
              );
            }

            return null;
          })}
        </div>

        {/* ---------- Cart Totals ---------- */}
        <div className="w-full max-w-7xl flex flex-col md:flex-row items-start justify-between my-20 gap-10">
          {/* ✅ Totals Box */}
          <div className="w-full md:w-[500px] flex flex-col gap-4">
            <h2 className="font-bold text-2xl">Cart Totals</h2>

            <div className="flex justify-between text-gray-700">
              <p>Subtotal</p>
              <p>₦{subtotal}</p>
            </div>

            <hr className="border-gray-200" />

            <div className="flex justify-between">
              <p>Delivery Fee</p>
              <p>₦{deliveryFee}</p>
            </div>

            <hr className="border-gray-200" />

            <div className="flex justify-between">
              <p className="font-medium">Total</p>
              <p>₦{total}</p>
            </div>

            <button
              onClick={handleCheckout}
              disabled={subtotal === 0}
              className="w-[300px] bg-green-500 disabled:bg-gray-400 text-white font-semibold px-4 py-2 rounded shadow hover:bg-green-700 transition"
            >
              PROCEED TO CHECKOUT
            </button>
          </div>

          {/* ✅ Promo Box */}
          <div className="w-full md:w-[500px] flex flex-col gap-4">
            <p>If you have a promo code, Enter it here</p>

            <div className="relative flex">
              <input
                type="text"
                placeholder="Promo code"
                className="bg-gray-200 w-full px-6 py-2 rounded-md outline-none"
              />

              <button className="bg-black text-white px-5 py-2 absolute right-0 rounded-md">
                Submit
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Cart;
