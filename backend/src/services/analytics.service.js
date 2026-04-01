const Order = require("../models/order.model");

exports.getTopProducts = async () => {

  return await Order.aggregate([
    { $unwind: "$items" },

    {
      $group: {
        _id: "$items.product_id",
        totalSold: { $sum: "$items.quantity" }
      }
    },

    { $sort: { totalSold: -1 } },

    { $limit: 10 }
  ]);

};



exports.getMonthlyRevenue = async () => {

  return await Order.aggregate([
    {
      $group: {
        _id: { $month: "$created_at" },
        revenue: { $sum: "$total_price" }
      }
    },

    { $sort: { "_id": 1 } }
  ]);

};



exports.getCustomerLifetimeValue = async () => {

  return await Order.aggregate([
    {
      $group: {
        _id: "$user_id",
        lifetimeValue: { $sum: "$total_price" }
      }
    },

    { $sort: { lifetimeValue: -1 } }
  ]);

};