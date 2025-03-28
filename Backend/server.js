import express from "express";
import mongoose from "mongoose";
import productRoutes from "./routes/productRoutes.js";
import cartRoutes from "./routes/cartRoutes.js";
import authRoutes from "./routes/authRoutes.js";

const app = express();
app.use(express.json()); // Parse JSON


mongoose.connect("mongodb://localhost:27017/ecommerce")
const db = mongoose.connection;
db.on("open",()=> {
    console.log("connection succesful")
})

db.on("error",()=>{
    console.log("connection not successful")
})

const router = express.Router();

app.use("/", router);
app.use("/products", productRoutes);
app.use("/cart", cartRoutes);
app.use("/auth", authRoutes);

app.listen(5100, () => {
    console.log("Server is running on port 5100");
});