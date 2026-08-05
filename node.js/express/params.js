import express from "express";

const app = express();

app.get("/users/:id", (req, res) => {
  return res.json({
    success: true,
    userId: req.params.id,
  });
});

app.listen(3000);
