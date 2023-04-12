const express = require("express");
const path = require("path");
const bodyParser = require("body-parser");
const port = 3000;

const app = express();

app.use(bodyParser.urlencoded());

app.set();

app.use(express.static(path.join(__dirname, "public")));

app.get("/", (req, res) => {
  res.sendFile(path.join(__dirname, "views", "index.html"));
});

app.post("/products", (req, res) => {
  const prod = req.body;
  console.log(prod);
  res.sendFile(path.join(__dirname, "views", "products.html"));
});
app.get("/add-product", (req, res) => {
  res.sendFile(path.join(__dirname, "views", "add-product.html"));
});

app.listen(port, () => {
  console.log("Server listen on port 3000");
});
