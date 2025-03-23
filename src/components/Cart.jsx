import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { removeFromCart } from "../redux/cartSlice";

const Cart = () => {
  const cart = useSelector((state) => state.cart);
  const dispatch = useDispatch();

  // Calculate total price
  const totalPrice = cart.reduce((acc, item) => acc + item.price * item.quantity, 0).toFixed(2);

  return (
    <div className="max-w-5xl mx-auto p-6">
      <h2 className="text-3xl font-semibold mb-6">Shopping Cart</h2>

      {cart.length === 0 ? (
        <p className="text-lg">Your cart is empty.</p>
      ) : (
        <>
          {cart.map((item) => (
            <div key={item.id} className="flex items-center border rounded-lg p-4 mb-4 shadow-md">
              {/* Product Image */}
              <img src={item.image} alt={item.title} className="w-24 h-24 object-contain mr-4" />

              {/* Product Info */}
              <div className="flex-1">
                <a href={`/product/${item.id}`} className="text-lg font-semibold text-blue-600 hover:underline">
                  {item.title}
                </a>
                <p className="text-gray-500">{item.category}</p>
              </div>

              {/* Quantity */}
              <p className="w-10 text-center">{item.quantity}</p>

              {/* Price */}
              <p className="w-20 text-right">${item.price}</p>

              {/* Remove Button */}
              <button
                onClick={() => dispatch(removeFromCart(item.id))}
                className="ml-4 text-xl text-gray-600 hover:text-red-500"
              >
                ✖
              </button>
            </div>
          ))}

          {/* Total Price */}
          <div className="mt-6 text-right text-xl font-semibold border p-4 rounded-lg shadow-md inline-block">
            Total Price: ${totalPrice}
          </div>
        </>
      )}
    </div>
  );
};

export default Cart;
