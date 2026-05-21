/**
 * controllers/careerController.js
 * ─────────────────────────────────────────────
 * Handles: POST /api/career/match
 *
 * Accepts user skills and interests, returns
 * ranked career direction recommendations.
 * ─────────────────────────────────────────────
 */

const { matchCareers } = require("../services/mockAI");
const { sendSuccess, sendError } = require("../utils/response");

/**
 * POST /api/career/match
 *
 * Request body:
 *   {
 *     "skills":    ["Rhino", "Adobe Illustrator", "spatial design"],
 *     "interests": ["environmental graphics", "user experience"]
 *   }
 */
const match = (req, res) => {
  const { skills, interests } = req.body;

  // At least one of skills or interests is required
  if ((!skills || skills.length === 0) && (!interests || interests.length === 0)) {
    return sendError(res, "Please provide at least one skill or interest to match careers.");
  }

  const result = matchCareers(skills, interests);

  sendSuccess(res, { career: result });
};

module.exports = { match };
