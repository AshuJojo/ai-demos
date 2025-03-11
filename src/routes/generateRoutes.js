const express = require("express");
const router = express.Router();
const { getResponse } = require("../controllers/generateController");

router.post("/", getResponse);

module.exports = router;
