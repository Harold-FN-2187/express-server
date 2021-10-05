const express = require("express");
const app = express();

const products = [
  //id,name,category,price,currency,prod image,stars,review

  {
    id: 1,
    name: "Better Cell",
    category: "Electronics",
    price: 9000,
    currency: "USD",
    image: " ",
  },

  {
    id: 1,
    name: "Better Cell 2",
    category: "Electronics",
    price: 8000,
    currency: "USD",
    image: " ",
  },
];

const customers = [
  {
    id: 1,
    name: "",
    gender: "",
  },

  {
    id: 2,
    name: "",
    gender: "",
  },
];

app.get("/", function (req, res) {
  //res.send("Hello World");
  res.json({ message: "Hello" });
});

app.get("/products", (req, res) => {
  res.json({ products });
});

app.get("/customers", (req, res) => {
  res.json({ customers });
});

app.get("/customers1", (req, res) => {
  res.json(customers[0]);
});
app.get("/customers/:customerID", (req, res) => {
  console.log(`The customer is ${req.params.customerID}`);
  res.json(customers[req.params.customerID - 1]);
});

app.listen(3000);
