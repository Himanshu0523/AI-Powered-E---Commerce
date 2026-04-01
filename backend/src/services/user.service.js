const User = require("../models/user.model");

exports.getUserById = async (userId) => {
  return await User.findById(userId);
};

exports.getAllUsers = async () => {
  return await User.find();
};

exports.updateUserRole = async (userId, role) => {

  return await User.findByIdAndUpdate(
    userId,
    { role },
    { new: true }
  );

};