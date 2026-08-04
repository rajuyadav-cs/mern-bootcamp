import { add, subtract, divide, multiply, modulas } from "./math.js";

const operations = [add, subtract, divide, multiply, modulas];
const { a, b } = { a: 20, b: 0 };
const operator = {
  add: "+",
  subtract: "-",
  multiply: "*",
  divide: "/",
  modulas: "%",
};
operations.forEach((value) => {
  console.log(
    `\nFunction Name : ${value.name} Operation : ${a} ${operator[value.name]} ${b} = ${value(a, b)}`,
  );
});
