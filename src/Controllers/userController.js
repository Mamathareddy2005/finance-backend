const User = require("../models/User");

// Get all users (Admin)
exports.getUsers = async (req, res) => {
  const users = await User.find();
  res.json(users);
};

// Update user role/status
exports.updateUser = async (req, res) => {
  const user = await User.findByIdAndUpdate(
    req.params.id,
    req.body,
    { new: true }
  );
  res.json(user);
};