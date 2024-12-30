const express = require("express");
const router = express.Router();
const { viewUserInfo } = require("../controllers/viewuserinfoController");

router.get("/users/:id/view/userinfoview", viewUserInfo);

module.exports = router;
