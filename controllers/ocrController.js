/**
 * controllers/ocrController.js
 * ─────────────────────────────────────────────
 * Handles: POST /api/ocr/extract
 *
 * Accepts a filename (already uploaded via /api/upload)
 * and returns extracted text and page structure.
 * ─────────────────────────────────────────────
 */

const { extractOCR } = require("../services/mockAI");
const { sendSuccess, sendError } = require("../utils/response");

/**
 * POST /api/ocr/extract
 *
 * Request body:
 *   { "fileName": "abc-123.pdf" }
 */
const extract = (req, res) => {
  const { fileName } = req.body;

  if (!fileName || fileName.trim() === "") {
    return sendError(res, "Please provide a fileName to extract text from.");
  }

  // Get mock OCR result
  const result = extractOCR(fileName);

  sendSuccess(res, { ocr: result });
};

module.exports = { extract };
