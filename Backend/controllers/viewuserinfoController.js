const { default: mongoose } = require("mongoose");
const User = require("../models/user");

const viewUserInfo = async (req, res) => {
  const { id } = req.params;

  try {
    const user = await User.findById(id);
    if (!user || !user.userInfo) {
      return res.status(404).json({ message: "User info not found" });
    }

    res.status(200).json(user.userInfo);
  } catch (error) {
    res.status(500).json({ message: "Error fetching user info", error });
  }
};
module.exports = { viewUserInfo };
