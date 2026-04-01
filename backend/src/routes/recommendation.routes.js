const express = require("express");
const router = express.Router();

const analyticsController = require("../controllers/analytics.controller");

router.get("/analytics/top-products", analyticsController.getTopProducts);

router.get("/analytics/monthly-revenue", analyticsController.getMonthlyRevenue);

router.get("/analytics/customer-ltv", analyticsController.getCustomerLifetimeValue);

module.exports = router;