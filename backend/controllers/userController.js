const User = require("../models/UserModel");

//login user
const loginUser = (req, res) => {
  res.json({ msg: "Login User" });
};

//signup user
const signupUser = (req, res) => {
  res.json({ msg: "Signup User" });
};

module.exports = {
  loginUser,
  signupUser,
};
