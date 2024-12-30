const express = require("express");
const router = express.Router();
const {saveFincialInfo} = require("../controllers/financialInfoController")

router.put("/save/:id", saveFincialInfo);

module.exports = router;
