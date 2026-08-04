import { time } from "console";
import fs from "fs";

// const data = fs.readFileSync("text.txt", "utf8");
// console.log(data);

// ---------Reading Async file---------------
const readdata = fs.readFile("text.txt", "utf-8", (err, data) => {
  if (err) {
    clearInterval(interval);
    console.log(`Error : ${err}`);
  }
  console.log(`Data Read Successfully!!`);
  const timeout = setTimeout(() => {
    console.log("Clearing the Interval...");
    clearInterval(interval);
    console.log(`\nData: ${data}\n`);
    console.log("Clearing the Timeout");
    const afterIntervalRead = fs.readFile("text.txt", "utf-8", (err, data) => {
      if (err) {
        return;
      }
      console.log(`Data After Interval\n${data}`);
    });
    return clearTimeout(timeout);
  }, 5000);
});

fs.writeFile("text.txt", `\nData OverWritten...`, (err) => {
  if (err) {
    console.log(`Error: ${err}`);
    return;
  }
  console.log("Writing Completed...");
});
let num = 1;
const interval = setInterval(() => {
  fs.appendFile("text.txt", `\nLoading-${num}`, (err) => {
    if (err) {
      console.log(`Error: ${err}`);
      return;
    }
    console.log("Appended...");
  });
  num += 1;
}, 1000);
