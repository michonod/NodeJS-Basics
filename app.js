const express = require("express");

const port = 3000;

const app = express();

app.get("/", (req, res) => {
  res.send("<h1>Hello from express</h1>");
});

app.listen(port, () => {
  console.log("Server listen on port 3000");
});
