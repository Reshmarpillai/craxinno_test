const express = require("express");
const router = express.Router();
const { saveUserInfo } = require("../controllers/userInfoController");

router.put("/save/:id", saveUserInfo);

module.exports = router;
