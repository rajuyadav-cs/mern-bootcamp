import express from "express";
import dotenv from "dotenv";

dotenv.config({
  path: "D:\\Programming\\MERN-BOOTCAMP\\.env",
});
const app = express();

// app.get("/", (req, res) => {
//   res.send("Welcome to Jungle!");
// });

// app.listen(`${process.env.PORT}`, () => {
//   console.log(`Server is running on http://localhost:${process.env.PORT}...`);
// });
const routeList = ["home", "about", "contact", "login"];
const routeDict = {
  home: "/",
  about: "/about",
  contact: "/contact",
  login: "/login",
};

routeList.forEach((value) => {
  if (value === "login") {
    app.post(routeDict[value], (req, res) => {
      res.send(`Welcome to ${value} Page\nSuccessfully Logged In!`);
    });
  }
  app.get(routeDict[value], (req, res) => {
    res.send(`Welcome to ${value} Page`);
  });
});

console.log(app);

app.listen(`${process.env.PORT}`, () => {
  console.log(`Server is running on http://localhost:${process.env.PORT}...`);
});
