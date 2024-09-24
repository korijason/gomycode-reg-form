const { Schema, models, model } = require("mongoose");

const userSchema = new Schema(
  {
    firstName: { type: String, required: true },
    lastName: { type: String, required: true },
    email: { type: String, required: true },
    password: { type: String, required: true },
    gender: { type: String, required: true },
    phoneNumber: { type: Number, required: true },
  },
  { timestamps: true }
);

const User = models.User|| model("User", userSchema);
module.exports = { User };
