const express = require("express");
const router = express.Router();
const { saveFincialInfo } = require("../controllers/financialInfoController");
const {
  viewFinancialInfo,
} = require("../controllers/viewfinancialInfoController");

router.put("/save/:id", saveFincialInfo);
router.get("/users/:id/view/financialinfoview", viewFinancialInfo);

module.exports = router;
