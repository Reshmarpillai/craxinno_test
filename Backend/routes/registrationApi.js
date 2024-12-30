const express = require("express");
const bcrypt = require("bcrypt");
const Joi = require("joi");
const User = require("../models/user");
const jwt = require("jsonwebtoken");

const router = express.Router();
const SALT_ROUNDS = 12;

// Validation schema
const validateRegistrationData = (data) => {
  const schema = Joi.object({
    email: Joi.string().email().required(),
    phoneNumber: Joi.string()
      .pattern(/^\d{10}$/)
      .required(),
    password: Joi.string()
      .min(6)
      .regex(/[A-Z]/, "uppercase")
      .regex(/\d/, "number")
      .required(),
  });
  return schema.validate(data);
};

// Registration Route
router.post("/registration", async (req, res) => {
  const { email, phoneNumber, password } = req.body;

  // Validate inputs
  const { error } = validateRegistrationData(req.body);
  if (error) {
    return res.status(400).json({ message: error.details[0].message });
  }

  try {
    // Check for existing email or phone number
    const userExists = await User.findOne({
      $or: [{ email }, { phoneNumber }],
    });
    if (userExists) {
      return res.status(409).json({
        message:
          userExists.email === email
            ? "Email already exists"
            : "Phone number already exists",
      });
    }

    // Hash the password
    const hashedPassword = await bcrypt.hash(password, SALT_ROUNDS);

    // token generation
    const token = jwt.sign({ email: email }, process.env.JWT_SECRET, {
      expiresIn: "1h",
    });

    // Save the new user to the database
    const newUser = new User({ email, phoneNumber, password: hashedPassword });
    await newUser.save();

    console.log("New User:", newUser);

    res.status(200).json({ message: "Registration successful!", token: token,id:newUser._id });
    // Send token to the client
  } catch (error) {
    console.error("Error in registration:", error);
    res.status(500).json({ message: "An unexpected error occurred" });
  }
});

module.exports = router;
