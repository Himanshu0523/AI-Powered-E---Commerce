const Product = require("../models/product.model");

exports.getAllProducts = async () => {
  return await Product.find();
};

exports.getProductById = async (productId) => {
  return await Product.findById(productId);
};

exports.createProduct = async (productData) => {
  return await Product.create(productData);
};

exports.updateProductStock = async (productId, quantity) => {

  return await Product.findByIdAndUpdate(
    productId,
    { $inc: { stock: -quantity } },
    { new: true }
  );

};