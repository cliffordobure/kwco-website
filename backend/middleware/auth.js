const jwt = require("jsonwebtoken");
const User = require("../models/User");

const auth = async (req, res, next) => {
  try {
    const token = req.header("Authorization")?.replace("Bearer ", "");

    if (!token) {
      return res
        .status(401)
        .json({ message: "Access denied. No token provided." });
    }

    const decoded = jwt.verify(
      token,
      process.env.JWT_SECRET || "your-secret-key"
    );
    const user = await User.findById(decoded.userId).select("-password");

    if (!user || !user.isActive) {
      return res
        .status(401)
        .json({ message: "Invalid token or user inactive." });
    }

    req.user = user;
    next();
  } catch (error) {
    res.status(401).json({ message: "Invalid token." });
  }
};

const adminOnly = async (req, res, next) => {
  try {
    if (req.user.role !== "admin") {
      return res.status(403).json({ message: "Access denied. Admin only." });
    }
    next();
  } catch (error) {
    res.status(403).json({ message: "Access denied." });
  }
};

const editorOrAdmin = async (req, res, next) => {
  try {
    if (!["admin", "editor"].includes(req.user.role)) {
      return res
        .status(403)
        .json({ message: "Access denied. Editor or Admin only." });
    }
    next();
  } catch (error) {
    res.status(403).json({ message: "Access denied." });
  }
};

module.exports = { auth, adminOnly, editorOrAdmin };
