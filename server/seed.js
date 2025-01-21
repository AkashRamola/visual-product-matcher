const mongoose = require("mongoose");
const dotenv = require("dotenv");
const Product = require("./models/Product");
const connectDB = require("./config/db");

dotenv.config();
connectDB();

const sampleProducts = [
    {
        name: "Product 1",
        category: "Category A",
        image: "/uploads/sample1.jpg",
        similarityScore: 90,
    },
    {
        name: "Product 2",
        category: "Category B",
        image: "/uploads/sample2.jpg",
        similarityScore: 85,
    },
    // Add more products
];

const seedDatabase = async () => {
    try {
        await Product.deleteMany();
        await Product.insertMany(sampleProducts);
        console.log("Sample products added!");
        process.exit();
    } catch (err) {
        console.error(err);
        process.exit(1);
    }
};

seedDatabase();