import dotenv from "dotenv";

dotenv.config({
  path: "D:/Programming/MERN-BOOTCAMP/.env",
});
console.log(process.env.PORT);
console.log(process.cwd());
console.log(process.version);
console.log(process.platform);
console.log(process.argv);
console.log(process.pid);
