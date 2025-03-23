import React from "react";
import { Link, useNavigate } from "react-router-dom";
import backimage from "../assets/backimage.jpg";
import Navbar from "./Navbar";
import Footer from "./Footer";

const Home = () => {
  const navigate = useNavigate();

  const handleCategoryClick = (category) => {
    navigate(`/shop?category=${category.toLowerCase()}`);
  };

  return (
    <div className="bg-gray-100 min-h-screen">
      <Navbar />
      <div
        className="relative w-full h-[700px] bg-cover bg-center rounded-lg"
        style={{ backgroundImage: `url(${backimage})` }}
      >
        <div className="absolute inset-0 bg-opacity-50"></div>
        <div className="relative z-5 flex flex-col justify-center items-start p-20 m-5">
          <h1 className=" flex text-white text-5xl font-bold mb-22">
            Your One-Stop Shop
            for Quality and Value!
          </h1>
          <Link to="/shop" className="bg-black text-white px-6 py-3 rounded-md text-lg">
            SHOP NOW!
          </Link>
        </div>
      </div>

      {/* Categories Section */}
      <div className="grid grid-cols-2 md:grid-cols-4 gap-6 p-10">
        {["Electronics", "Jewelery", "Men's Clothing", "Women's Clothing"].map((category) => (
          <button
            key={category}
            onClick={() => handleCategoryClick(category)}
            className="bg-white p-10 rounded-xl shadow-md text-center font-semibold text-lg"
          >
            {category}
          </button>
        ))}
      </div>
      <Footer />
    </div>
  );
};

export default Home;
