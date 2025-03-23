import React, { useState, useEffect } from "react";
import { useLocation } from "react-router-dom";
import ProductItem from "./ProductItem";
import useProducts from "../hooks/useProducts";

const ProductList = () => {
  const { products, loading, error } = useProducts();
  const [filteredProducts, setFilteredProducts] = useState([]);
  const location = useLocation();

  // Extract category from URL query string
  const queryParams = new URLSearchParams(location.search);
  const categoryFromURL = queryParams.get("category");

  useEffect(() => {
    if (categoryFromURL && products.length > 0) {
      const filtered = products.filter((product) => 
        product.category.toLowerCase() === categoryFromURL.toLowerCase()
      );
      setFilteredProducts(filtered);
    } else {
      setFilteredProducts(products);
    }
  }, [categoryFromURL, products]);

  if (loading) return <div className="text-center mt-10">Loading products...</div>;
  if (error) return <div className="text-center text-red-500 mt-10">{error}</div>;

  return (
    <div className="flex flex-col items-center min-h-screen bg-gray-100">
      {/* Category Buttons */}
      <div className="flex space-x-4 mb-6 mt-6">
        {["All", "electronics", "jewellery", "men's clothing", "women's clothing"].map((category) => (
          <button
            key={category}
            className="bg-black text-white px-4 py-2 rounded-md hover:bg-gray-700"
            onClick={() => window.location.href = `/shop?category=${category.toLowerCase()}`}
          >
            {category.toUpperCase()}
          </button>
        ))}
      </div>

      {/* Product Grid */}
      <div className="w-full max-w-6xl p-10 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
        {filteredProducts.map((product) => (
          <ProductItem key={product.id} product={product} />
        ))}
      </div>
    </div>
  );
};

export default ProductList;

