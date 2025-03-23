import { useSelector, useDispatch } from "react-redux";
import { removeFromCart } from "../redux/cartSlice";

const CartSidebar = ({ setIsCartOpen }) => {
    const cart = useSelector((state) => state.cart.items);
    const dispatch = useDispatch();

    return (
        <div className="fixed right-0 top-0 w-80 h-full bg-white shadow-lg p-4 overflow-y-auto">
            <button className="text-xl font-bold" onClick={() => setIsCartOpen(false)}>×</button>
            <h2 className="text-xl font-semibold mb-4">Shopping Cart</h2>

            {cart.length === 0 ? (
                <p className="text-gray-500">Your cart is empty</p>
            ) : (
                cart.map((item) => (
                    <div key={item.id} className="flex items-center justify-between mb-4">
                        <img src={item.image} alt={item.title} className="w-12 h-12 object-contain" />
                        <div className="flex-1 ml-2">
                            <p className="text-sm font-semibold">{item.title}</p>
                            <p className="text-sm text-gray-600">${item.price}</p>
                        </div>
                        <button 
                            className="text-red-500 hover:text-red-700"
                            onClick={() => dispatch(removeFromCart(item.id))}
                        >
                            ❌
                        </button>
                    </div>
                ))
            )}
        </div>
    );
};

export default CartSidebar;
