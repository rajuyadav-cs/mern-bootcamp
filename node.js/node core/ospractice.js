import os from "os";

console.log("===== OS MODULE =====\n");

console.log("Platform:", os.platform());
console.log("Architecture:", os.arch());
console.log("Hostname:", os.hostname());
console.log("Home Directory:", os.homedir());
console.log("Temp Directory:", os.tmpdir());
console.log("OS Type:", os.type());
console.log("OS Release:", os.release());
console.log("Machine:", os.machine());

console.log("\n===== USER INFO =====");
console.log(os.userInfo());

console.log("\n===== CPU INFO =====");
console.log("CPU Cores:", os.cpus().length);
console.log(os.cpus());

console.log("\n===== MEMORY =====");
console.log("Free Memory:", `${(os.freemem() / 1024 / 1024).toFixed(2)} MB`);
console.log(
  "Total Memory:",
  `${(os.totalmem() / 1024 / 1024 / 1024).toFixed(2)} GB`,
);

console.log("\n===== SYSTEM =====");
console.log("System Uptime:", `${os.uptime()} seconds`);
console.log("Load Average:", os.loadavg()); // Linux/macOS only

console.log("\n===== NETWORK =====");
console.log(os.networkInterfaces());

console.log("\n===== CONSTANTS =====");
console.log(os.constants());

console.log("\n===== EOL =====");
console.log(JSON.stringify(os.EOL));
