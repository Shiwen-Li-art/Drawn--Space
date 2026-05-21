/**
 * routes/career.js
 * POST /api/career/match
 */
const express  = require("express");
const router   = express.Router();
const { match } = require("../controllers/careerController");

router.post("/match", match);

module.exports = router;
