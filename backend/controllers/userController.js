const User = require("../models/UserModel");

//login user
const loginUser = (req, res) => {
  res.json({ msg: "Login User" });
};

//signup user
const signupUser = async (req, res) => {
  const { email, password } = req.body;
  try {
    const user = await User.signup(email, password);
    res.status(200).json({ email, user });
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
  // res.json({ msg: "Signup User" });
};

module.exports = {
  loginUser,
  signupUser,
};
