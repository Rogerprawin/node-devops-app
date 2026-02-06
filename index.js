const http = require("http");

const PORT = 3000;

http.createServer((req, res) => {
  res.end("Hello from DevOps CI/CD Pipeline 🚀");
}).listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
