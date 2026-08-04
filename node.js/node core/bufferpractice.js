import fs from "fs";

// -------------------- Buffer.from() --------------------
const buffer1 = Buffer.from("Hello World");

console.log("Buffer.from():", buffer1);
console.log("String:", buffer1.toString());
console.log("Length:", buffer1.length);

// -------------------- Buffer.alloc() --------------------
const buffer2 = Buffer.alloc(10);

console.log("\nBuffer.alloc():", buffer2);
console.log("Length:", buffer2.length);

// -------------------- Write Data --------------------
buffer2.write("Node");

console.log("\nAfter Writing:");
console.log(buffer2);
console.log(buffer2.toString());

// -------------------- Access Bytes --------------------
console.log("\nFirst Byte:", buffer1[0]);
console.log("Second Byte:", buffer1[1]);

// -------------------- Modify Buffer --------------------
const buffer3 = Buffer.from("ABC");

console.log("\nBefore:", buffer3.toString());

buffer3[0] = 97; // ASCII => 'a'

console.log("After :", buffer3.toString());

// -------------------- Buffer.concat() --------------------
const first = Buffer.from("Hello ");
const second = Buffer.from("Node.js");

const combined = Buffer.concat([first, second]);

console.log("\nConcatenated:", combined.toString());

// -------------------- Buffer.compare() --------------------
const a = Buffer.from("Apple");
const b = Buffer.from("Banana");

console.log("\nCompare Result:", Buffer.compare(a, b));

// -------------------- Buffer.isBuffer() --------------------
console.log("\nIs Buffer?");
console.log(Buffer.isBuffer(buffer1));
console.log(Buffer.isBuffer("Hello"));

// -------------------- Reading a File --------------------
try {
  const fileBuffer = fs.readFileSync("text.txt");

  console.log("\nFile Buffer:");
  console.log(fileBuffer);

  console.log("\nFile Content:");
  console.log(fileBuffer.toString());
} catch (err) {
  console.log("\ntext.txt not found!");
}
