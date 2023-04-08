const express = require("express");
require("dotenv").config();
const mongoose = require("mongoose");
const authRouter = require("./routes/authRoutes");
const userRouter = require("./routes/userRoutes");
const createError = require("http-errors");
const cors = require("cors");

mongoose
  .connect(process.env.MONGO_URI)
  .then(() => {
    console.log("Database connected");
  })
  .catch((err) => console.log(err));

const app = express();
app.use(cors());

app.use(express.json());
app.use("/auth", authRouter);
app.use("/user", userRouter);

app.use(async (req, res, next) => {
  next(createError.NotFound());
});

app.use((err, req, res, next) => {
  res.status(err.status || 500);
  res.send({
    error: {
      status: err.status || 500,
      message: err.message,
    },
  });
});

app.listen(process.env.PORT, () =>
  console.log(`Server running on port ${process.env.PORT}`)
);
