import express from "express";
import dotenv from "dotenv";

const app = express();

app.get("/", (req, res) => {
  res.send("Welcome to Alfanso!");
});
app.listen("5000", () => {
  console.log("Server is running in port: 5000....");
});
