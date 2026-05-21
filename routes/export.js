/**
 * routes/export.js
 * POST /api/export
 */
const express  = require("express");
const router   = express.Router();
const { exportPortfolio } = require("../controllers/exportController");

router.post("/", exportPortfolio);

module.exports = router;
