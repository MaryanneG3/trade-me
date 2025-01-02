const mongoose = require("mongoose");

const productSchema = new mongoose.Schema({
  title: { type: String },
  description: { type: String },
  start_price: { type: Number, set: (value) => parseFloat(value.toFixed(2)) },
  reserve_price: { type: Number, set: (value) => parseFloat(value.toFixed(2)) },
});

module.exports = mongoose.model("Products", productSchema);
