import React from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <nav className="fixed top-0 left-0 w-full bg-black bg-opacity-80 text-white py-4 px-10 flex justify-between items-center z-50">
      <h1 className="text-2xl font-bold">E-Shop</h1>
      <ul className="flex space-x-6 text-lg">
        <li><Link to="/" className="hover:text-gray-300">Home</Link></li>
        <li><Link to="/shop" className="hover:text-gray-300">Shop</Link></li>
        <li><Link to="/about" className="hover:text-gray-300">About</Link></li>
        <li><Link to="/contact" className="hover:text-gray-300">Contact</Link></li>
        <li className="relative">
          <Link to="/cart" className="hover:text-gray-300">Cart</Link>
          {/* Cart Badge */}
          <span className="absolute -top-2 -right-3 bg-red-500 text-white text-xs rounded-full px-2">
            3
          </span>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
