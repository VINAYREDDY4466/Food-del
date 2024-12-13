import cors from 'cors';
import express from 'express';
import { connectDB } from './config/db.js';
import foodRouter from './Routes/FoodRoute.js';
import userRouter from './Routes/userRoute.js';
import cartRouter from './Routes/cartRoute.js';
import 'dotenv/config';


const app = express();
const port = 4000;

// Middleware
app.use(express.json());
app.use(cors());

// Database Connection
connectDB();

// API Endpoints
app.use("/api/food", foodRouter);
app.use("/api/user", userRouter);
app.use("/api/cart", cartRouter);


// Static Files for Images
app.use("/images", express.static('uploads'));

// Default Route
app.get('/', (req, res) => {
    res.send("Hello World");
});

// Start Server
app.listen(port, () => {
    console.log(`Server running successfully at http://localhost:${port}`);
});
