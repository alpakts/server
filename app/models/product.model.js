const mongoose = require("mongoose");
const Company = require("./company.model.js");

const Product = mongoose.model(
  "Products",
  new mongoose.Schema({
    name: String,
    category: String,
    amount: String,
    amountUnit: String,
    company: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Companies",
    },
    createdAt: {
      type: Date,
      default: new Date(),
    },
  })
);

module.exports = Product;
