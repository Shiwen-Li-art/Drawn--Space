/**
 * controllers/exportController.js
 * ─────────────────────────────────────────────
 * Handles: POST /api/export
 *
 * Accepts portfolio data and returns a link to
 * a downloadable export file.
 * ─────────────────────────────────────────────
 */

const { generateExport } = require("../services/exportService");
const { sendSuccess }    = require("../utils/response");

/**
 * POST /api/export
 *
 * Request body:
 *   {
 *     "portfolioData": { ...any portfolio object... }
 *   }
 */
const exportPortfolio = (req, res) => {
  const { portfolioData } = req.body;

  // portfolioData is optional — we'll export whatever we receive
  const result = generateExport(portfolioData || {});

  sendSuccess(res, { export: result });
};

module.exports = { exportPortfolio };
