import EventEmitter from "events";

const emitter = new EventEmitter();

// -------------------- on() --------------------
function greet(name) {
  console.log(`Hello ${name}`);
}

emitter.on("greet", greet);

emitter.emit("greet", "Ruuh");

// -------------------- once() --------------------
emitter.once("login", () => {
  console.log("User Logged In (Runs Only Once)");
});

emitter.emit("login");
emitter.emit("login");

// -------------------- Multiple Listeners --------------------
emitter.on("order", () => {
  console.log("Order Received");
});

emitter.on("order", () => {
  console.log("Order Saved");
});

emitter.on("order", () => {
  console.log("Email Sent");
});

emitter.emit("order");

// -------------------- off() --------------------
emitter.off("greet", greet);

console.log("\nAfter Removing greet Listener:");

emitter.emit("greet", "Ruuh");

// -------------------- listenerCount() --------------------
console.log("\nListeners on 'order':", emitter.listenerCount("order"));

// -------------------- eventNames() --------------------
console.log("\nRegistered Events:");
console.log(emitter.eventNames());

// -------------------- listeners() --------------------
console.log("\nOrder Listeners:");
console.log(emitter.listeners("order"));

// -------------------- removeAllListeners() --------------------
emitter.removeAllListeners("order");

console.log("\nAfter removeAllListeners:", emitter.listenerCount("order"));

// -------------------- Error Event --------------------
emitter.on("error", (err) => {
  console.log("\nCustom Error:");
  console.log(err.message);
});

emitter.emit("error", new Error("Something went wrong"));
