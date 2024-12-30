const { default: mongoose } = require("mongoose");
const User = require("../models/user");

const saveFincialInfo = async (req, res) => {
  try {
    const { employmentStatus, additionalSavings } = req.body;
    const { id } = req.params;
    const result = await User.findOneAndUpdate(
      { _id: id },
      { financialInfo: { employmentStatus, additionalSavings } }
    );

    // Send a successful response
    res.status(200).json({ user: result });
  } catch (error) {
    console.log("error", error);
    res.status(500).json({ message: "Error saving financial info" });
  }
};

module.exports = { saveFincialInfo };
