import express from "express";
import dotenv from "dotenv";
dotenv.config();
const app = express();
app.use(express.json());
app.get("/", (req, res) => {
    res.status(200).json({
        success: true,
        message: "Successfully created a server!",
    });
});
const connectDB = async () => {
    console.log(process.env.MONGO_URI);
    //   await mongoose.connect();
    console.log("DATABASE Connection Successfull!");
};
connectDB();
const port = process.env.PORT;
app.listen(port, () => {
    console.log(`Server is Running on http://localhost:${port}`);
});
