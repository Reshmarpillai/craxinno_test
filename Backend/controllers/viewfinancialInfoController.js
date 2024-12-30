const { default: mongoose } = require("mongoose");
const User = require("../models/user");

const viewFinancialInfo = async (req, res) => {
  const { id } = req.params;

  try {
    const user = await User.findById(id);
    if (!user || !user.financialInfo) {
      return res.status(404).json({ message: "Financial info not found" });
    }

    res.status(200).json(user.financialInfo);
  } catch (error) {
    res.status(500).json({ message: "Error fetching financial info", error });
  }
};
module.exports = { viewFinancialInfo };
