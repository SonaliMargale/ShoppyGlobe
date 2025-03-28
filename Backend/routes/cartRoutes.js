import express from "express";
import Cart from "../models/Cart.js";
import Product from "../models/Product.js";
import authMiddleware from "../middleware/authMiddleware.js";

const router = express.Router();

// POST /cart: Add product to cart
router.post("/", async (req, res) => {
    try {
        const { productId, quantity } = req.body;
        
        // Ensure product exists in DB
        const productExists = await Product.findById(productId);
        if (!productExists) {
            return res.status(404).json({ error: "Product not found" });
        }

        let cartItem = await Cart.findOne({ productId });
        if (cartItem) {
            cartItem.quantity += quantity;
        } else {
            cartItem = new Cart({ productId, quantity });
        }
        await cartItem.save();
        res.json(cartItem);
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
});


// PUT /cart/:id: Update quantity
router.put("/:id", async (req, res) => {
    try {
        const { id } = req.params;  // Extract Cart ID from URL
        const { quantity } = req.body; // Extract new quantity from request body

        const cartItem = await Cart.findById(id);  // Find cart item by ID

        if (!cartItem) {
            return res.status(404).json({ message: "Cart item not found" });
        }

        cartItem.quantity = quantity;  // Update quantity
        await cartItem.save();  // Save updated cart item

        res.json(cartItem);  // Return updated cart item
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
});



// DELETE /cart/:id: Remove product from cart
router.delete("/:id", async (req, res) => {
    try {
        const cartItem = await Cart.findByIdAndDelete(req.params.id);
        if (!cartItem) return res.status(404).json({ message: "Cart item not found" });
        res.json({ message: "Cart item removed" });
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
});



// Add product to cart (Protected Route)
router.post("/", authMiddleware, async (req, res) => {
    try {
        const { productId, quantity } = req.body;
        let cartItem = await Cart.findOne({ productId });

        if (cartItem) {
            cartItem.quantity += quantity;
        } else {
            cartItem = new Cart({ productId, quantity });
        }
        await cartItem.save();
        res.json(cartItem);
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
});

// Update cart item (Protected Route)
router.put("/:id", authMiddleware, async (req, res) => {
    try {
        const { quantity } = req.body;
        const cartItem = await Cart.findByIdAndUpdate(req.params.id, { quantity }, { new: true });
        if (!cartItem) return res.status(404).json({ message: "Cart item not found" });

        res.json(cartItem);
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
});

// Delete cart item (Protected Route)
router.delete("/:id", authMiddleware, async (req, res) => {
    try {
        const cartItem = await Cart.findByIdAndDelete(req.params.id);
        if (!cartItem) return res.status(404).json({ message: "Cart item not found" });

        res.json({ message: "Cart item removed" });
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
});


export default router;
