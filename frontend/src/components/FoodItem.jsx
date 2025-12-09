import { useContext } from "react";
import { FaStar, FaStarHalfAlt, FaRegStar, FaMinus } from "react-icons/fa";
import { FaPlus } from "react-icons/fa6";
import { StoreContext } from "../context/StoreContext";

const FoodItem = ({ id, name, image, description, price, rating }) => {
  const { cartItems, addToCart, removeFromCart, getTotalItemCount } =
    useContext(StoreContext);

  const itemCount = cartItems[id] || 0;

  //Rating functionality
  const renderStars = () => {
    const stars = [];

    for (let i = 1; i <= 5; i++) {
      if (rating >= i) {
        stars.push(<FaStar key={i} className="text-yellow-400" />);
      } else if (rating >= i - 0.5) {
        stars.push(<FaStarHalfAlt key={i} className="text-yellow-400" />);
      } else {
        stars.push(<FaRegStar key={i} className="text-yellow-400" />);
      }
    }

    return stars;
  };

  return (
    <div className="flex flex-col gap-2 p-4 rounded-lg shadow-sm hover:shadow-md transition">
      {/* ✅ Food Image */}
      <img
        src={image}
        alt={name}
        className="w-full h-40 object-cover rounded-md"
      />

      {/* Item Count */}

      {!itemCount ? (
        // ✅ SHOW ADD BUTTON WHEN COUNT IS 0
        <button
          onClick={() => addToCart(id)}
          className="mt-2 bg-[#49557e] text-white py-1 rounded-md hover:bg-[#3c466b] transition"
        >
          Add
        </button>
      ) : (
        // ✅ SHOW COUNTER WHEN COUNT > 0
        <div className="flex items-center justify-between mt-2 shadow-md rounded-md px-3 py-1">
          <FaMinus
            onClick={() => removeFromCart(id)}
            className="text-xl font-semibold"
          />
          <span className="font-semibold">{itemCount}</span>
          <FaPlus
            onClick={() => addToCart(id)}
            className="text-xl font-bold"
          />
        </div>
      )}

      <div className="flex justify-between">
        {/* ✅ Name */}
        <h3 className="font-semibold text-lg">{name}</h3>
        {/* ✅ Rating */}
        <div className="flex items-center gap-1">{renderStars()}</div>
      </div>

      {/* ✅ Description */}
      <p className="text-sm text-gray-500">{description}</p>

      {/* ✅ Price */}
      <p className="text-[#49557e] text-[22px] font-semibold">${price}</p>
    </div>
  );
};

export default FoodItem;
