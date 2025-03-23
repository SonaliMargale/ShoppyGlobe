import React from "react";
import { useDispatch } from "react-redux";
import { removeFromCart } from "../redux/cartSlice";

const CartItem = ({ item }) => {
  const dispatch = useDispatch();

  return (
    <div className="flex items-center justify-between bg-white p-4 shadow rounded-md mb-2">
      <img src={item.image} alt={item.title} className="h-20" />
      <h2 className="text-lg font-semibold">{item.title}</h2>
      <p>${item.price}</p>
      <button
        onClick={() => dispatch(removeFromCart(item.id))}
        className="bg-red-500 text-white px-3 py-1 rounded"
      >
        Remove
      </button>
    </div>
  );
};

export default CartItem;