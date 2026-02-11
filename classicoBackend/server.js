// F:\classico lifestyle\classicoLifestyle\classicoBackend\server.js
import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import connectDB from "./config/db.js";

import productRouter from "./routes/productRoutes.js";
import authRouter from "./routes/authRoutes.js";

dotenv.config();
connectDB();

const app = express();

// middleware
app.use(cors());
app.use(express.json());

// static folder for images
app.use("/images", express.static("uploads"));

// routes
app.use("/api/product", productRouter);
app.use("/api/auth", authRouter);

// root
app.get("/", (req, res) => {
  res.send("Classico LifeStyle API Running");
});

// 404 handler
app.use((req, res, next) => {
  res.status(404).json({ message: "Route not found" });
});

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));


// mongodb+srv://classicocode:124365789mojaTa@cluster0.bwipms0.mongodb.net/?

// 103.73.197.109/32
