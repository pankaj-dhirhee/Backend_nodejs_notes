const mongoose = require("mongoose");

const product_schema = new mongoose.Schema({
  product: {
    type: String,
    trim: true,
    required: true
  },
  price: {
    type: Number,
    trim: true,
    required: true
  },
  in_stock: {
    type: Boolean,
    required: true
  }
});

module.exports = mongoose.model("product", product_schema);