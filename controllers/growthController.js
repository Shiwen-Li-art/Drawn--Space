/**
 * controllers/growthController.js
 * ─────────────────────────────────────────────
 * Handles: POST /api/growth/tasks
 *
 * Accepts missing skills and a target career,
 * returns a personalised list of growth tasks.
 * ─────────────────────────────────────────────
 */

const { generateGrowthTasks } = require("../services/mockAI");
const { sendSuccess, sendError } = require("../utils/response");

/**
 * POST /api/growth/tasks
 *
 * Request body:
 *   {
 *     "missingSkills": ["3D visualisation", "client presentation", "AutoCAD"],
 *     "targetCareer":  "Environmental Designer"
 *   }
 */
const getTasks = (req, res) => {
  const { missingSkills, targetCareer } = req.body;

  if (!missingSkills || missingSkills.length === 0) {
    return sendError(res, "Please provide at least one missing skill to generate growth tasks.");
  }

  const result = generateGrowthTasks(missingSkills, targetCareer);

  sendSuccess(res, { growth: result });
};

module.exports = { getTasks };
