const http = require("http");

const server = http.createServer((req, res) =>
  res.write("<h1>Hello from NodeJS</h1>")
);

server.listen(3000);
