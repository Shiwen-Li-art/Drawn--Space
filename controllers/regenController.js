/**
 * controllers/regenController.js
 * ─────────────────────────────────────────────
 * Handles: POST /api/regen
 *
 * Accepts new user instructions and an optional
 * previous layout object, returns a revised layout.
 * ─────────────────────────────────────────────
 */

const { regenerateLayout } = require("../services/mockAI");
const { sendSuccess, sendError } = require("../utils/response");

/**
 * POST /api/regen
 *
 * Request body:
 *   {
 *     "additionalDescription": "Make it lighter and add more white space",
 *     "previousLayout": { ...layout object from /api/layout/generate... }  // optional
 *   }
 */
const regen = (req, res) => {
  const { additionalDescription, previousLayout } = req.body;

  if (!additionalDescription || additionalDescription.trim() === "") {
    return sendError(res, "Please provide additional instructions for regeneration.");
  }

  const updatedLayout = regenerateLayout(additionalDescription, previousLayout);

  sendSuccess(res, {
    message: "Layout regenerated with your updated instructions.",
    layout:  updatedLayout,
  });
};

module.exports = { regen };
