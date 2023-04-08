const express = require("express");
const userRouter = express.Router();
const User = require("../authModel");

userRouter.get("/userList", async (req, res) => {
  try {
    const users = await User.find().sort({ createdTime: -1 });
    res.send({
      status: 200,
      message: "User's list fetched successfully",
      response: users,
    });
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
});

module.exports = userRouter;
