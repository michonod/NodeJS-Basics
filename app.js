const express = require("express");
const path = require("path");
const bodyParser = require("body-parser");
const port = 3000;

const products = [];

const app = express();

app.use(bodyParser.urlencoded());

app.set("view engine", "ejs");
app.set("views", "views");

app.use(express.static(path.join(__dirname, "public")));

app.get("/", (req, res) => {
  res.render("index.ejs");
});

app.post("/products", (req, res) => {
  const { product, image, price } = req.body;
  products.push({ title: product, image, price });
  console.log(products);
  res.render("products.ejs", {
    prod: products,
    title: "Ova e titleto",
  });
});

app.get("/add-product", (req, res) => {
  res.render("add-product.ejs");
});

app.listen(port, () => {
  console.log("Server listen on port 3000");
});
