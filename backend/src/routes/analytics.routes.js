const express = require("express");
const router = express.Router();

const orderController = require("../controllers/order.controller");
const { verifyJWT } = require("../middleware/auth.middleware");

router.post("/orders", verifyJWT, orderController.createOrder);

router.get("/orders", verifyJWT, orderController.getUserOrders);

module.exports = router;