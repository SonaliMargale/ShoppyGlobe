import { useDispatch } from "react-redux";
import { addToCart } from "../redux/cartSlice";
import { useNavigate } from "react-router-dom";
import { useState } from "react";
import CartSidebar from "./CartSidebar"; // Optional for sidebar UI

const ProductItem = ({ product }) => {
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const [isCartOpen, setIsCartOpen] = useState(false); // For sidebar UI

    const handleAddToCart = () => {
        dispatch(addToCart(product));
        setIsCartOpen(true); // Show cart UI
        //navigate("/cart"); // Uncomment if you prefer redirecting to cart page
    };

    return (
        <div className="border rounded-lg p-4 shadow-md">
            <img src={product.image} alt={product.title} className="w-full h-40 object-contain" />
            <h3 className="text-lg font-semibold mt-2">{product.title}</h3>
            <p className="text-gray-600">${product.price}</p>
            <button 
                onClick={handleAddToCart} 
                className="mt-2 bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600">
                Add to Cart 🛒
            </button>

            {isCartOpen && <CartSidebar setIsCartOpen={setIsCartOpen} />} 
        
        </div>
    );
};

export default ProductItem;
