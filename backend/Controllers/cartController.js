import userModel from "../models/userModel.js";

// Add items to user cart
export const addToCart = async (req, res) => {
    try {
        const userData = await userModel.findById(req.body.userId);
        if (!userData) {
            return res.json({ success: false, message: "User not found" });
        }

        let cartData = userData.cartData || {}; // Ensure cartData is initialized
        if (!cartData[req.body.itemId]) {
            cartData[req.body.itemId] = 1; // Add new item to cart
        } else {
            cartData[req.body.itemId] += 1; // Increment quantity
        }

        await userModel.findByIdAndUpdate(req.body.userId, { cartData });
        res.json({ success: true, message: "Added to cart" });
    } catch (error) {
        console.error("Error in addToCart:", error);
        res.json({ success: false, message: "Error adding to cart" });
    }
};

// Remove items from user cart
export const removeFromCart = async (req, res) => {
    try {
        const userData = await userModel.findById(req.body.userId);
        if (!userData) {
            return res.json({ success: false, message: "User not found" });
        }

        let cartData = userData.cartData || {}; // Ensure cartData is initialized
        if (cartData[req.body.itemId] > 0) {
            cartData[req.body.itemId] -= 1;
        }

        await userModel.findByIdAndUpdate(req.body.userId, { cartData });
        res.json({ success: true, message: "Removed from cart" });
    } catch (error) {
        console.error("Error in removeFromCart:", error);
        res.json({ success: false, message: "Error removing from cart" });
    }
};

// Get user cart data
export const getCart = async (req, res) => {
    try {
        const userData = await userModel.findById(req.body.userId);
        let cartData=await userData.cartData;
        res.json({ success: true, cartData}); // Return cartData or empty object
    } catch (error) {
        console.error("Error in getCart:", error);
        res.json({ success: false, message: "Error fetching cart data" });
    }
};
