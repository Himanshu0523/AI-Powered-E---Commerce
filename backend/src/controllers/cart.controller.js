const Cart = require("../models/cart.model");

exports.getCart = async (req, res) => {
  try {
    let cart = await Cart.findOne({ user_id: req.params.userId }).populate('items.product_id');
    if (!cart) {
      return res.json([]);
    }
    // Return array of items if that's what Redux expects, or object
    res.json(cart.items || []);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

exports.saveCart = async (req, res) => {
  try {
    const { items } = req.body;
    
    let cart = await Cart.findOne({ user_id: req.params.userId });
    
    if (!cart) {
      cart = new Cart({ user_id: req.params.userId, items: items || [] });
    } else {
      cart.items = items || [];
      cart.updated_at = Date.now();
    }
    
    await cart.save();
    res.json(cart.items);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};
