const { default: mongoose } = require("mongoose");
const User = require("../models/user");

const saveUserInfo = async (req, res) => {
  try {
    const { title, name, dateOfBirth, address, livingStatus, aboutYou } = req.body;
    const { id } = req.params;
    const result = await User.findOneAndUpdate(
      { _id: id },
      { userInfo: {title, name, dateOfBirth, address, livingStatus, aboutYou } }
    );

    // Send a successful response
    res.status(200).json({ user: result });
  } catch (error) {
    console.log("error", error);
    res.status(500).json({ message: "Error saving personal info" });
  }
};

module.exports = { saveUserInfo };
