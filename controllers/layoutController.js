/**
 * controllers/layoutController.js
 * ─────────────────────────────────────────────
 * Handles: POST /api/layout/generate
 *
 * Accepts uploaded file metadata, a user description,
 * and a chosen template name.
 * Returns a mock portfolio layout spec.
 * ─────────────────────────────────────────────
 */

const { generateLayout } = require("../services/mockAI");
const { sendSuccess, sendError } = require("../utils/response");

/**
 * POST /api/layout/generate
 *
 * Request body:
 *   {
 *     "description": "I want a dark, editorial style...",
 *     "template":    "editorial-dark",        // optional
 *     "files":       [ { "path": "...", ... } ] // optional, from /api/upload
 *   }
 */
const generate = (req, res) => {
  const { description, template, files } = req.body;

  if (!description || description.trim() === "") {
    return sendError(res, "Please provide a description of your desired layout style.");
  }

  const layout = generateLayout(description, template, files || []);

  sendSuccess(res, { layout });
};

module.exports = { generate };
