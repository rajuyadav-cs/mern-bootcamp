import fs from "fs";

// -------------------- Read Stream --------------------
const readStream = fs.createReadStream("name.txt", {
  encoding: "utf8",
  highWaterMark: 10, // Read 10 bytes at a time
});

console.log("===== Reading Stream =====");

readStream.on("data", (chunk) => {
  console.log("Chunk:", chunk);
});

readStream.on("end", () => {
  console.log("\nReading Finished!");
});

readStream.on("error", (err) => {
  console.log("Read Error:", err.message);
});

// -------------------- Write Stream --------------------
const writeStream = fs.createWriteStream("output.txt");

writeStream.write("Hello\n");
writeStream.write("Welcome to Node.js Streams\n");
writeStream.write("Writing using Stream...\n");

writeStream.end();

writeStream.on("finish", () => {
  console.log("\nWriting Finished!");
});

writeStream.on("error", (err) => {
  console.log("Write Error:", err.message);
});

// -------------------- Pipe Example --------------------
const source = fs.createReadStream("name.txt");
const destination = fs.createWriteStream("copy.txt");

source.pipe(destination);

destination.on("finish", () => {
  console.log("\nFile Copied Successfully!");
});
