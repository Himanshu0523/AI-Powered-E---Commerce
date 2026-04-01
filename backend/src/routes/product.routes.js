const express = require("express");
const router = express.Router();

const productController = require("../controllers/product.controller");

router.get("/products", productController.getProducts);
router.get("/products/:id", productController.getProductById);
router.post("/products", productController.createProduct);
router.put("/products/:id", productController.updateProduct);

// Search: GET /api/search?q=shirt&category=men
router.get("/search", productController.searchProducts);

module.exports = router;