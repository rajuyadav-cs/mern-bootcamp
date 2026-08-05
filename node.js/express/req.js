import express from "express";

const app = express();

app.get("/", (req, res) => {
  console.log("Method :", req.method);
  console.log("URL    :", req.url);
  console.log("Path   :", req.path);
  console.log("IP     :", req.ip);
  console.log("Headers:", req.headers);

  res.send("Check your terminal");
});

app.listen(3000, () => {
  console.log("Server running...");
});
