const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const authSchema = new Schema({
  user_info: {
    type: String,
    required: true,
  },
  createdTime: {
    type: Date,
    default: Date.now,
  },
});

module.exports = mongoose.model("Auth", authSchema);
