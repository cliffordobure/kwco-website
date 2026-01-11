const express = require("express");
const Blog = require("../models/Blog");
const router = express.Router();

// Get all published blogs with pagination
router.get("/", async (req, res) => {
  try {
    const page = parseInt(req.query.page) || 1;
    const limit = parseInt(req.query.limit) || 9;
    const category = req.query.category;
    const search = req.query.search;
    const skip = (page - 1) * limit;

    let query = { status: "published" };

    // Filter by category
    if (category && category !== "all") {
      query.category = category;
    }

    // Search functionality
    if (search) {
      query.$or = [
        { title: { $regex: search, $options: "i" } },
        { excerpt: { $regex: search, $options: "i" } },
        { content: { $regex: search, $options: "i" } },
        { tags: { $in: [new RegExp(search, "i")] } },
      ];
    }

    const blogs = await Blog.find(query)
      .populate("author", "firstName lastName")
      .sort({ publishedAt: -1 })
      .skip(skip)
      .limit(limit)
      .select("-content");

    const total = await Blog.countDocuments(query);
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
    console.error("Get blogs error:", error);
    res.status(500).json({ message: "Server error" });
  }
});

// Get blog by slug
router.get("/:slug", async (req, res) => {
  try {
    const blog = await Blog.findOne({
      slug: req.params.slug,
      status: "published",
    }).populate("author", "firstName lastName");

    if (!blog) {
      return res.status(404).json({ message: "Blog not found" });
    }

    // Increment views
    blog.views += 1;
    await blog.save();

    res.json({ blog });
  } catch (error) {
    console.error("Get blog error:", error);
    res.status(500).json({ message: "Server error" });
  }
});

// Get featured blogs
router.get("/featured/featured", async (req, res) => {
  try {
    const featuredBlogs = await Blog.find({ status: "published" })
      .populate("author", "firstName lastName")
      .sort({ views: -1, publishedAt: -1 })
      .limit(3)
      .select("-content");

    res.json({ blogs: featuredBlogs });
  } catch (error) {
    console.error("Get featured blogs error:", error);
    res.status(500).json({ message: "Server error" });
  }
});

// Get blogs by category
router.get("/category/:category", async (req, res) => {
  try {
    const page = parseInt(req.query.page) || 1;
    const limit = parseInt(req.query.limit) || 9;
    const skip = (page - 1) * limit;

    const blogs = await Blog.find({
      category: req.params.category,
      status: "published",
    })
      .populate("author", "firstName lastName")
      .sort({ publishedAt: -1 })
      .skip(skip)
      .limit(limit)
      .select("-content");

    const total = await Blog.countDocuments({
      category: req.params.category,
      status: "published",
    });
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
    console.error("Get category blogs error:", error);
    res.status(500).json({ message: "Server error" });
  }
});

// Get all categories
router.get("/categories/all", async (req, res) => {
  try {
    const categories = await Blog.distinct("category", { status: "published" });
    res.json({ categories });
  } catch (error) {
    console.error("Get categories error:", error);
    res.status(500).json({ message: "Server error" });
  }
});

// Get all tags
router.get("/tags/all", async (req, res) => {
  try {
    const tags = await Blog.distinct("tags", { status: "published" });
    res.json({ tags });
  } catch (error) {
    console.error("Get tags error:", error);
    res.status(500).json({ message: "Server error" });
  }
});

module.exports = router;
