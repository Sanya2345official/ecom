const express = require("express");
const router = express.Router();
const Product = require("../models/Product");
const upload = require("../middleware/upload");

// Get all products
router.get("/", async (req, res) => {
  try {
    const products = await Product.find();
    res.json(products);
  } catch (err) {
    res.status(500).json({ error: "Failed to fetch products" });
  }
});

// Add a new product with image upload
router.post("/", upload.single("image"), async (req, res) => {
  try {
    const { name, price, description } = req.body;
    const image = req.file ? `/uploads/${req.file.filename}` : "";

    const newProduct = new Product({
      name,
      price,
      description,
      image,
    });

    const saved = await newProduct.save();
    res.status(201).json(saved);
  } catch (err) {
    res.status(500).json({ error: "Failed to save product" });
  }
});

module.exports = router;
