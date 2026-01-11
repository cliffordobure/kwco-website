const express = require("express");
const fs = require("fs").promises;
const path = require("path");
const { body, validationResult } = require("express-validator");
const { auth, adminOnly, editorOrAdmin } = require("../middleware/auth");
const {
  upload,
  processImage,
  generateFilename,
} = require("../middleware/upload");
const Blog = require("../models/Blog");
const User = require("../models/User");
const router = express.Router();

// Ensure uploads directory exists
const ensureUploadsDir = async () => {
  const uploadsDir = path.join(__dirname, "../uploads");
  try {
    await fs.access(uploadsDir);
  } catch {
    await fs.mkdir(uploadsDir, { recursive: true });
  }
};

// Create new blog
router.post(
  "/blogs",
  auth,
  editorOrAdmin,
  upload.single("featuredImage"),
  async (req, res) => {
    try {
      const errors = validationResult(req);
      if (!errors.isEmpty()) {
        return res.status(400).json({ errors: errors.array() });
      }

      if (!req.file) {
        return res.status(400).json({ message: "Featured image is required" });
      }

      await ensureUploadsDir();

      const { title, excerpt, content, category, tags, status } = req.body;
      const filename = generateFilename(req.file.originalname);
      const filepath = path.join(__dirname, "../uploads", filename);

      // Process and save image
      const processedImage = await processImage(req.file.buffer, filename);
      await fs.writeFile(filepath, processedImage);

      const blog = new Blog({
        title,
        excerpt,
        content,
        category,
        tags: tags ? tags.split(",").map((tag) => tag.trim()) : [],
        status,
        featuredImage: `/uploads/${filename}`,
        author: req.user._id,
        publishedAt: status === "published" ? new Date() : null,
      });

      await blog.save();

      const populatedBlog = await blog.populate("author", "firstName lastName");
      res.status(201).json({ blog: populatedBlog });
    } catch (error) {
      console.error("Create blog error:", error);
      res.status(500).json({ message: "Server error" });
    }
  }
);

// Get all blogs (admin view)
router.get("/blogs", auth, editorOrAdmin, async (req, res) => {
  try {
    const page = parseInt(req.query.page) || 1;
    const limit = parseInt(req.query.limit) || 20;
    const skip = (page - 1) * limit;

    const blogs = await Blog.find()
      .populate("author", "firstName lastName")
      .sort({ createdAt: -1 })
      .skip(skip)
      .limit(limit);

    const total = await Blog.countDocuments();
    const totalPages = Math.ceil(total / limit);

    res.json({
      blogs,
      pagination: {
        currentPage: page,
        totalPages,
        totalBlogs: total,
        hasNext: page < totalPages,
        hasPrev: page > 1,
      },
    });
  } catch (error) {
    console.error("Get admin blogs error:", error);
    res.status(500).json({ message: "Server error" });
  }
});

// Get blog by ID (admin view)
router.get("/blogs/:id", auth, editorOrAdmin, async (req, res) => {
  try {
    const blog = await Blog.findById(req.params.id).populate(
      "author",
      "firstName lastName"
    );

    if (!blog) {
      return res.status(404).json({ message: "Blog not found" });
    }

    res.json({ blog });
  } catch (error) {
    console.error("Get blog error:", error);
    res.status(500).json({ message: "Server error" });
  }
});

// Update blog
router.put(
  "/blogs/:id",
  auth,
  editorOrAdmin,
  upload.single("featuredImage"),
  async (req, res) => {
    try {
      const errors = validationResult(req);
      if (!errors.isEmpty()) {
        return res.status(400).json({ errors: errors.array() });
      }

      const blog = await Blog.findById(req.params.id);
      if (!blog) {
        return res.status(404).json({ message: "Blog not found" });
      }

      const { title, excerpt, content, category, tags, status } = req.body;

      // Handle image update
      if (req.file) {
        await ensureUploadsDir();

        const filename = generateFilename(req.file.originalname);
        const filepath = path.join(__dirname, "../uploads", filename);

        // Process and save new image
        const processedImage = await processImage(req.file.buffer, filename);
        await fs.writeFile(filepath, processedImage);

        // Delete old image if it exists
        if (blog.featuredImage) {
          const oldImagePath = path.join(__dirname, "..", blog.featuredImage);
          try {
            await fs.unlink(oldImagePath);
          } catch (error) {
            console.log("Old image not found or already deleted");
          }
        }

        blog.featuredImage = `/uploads/${filename}`;
      }

      // Update blog fields
      blog.title = title || blog.title;
      blog.excerpt = excerpt || blog.excerpt;
      blog.content = content || blog.content;
      blog.category = category || blog.category;
      blog.tags = tags ? tags.split(",").map((tag) => tag.trim()) : blog.tags;
      blog.status = status || blog.status;

      if (status === "published" && blog.status !== "published") {
        blog.publishedAt = new Date();
      }

      await blog.save();

      const updatedBlog = await blog.populate("author", "firstName lastName");
      res.json({ blog: updatedBlog });
    } catch (error) {
      console.error("Update blog error:", error);
      res.status(500).json({ message: "Server error" });
    }
  }
);

// Delete blog
router.delete("/blogs/:id", auth, adminOnly, async (req, res) => {
  try {
    const blog = await Blog.findById(req.params.id);
    if (!blog) {
      return res.status(404).json({ message: "Blog not found" });
    }

    // Delete associated image
    if (blog.featuredImage) {
      const imagePath = path.join(__dirname, "..", blog.featuredImage);
      try {
        await fs.unlink(imagePath);
      } catch (error) {
        console.log("Image not found or already deleted");
      }
    }

    await Blog.findByIdAndDelete(req.params.id);
    res.json({ message: "Blog deleted successfully" });
  } catch (error) {
    console.error("Delete blog error:", error);
    res.status(500).json({ message: "Server error" });
  }
});

// Get dashboard stats
router.get("/dashboard", auth, editorOrAdmin, async (req, res) => {
  try {
    const totalBlogs = await Blog.countDocuments();
    const publishedBlogs = await Blog.countDocuments({ status: "published" });
    const draftBlogs = await Blog.countDocuments({ status: "draft" });
    const totalViews = await Blog.aggregate([
      { $group: { _id: null, totalViews: { $sum: "$views" } } },
    ]);

    const recentBlogs = await Blog.find()
      .populate("author", "firstName lastName")
      .sort({ createdAt: -1 })
      .limit(5)
      .select("title status createdAt views");

    res.json({
      stats: {
        totalBlogs,
        publishedBlogs,
        draftBlogs,
        totalViews: totalViews[0]?.totalViews || 0,
      },
      recentBlogs,
    });
  } catch (error) {
    console.error("Dashboard error:", error);
    res.status(500).json({ message: "Server error" });
  }
});

// Create admin user (only for initial setup)
router.post(
  "/users",
  auth,
  adminOnly,
  [
    body("username").isLength({ min: 3, max: 30 }),
    body("email").isEmail().normalizeEmail(),
    body("password").isLength({ min: 6 }),
    body("firstName").notEmpty(),
    body("lastName").notEmpty(),
    body("role").isIn(["admin", "editor"]),
  ],
  async (req, res) => {
    try {
      const errors = validationResult(req);
      if (!errors.isEmpty()) {
        return res.status(400).json({ errors: errors.array() });
      }

      const { username, email, password, firstName, lastName, role } = req.body;

      // Check if user already exists
      const existingUser = await User.findOne({
        $or: [{ email }, { username }],
      });
      if (existingUser) {
        return res.status(400).json({ message: "User already exists" });
      }

      const user = new User({
        username,
        email,
        password,
        firstName,
        lastName,
        role,
      });

      await user.save();

      res.status(201).json({
        user: {
          id: user._id,
          username: user.username,
          email: user.email,
          role: user.role,
          firstName: user.firstName,
          lastName: user.lastName,
        },
      });
    } catch (error) {
      console.error("Create user error:", error);
      res.status(500).json({ message: "Server error" });
    }
  }
);

module.exports = router;
