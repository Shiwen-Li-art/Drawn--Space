const express = require("express");
const cors = require("cors");
require("dotenv").config();

const aiRoutes = require("./routes/ai");
const ocrRoutes = require("./routes/ocr");
const layoutRoutes = require("./routes/layout");
const regenRoutes = require("./routes/regen");
const exportRoutes = require("./routes/export");
const githubRoutes = require("./routes/github");
const careerRoutes = require("./routes/career");
const growthRoutes = require("./routes/growth");

const app = express();

app.use(cors());
app.use(express.json());

// API routes
app.use("/api/ai", aiRoutes);
app.use("/api/ocr", ocrRoutes);
app.use("/api/layout", layoutRoutes);
app.use("/api/regen", regenRoutes);
app.use("/api/export", exportRoutes);
app.use("/api/github", githubRoutes);
app.use("/api/career", careerRoutes);
app.use("/api/growth", growthRoutes);

// Health check
app.get("/", (req, res) => {
  res.json({
    message: "BuildGrow AI Portfolio Platform API is running",
    status: "success"
  });
});

const PORT = process.env.PORT || 3000;

app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});