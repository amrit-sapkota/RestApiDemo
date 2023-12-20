const mongoose = require("mongoose");

const productSchema = new mongoose.Schema({
  name: { type: String, required: true },
  price: { type: Number, required: [true, "Price must be provided"] },
  featured: { type: Boolean, default: false },
  rating: { type: Number, default: 4.9 },
  createdAt: { type: Date, default: Date.now() },
  company: {
    type: String,
    enum: {
      values: ["apple", "samsung", "dell", "acer"],
      message: "{VALUE} is not a valid company",
    },
  },
});

module.exports = mongoose.model("Product", productSchema);
