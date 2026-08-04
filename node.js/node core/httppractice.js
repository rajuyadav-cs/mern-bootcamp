import http from "http";

const server = http.createServer((req, res) => {
  console.log("\n===== New Request =====");
  console.log("Method:", req.method);
  console.log("URL:", req.url);
  console.log("Headers:", req.headers);

  // Home Route
  if (req.url === "/" && req.method === "GET") {
    res.statusCode = 200;
    res.setHeader("Content-Type", "text/plain");
    return res.end("Welcome to Home Page");
  }

  // About Route
  if (req.url === "/about" && req.method === "GET") {
    res.statusCode = 200;
    res.setHeader("Content-Type", "text/plain");
    return res.end("About Page");
  }

  // JSON Response
  if (req.url === "/user" && req.method === "GET") {
    res.statusCode = 200;
    res.setHeader("Content-Type", "application/json");

    return res.end(
      JSON.stringify({
        id: 1,
        name: "Ruuh",
        age: 22,
      }),
    );
  }

  // POST Example
  if (req.url === "/login" && req.method === "POST") {
    res.statusCode = 200;
    return res.end("Login Successful");
  }

  // 404 Route"
  res.statusCode = 404;
  res.setHeader("Content-Type", "text/plain");
  res.end("404 - Page Not Found");
});

server.listen(3000, () => {
  console.log("🚀 Server running on http://localhost:3000");
});
