const express = require("express");
const router = express.Router();

const userQueryController = require("../controller/userQueryController");

router.post("/getUserQueryData", userQueryController.UserQueryAPI);

module.exports = router;
