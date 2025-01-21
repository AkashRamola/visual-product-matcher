const mongoose = require("mongoose");

const productSchema = new mongoose.Schema({
    name: { type: String, required: true },
    category: { type: String, required: true },
    image: { type: String, required: true },
    similarityScore: { type: Number, default: 0 }, // Example: For sorting results
});

const Product = mongoose.model("Product", productSchema);
module.exports = Product;