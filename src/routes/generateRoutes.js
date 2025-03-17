const express = require("express");
const router = express.Router();
const {
  getSingleResponse,
  getStructuredResponse,
} = require("../controllers/generateController");

router.post("/", getSingleResponse);
router.post("/recipe-json", getStructuredResponse);

module.exports = router;
