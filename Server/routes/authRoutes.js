const express = require("express");
const createError = require("http-errors");
const authRouter = express.Router();
const User = require("../authModel");

authRouter.post("/login", async (req, res) => {
  const { user_info } = req.body;
  try {
    const doesExist = await User.findOne({ user_info: user_info });
    if (doesExist) {
      res.send({
        status: 409,
        message: `${user_info} already been registered`,
      });
    } else {
      const user = new User({ user_info });
      const saveUser = await user.save();
      res.send({
        status: 200,
        message: "Logged in successfully",
        response: saveUser,
      });
    }
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
});

module.exports = authRouter;
