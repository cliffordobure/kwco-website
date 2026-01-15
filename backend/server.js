const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
const multer = require("multer");
const path = require("path");
require("dotenv").config();

const app = express();
const PORT = process.env.PORT || 5000;

// CORS Configuration
const corsOptions = {
  origin: function (origin, callback) {
    // Allow requests with no origin (like mobile apps or curl requests)
    if (!origin) {
      console.log('CORS: Allowing request with no origin');
      return callback(null, true);
    }
    
    // List of allowed origins
    const allowedOrigins = [
      'https://kwco.legal',
      'https://www.kwco.legal',
      'http://localhost:5173',
      'http://localhost:3000',
      'http://localhost:5174',
      'https://kwco-website.vercel.app',
    ];
    
    // In development, allow all origins
    if (process.env.NODE_ENV === 'development') {
      console.log(`CORS: Development mode - allowing origin: ${origin}`);
      return callback(null, true);
    }
    
    // Check if origin is in allowed list
    if (allowedOrigins.indexOf(origin) !== -1) {
      console.log(`CORS: Allowing origin: ${origin}`);
      callback(null, true);
    } else {
      console.log(`CORS: Blocked origin: ${origin}`);
      console.log(`CORS: Allowed origins: ${allowedOrigins.join(', ')}`);
      callback(new Error('Not allowed by CORS'));
    }
  },
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
