const mongoose = require("mongoose");

const userSchema = new mongoose.Schema({
  email: { type: String, required: true, unique: true },
  phoneNumber: { type: String, required: true, unique: true },
  password: { type: String, required: true },
  userInfo: {
    name: { type: String },
    dateOfBirth: { type: Date },
    address: { type: String },
    livingStatus: { type: String },
    aboutYou: { type: String },
  },
  financialInfo: {
    employmentStatus: {
      type: String,
      enum: ["Employed", "Unemployed", "Self-Employed", "Retired"],
    },
    additionalSavings: { type: Number },
  },
});

const User = mongoose.model("User", userSchema);
module.exports = User;
