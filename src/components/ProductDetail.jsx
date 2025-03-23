import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { useDispatch } from "react-redux";
import { addToCart } from "../redux/cartSlice";
import { useNavigate } from "react-router-dom";
import CartSidebar from "./CartSidebar"; // Optional for a sidebar cart

const ProductDetail = () => {
    const { id } = useParams();
    const [product, setProduct] = useState(null);
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const [isCartOpen, setIsCartOpen] = useState(false); // Toggle cart UI

    useEffect(() => {
        fetch(`https://fakestoreapi.com/products/${id}`)
            .then((res) => res.json())
            .then((data) => setProduct(data))
            .catch((error) => console.error("Error fetching product:", error));
    }, [id]);

    if (!product) return <p>Loading...</p>;

    const handleAddToCart = () => {
        dispatch(addToCart(product));
        setIsCartOpen(true); // Show the cart UI
        // navigate("/cart"); // Uncomment this to redirect to cart page instead
    };

    return (
        <div className="max-w-4xl mx-auto p-6">
            <img src={product.image} alt={product.title} className="w-full max-h-96 object-contain" />
            <h1 className="text-2xl font-bold mt-4">{product.title}</h1>
            <p className="text-gray-700 text-lg">${product.price}</p>
            <p className="mt-2">{product.description}</p>
            
            {/* Add to Cart Button */}
            <button
                onClick={handleAddToCart}
                className="mt-4 bg-black text-white px-6 py-3 rounded-md text-lg flex items-center gap-2"
            >
                Add To Cart 🛒
            </button>

            {isCartOpen && <CartSidebar setIsCartOpen={setIsCartOpen} />}
        </div>
    );
};

export default ProductDetail;
