// import express from 'express';import dotenv from 'dotenv';import cors from 'cors';import { connectDB } from './config/db.js';import authRoutes from './routes/authRoutes.js';import docRoutes from './routes/documentRoutes.js';import { errorHandler } from './middleware/errorMiddleware.js';dotenv.config();const app=express();app.use(cors());app.use(express.json());app.use('/uploads',express.static('uploads'));app.use('/api/auth',authRoutes);app.use('/api/docs',docRoutes);app.use(errorHandler);connectDB();const PORT=process.env.PORT||5000;app.listen(PORT,()=>console.log(`✅ Server running on port ${PORT}`));
import express from "express";
import dotenv from "dotenv";
import cors from "cors";
import { connectDB } from "./config/db.js";
import authRoutes from "./routes/authRoutes.js";
import docRoutes from "./routes/documentRoutes.js";
import { errorHandler } from "./middleware/errorMiddleware.js";

dotenv.config();

const app = express();

// ✅ Middleware
app.use(cors());
app.use(express.json());

// ✅ Static Folder for Uploads
app.use("/uploads", express.static("uploads"));

// ✅ Routes
app.use("/api/auth", authRoutes);
app.use("/api/docs", docRoutes);

// ✅ Error Handler Middleware
app.use(errorHandler);

// ✅ Connect to Database
connectDB();

const PORT = process.env.PORT || 5000;

app.listen(PORT, () =>
  console.log(`✅ Server running on port ${PORT}`)
);
