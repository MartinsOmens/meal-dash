import React, { useContext } from "react";
import { StoreContext } from "../context/StoreContext";

const Checkout = () => {
  const { subtotal, deliveryFee, total } = useContext(StoreContext);

  return (
    <div className="w-full flex justify-center mt-16 md:mt-24 px-4 sm:px-6 lg:px-0">
      <div className="w-full max-w-7xl flex flex-col md:flex-row gap-10 lg:gap-20 my-12">
        {/* ---------------- Delivery Information ---------------- */}
        <div className="w-full md:flex-1 flex flex-col gap-6">
          <h2 className="font-bold text-2xl md:text-3xl">
            Delivery Information
          </h2>
          <form className="flex flex-col gap-5">
            {/* Name Fields */}
            <div className="flex flex-col md:flex-row gap-3">
              <input
                type="text"
                placeholder="Last Name"
                required
                className="flex-1 px-4 py-3 border border-gray-300 rounded-md outline-none focus:ring-2 focus:ring-green-500"
              />
              <input
                type="text"
                placeholder="First Name"
                required
                className="flex-1 px-4 py-3 border border-gray-300 rounded-md outline-none focus:ring-2 focus:ring-green-500"
              />
            </div>

            {/* Email */}
            <input
              type="email"
              placeholder="Email address"
              required
              className="w-full px-4 py-3 border border-gray-300 rounded-md outline-none focus:ring-2 focus:ring-green-500"
            />

            {/* Street */}
            <input
              type="text"
              placeholder="Street"
              required
              className="w-full px-4 py-3 border border-gray-300 rounded-md outline-none focus:ring-2 focus:ring-green-500"
            />

            {/* City & State */}
            <div className="flex flex-col md:flex-row gap-3">
              <input
                type="text"
                placeholder="City"
                required
                className="flex-1 px-4 py-3 border border-gray-300 rounded-md outline-none focus:ring-2 focus:ring-green-500"
              />
              <input
                type="text"
                placeholder="State"
                required
                className="flex-1 px-4 py-3 border border-gray-300 rounded-md outline-none focus:ring-2 focus:ring-green-500"
              />
            </div>

            {/* Zip Code & Country */}
            <div className="flex flex-col md:flex-row gap-3">
              <input
                type="number"
                placeholder="Zip Code"
                required
                className="flex-1 px-4 py-3 border border-gray-300 rounded-md outline-none focus:ring-2 focus:ring-green-500"
              />
              <input
                type="text"
                placeholder="Country"
                required
                className="flex-1 px-4 py-3 border border-gray-300 rounded-md outline-none focus:ring-2 focus:ring-green-500"
              />
            </div>
          </form>
        </div>

        {/* ---------------- Cart Totals ---------------- */}
        <div className="w-full md:w-[400px] lg:w-[500px] flex flex-col gap-6">
          <h2 className="font-bold text-2xl md:text-3xl">Cart Totals</h2>

          <div className="flex justify-between text-gray-700 text-lg md:text-base">
            <p>Subtotal</p>
            <p>₦{subtotal}</p>
          </div>

          <hr className="border-gray-200" />

          <div className="flex justify-between text-gray-700 text-lg md:text-base">
            <p>Delivery Fee</p>
            <p>₦{deliveryFee}</p>
          </div>

          <hr className="border-gray-200" />

          <div className="flex justify-between font-medium text-lg md:text-xl">
            <p>Total</p>
            <p>₦{total}</p>
          </div>

          <button
            disabled={subtotal === 0}
            className="w-full md:w-[300px] bg-green-500 disabled:bg-gray-400 text-white font-semibold px-4 py-3 rounded shadow hover:bg-green-700 transition self-start"
          >
            PROCEED TO PAYMENT
          </button>
        </div>
      </div>
    </div>
  );
};

export default Checkout;
