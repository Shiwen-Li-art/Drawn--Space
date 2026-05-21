/**
 * controllers/aiController.js
 * ─────────────────────────────────────────────
 * Handles: POST /api/ai/analyze
 *
 * Accepts a project description and optional file
 * metadata, returns AI portfolio analysis.
 * ─────────────────────────────────────────────
 */

const { analyzePortfolio } = require("../services/mockAI");
const { sendSuccess, sendError } = require("../utils/response");

/**
 * POST /api/ai/analyze
 *
 * Request body:
 *   {
 *     "description": "My project explores...",
 *     "files": [ { "originalName": "plan.pdf", ... } ]   // optional
 *   }
 */
const analyze = (req, res) => {
  const { description, files } = req.body;

  // description is required
  if (!description || description.trim() === "") {
    return sendError(res, "Please provide a project description to analyze.");
  }

  // Get mock analysis from the AI service
  const analysis = analyzePortfolio(description, files || []);

  sendSuccess(res, { analysis });
};

module.exports = { analyze };
