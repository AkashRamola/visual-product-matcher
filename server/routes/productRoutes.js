const express = require("express");
const multer = require("multer");
const Product = require("../models/Product");

const router = express.Router();

// Multer configuration for file upload
const storage = multer.diskStorage({
    destination: (req, file, cb) => {
        cb(null, "uploads/"); // Save uploaded images in the "uploads" folder
    },
    filename: (req, file, cb) => {
        cb(null, Date.now() + "-" + file.originalname); // Unique filename
    },
});

const upload = multer({ storage });

// Upload image route
router.post("/upload", upload.single("image"), (req, res) => {
    if (!req.file) {
        return res.status(400).json({ error: "No file uploaded" });
    }
    const imagePath = `/uploads/${req.file.filename}`;
    res.json({ path: imagePath });
});

// Search for similar products
router.get("/similar", async (req, res) => {
    const { imagePath } = req.query;

    if (!imagePath) {
        return res.status(400).json({ error: "Image path is required" });
    }

    // Example: Return all products for now
    const products = await Product.find();
    res.json(products);
});

module.exports = router;