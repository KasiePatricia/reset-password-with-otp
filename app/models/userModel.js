const mongoose = require("mongoose");

// create a schema
const userSchema = new mongoose.Schema(
  {
    email: {
      type: String,
      required: true,
    },
    userName: {
      type: String,
      required: true,
      unique: true,
    },
    password: {
      type: String,
      required: true,
    },
    phonenumber: {
      type: String,
      required: true,
    },
  },
  { timestamps: true }
);

// create a model
const userCollection = mongoose.model("users", userSchema);

module.exports = userCollection;
