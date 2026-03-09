const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
const multer = require("multer");
const path = require("path");
require("dotenv").config();

const app = express();
const PORT = process.env.PORT || 5000;

// CORS Configuration - allow all origins so any frontend (Vercel preview, production) can call the API
const corsOptions = {
  origin: true, // allow any origin; set to a function with a strict list if you need to restrict later
  credentials: true,
  methods: ['GET', 'POST', 'PUT', 'DELETE', 'OPTIONS', 'PATCH'],
  allowedHeaders: ['Content-Type', 'Authorization', 'X-Requested-With', 'Accept'],
  exposedHeaders: ['Authorization'],
  maxAge: 86400, // 24 hours
  preflightContinue: false,
  optionsSuccessStatus: 204
};

// Middleware
app.use(cors(corsOptions));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Serve static files from uploads directory
// This must be before routes to ensure images are accessible
const uploadsPath = path.join(__dirname, "uploads");
app.use("/uploads", express.static(uploadsPath, {
  setHeaders: (res, filePath) => {
    // Set CORS headers for images
    res.setHeader("Access-Control-Allow-Origin", "*");
    res.setHeader("Access-Control-Allow-Methods", "GET");
    // Cache images for 1 year
    res.setHeader("Cache-Control", "public, max-age=31536000");
  }
}));

// Log uploads directory path for debugging
console.log("Uploads directory:", uploadsPath);

// Database connection
mongoose
  .connect(process.env.MONGODB_URI || "mongodb://localhost:27017/kwco-blog", {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => console.log("Connected to MongoDB"))
  .catch((err) => console.error("MongoDB connection error:", err));

// Health check endpoint
app.get("/health", (req, res) => {
  res.status(200).json({ 
    status: "ok", 
    message: "Server is running",
    timestamp: new Date().toISOString()
  });
});

// Test endpoint to check if uploads directory and files exist
app.get("/api/test/uploads", async (req, res) => {
  const fs = require("fs").promises;
  try {
    const uploadsPath = path.join(__dirname, "uploads");
    const files = await fs.readdir(uploadsPath);
    res.json({
      uploadsPath,
      fileCount: files.length,
      files: files.slice(0, 10), // First 10 files
      message: "Uploads directory accessible"
    });
  } catch (error) {
    res.status(500).json({
      error: error.message,
      uploadsPath: path.join(__dirname, "uploads"),
      message: "Uploads directory not accessible or doesn't exist"
    });
  }
});

// Test endpoint to check specific file
app.get("/api/test/file/:filename", async (req, res) => {
  const fs = require("fs").promises;
  try {
    const filename = req.params.filename;
    const filepath = path.join(__dirname, "uploads", filename);
    const stats = await fs.stat(filepath);
    res.json({
      exists: true,
      filename,
      filepath,
      size: stats.size,
      created: stats.birthtime,
      modified: stats.mtime
    });
  } catch (error) {
    res.status(404).json({
      exists: false,
      filename: req.params.filename,
      error: error.message
    });
  }
});

// Routes
app.use("/api/auth", require("./routes/auth"));
app.use("/api/blogs", require("./routes/blogs"));
app.use("/api/admin", require("./routes/admin"));

// Error handling middleware
app.use((err, req, res, next) => {
  console.error(err.stack);
  res.status(500).json({ message: "Something went wrong!" });
});

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
