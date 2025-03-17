const express = require("express");
const router = express.Router();
const { getSingleResponse } = require("../controllers/generateController");

router.post("/", getSingleResponse);

module.exports = router;
