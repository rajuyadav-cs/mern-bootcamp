import express from "express";

const app = express();

app.get("/", (req, res) => {
  return res.status(200).json({
    success: true,
    message: "Welcome to Express",
  });
});

app.get("/error", (req, res) => {
  return res.status(404).json({
    success: false,
    message: "Page not found",
  });
});

app.listen(3000, () => {
  console.log("Server running...");
});
