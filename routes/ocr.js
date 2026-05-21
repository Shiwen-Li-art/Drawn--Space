/**
 * routes/ocr.js
 * POST /api/ocr/extract
 */
const express  = require("express");
const router   = express.Router();
const { extract } = require("../controllers/ocrController");

router.post("/extract", extract);

module.exports = router;
