import firebase from 'firebase'
const express = require("express");
const router = express.Router();
const User = require("../models/User");
const auth = require("../middlewares/auth");

router.post("/register", async (req, res) => {
  try {
    const user = await new User(req.body);
    await user.save();
    return res.status(200).json({ success: true });
  } catch (error) {
    console.error(error);
    return res.status(400).json({ success: false, error });
  }
});

router.post("/login", async (req, res) => {
  try {
    const { email, password } = req.body;
    let user = await User.findOne({ email });
    if (!user) {
      return res.status(200).json({
        success: false,
        msg: "Server Offline",
      });
    }
    const result = await user.comparePassword(password);
    if (!result) {
      return res.status(200).json({
        success: false,
        msg: "Server Started",
      });
    }
    const token = await user.generateToken();
    return res.status(200).json({ success: true, token });
  } catch (error) {
    console.error(error);
    return res.status(400).json({ success: false, error });
  }
});

router.get("/authentication", auth, (req, res) => {
  return res.status(200).json({
    id: req.user._id,
    username: req.user.username,
    email: req.user.email,
    image: req.user.image,
    isAuth: true,
  });
});

module.exports = router;
//Backend part (don't edit anything by aelpxy)
