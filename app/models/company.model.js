const mongoose = require("mongoose");

const Company = mongoose.model(
  "Companies",
  new mongoose.Schema({
    name: String,
    legalNumber: String,
    country: String,
    website:String,
    createdAt:{
        type:Date,
        default : new Date()
    },
  })
);

module.exports = Company;
