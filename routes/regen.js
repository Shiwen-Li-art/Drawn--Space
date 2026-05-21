/**
 * routes/regen.js
 * POST /api/regen
 */
const express  = require("express");
const router   = express.Router();
const { regen } = require("../controllers/regenController");

router.post("/", regen);

module.exports = router;
