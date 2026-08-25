import express from "express";
import dotenv from "dotenv";
import mongoose from "mongoose";
import { connectDB } from "./config/db.js";
import homeRoutes from "./routes/home.route.js";
import cors from "cors";
import apiMessageRoutes from "./routes/api.message.route.js";

dotenv.config();
const corsInfo = cors({
  origin: process.env.CLIENT_URL,
});
const app = express();
app.use(corsInfo);
app.use(express.json());
app.use("/", homeRoutes);
app.use("/api", apiMessageRoutes);

connectDB();
const port = process.env.PORT;
app.listen(port, () => {
  console.log(`Server is Running on http://localhost:${port}`);
});
