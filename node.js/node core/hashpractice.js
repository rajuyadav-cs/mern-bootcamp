import crypto from "crypto";

// -------------------- SHA-256 Hash --------------------
const message = "Hello World";

const hash = crypto.createHash("sha256").update(message).digest("hex");

console.log("Original Message :", message);
console.log("SHA-256 Hash     :", hash);

// -------------------- Same Input => Same Hash --------------------
const hash1 = crypto.createHash("sha256").update("Node.js").digest("hex");

const hash2 = crypto.createHash("sha256").update("Node.js").digest("hex");

console.log("\nSame Input Comparison:");
console.log(hash1);
console.log(hash2);
console.log("Equal:", hash1 === hash2);

// -------------------- Small Change => Different Hash --------------------
const hash3 = crypto.createHash("sha256").update("node.js").digest("hex");

console.log("\nDifferent Input:");
console.log("Node.js :", hash1);
console.log("node.js :", hash3);
console.log("Equal:", hash1 === hash3);

// -------------------- Password Verification --------------------
const password = "myPassword123";

// Store this hash in the database
const storedHash = crypto.createHash("sha256").update(password).digest("hex");

console.log("\nStored Hash:", storedHash);

// User enters password during login
const enteredPassword = "myPassword123";

const enteredHash = crypto
  .createHash("sha256")
  .update(enteredPassword)
  .digest("hex");

if (enteredHash === storedHash) {
  console.log("✅ Login Successful");
} else {
  console.log("❌ Invalid Password");
}

// -------------------- Random Bytes --------------------
const token = crypto.randomBytes(16).toString("hex");

console.log("\nRandom Token:");
console.log(token);

// -------------------- UUID --------------------
const uuid = crypto.randomUUID();

console.log("\nUUID:");
console.log(uuid);
