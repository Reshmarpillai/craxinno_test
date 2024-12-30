const express = require("express");
const router = express.Router();
const {
  viewFinancialInfo,
} = require("../controllers/viewfinancialInfoController");
const { viewUserInfo } = require("../controllers/viewuserinfoController");


router.get("/users/:id/financialinfoview", viewFinancialInfo);
router.get("/users/:id/userinfoview", viewUserInfo);

module.exports = router;
