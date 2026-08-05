import express from "express";
import dotenv from "dotenv";

dotenv.config({
  path: "D:/Programming/MERN-BOOTCAMP/.env",
});
const app = express();

// const logger = (req, res, next) => {
//   console.log("Middleware Layer");
//   next();
// };

// app.use("/", logger);

app.get("/", (req, res) => {
  console.log("Home Response Layer");
  return res.send("Home Page Request received");
});

// ------------------Mutliple middleware----------------

const security = (req, res, next) => {
  console.log("Security Middleware");
  next();
};
const about = (req, res, next) => {
  console.log("About Middleware");
  next();
};
const product = (req, res, next) => {
  console.log("Product Middleware");
  next();
};

const secure_product = (req, res, next) => {
  console.log("Secure Product Layer");
  next();
};
app.use("/about", about);
app.use("/security", security);
app.use("/product", product);
app.use(["/product", "/security"], secure_product);
app.get("/about", (req, res) => {
  console.log("About Page Response Recieved");
  return res.status(200).json({
    name: "Ruuh",
    contact: 998877665544,
    email: "ruuh@gmail.com",
  });
});
app.get("/security", (req, res) => {
  console.log("Security Page Response Recieved");
  return res.status(401).send("Unauthorized User");
});
app.get("/product", (req, res) => {
  console.log("Product Page Response Recieved");
  return res.status(200).json({
    name: "Oppo",
    model: 9988776655,
    owneremail: "ruuh@gmail.com",
  });
});
app.get("/product/:userId", (req, res) => {
  console.log("Security Page Response Recieved");
  return res
    .status(200)
    .send(
      `User Id ${req.params.userId} Data \n name: Ikrooh \n email:ikrooh@gmail.com \n address:Delhi`,
    );
});

// -----------Starting the server-----------
const port = process.env.PORT;
app.listen(port, () => {
  console.log(`Server Started on http://localhost:${port}...`);
});
