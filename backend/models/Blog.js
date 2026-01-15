const mongoose = require("mongoose");

const blogSchema = new mongoose.Schema(
  {
    title: {
      type: String,
      required: true,
      trim: true,
      maxlength: 200,
    },
    slug: {
      type: String,
      required: true,
      unique: true,
      lowercase: true,
    },
    excerpt: {
      type: String,
      required: true,
      maxlength: 300,
    },
    content: {
      type: String,
      required: true,
    },
    featuredImage: {
      type: String,
      required: true,
    },
    author: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User",
      required: true,
    },
    category: {
      type: String,
      required: true,
      enum: [
        "Legal Updates",
        "Case Studies",
        "Legal Advice",
        "Company News",
        "Industry Insights",
      ],
    },
    tags: [
      {
        type: String,
        trim: true,
      },
    ],
    status: {
      type: String,
      enum: ["draft", "published"],
      default: "draft",
    },
    publishedAt: {
      type: Date,
      default: null,
    },
    readTime: {
      type: Number,
      default: 5,
    },
    views: {
      type: Number,
      default: 0,
    },
    likes: {
      type: Number,
      default: 0,
    },
  },
  {
    timestamps: true,
  }
);

// Create slug from title (only if slug is not already explicitly set)
blogSchema.pre("save", async function (next) {
  // Skip if slug is already set for a new document (manually set in route handler)
  if (this.slug && this.isNew) {
    // Slug was manually set, don't override it
    return next();
  }
  
  // If title is not modified, skip
  if (!this.isModified("title")) {
    return next();
  }

  // Generate base slug from title
  let baseSlug = this.title
    .toLowerCase()
    .replace(/[^a-z0-9 -]/g, "")
    .replace(/\s+/g, "-")
    .replace(/-+/g, "-")
    .replace(/^-+|-+$/g, "") // Remove leading/trailing dashes
    .trim();
  
  if (!baseSlug) {
    baseSlug = "untitled";
  }

  // Check for uniqueness and append number if needed
  let slugCounter = 1;
  let finalSlug = baseSlug;
  
  const Blog = this.constructor;
  let existingBlog = await Blog.findOne({ slug: finalSlug, _id: { $ne: this._id } });
  
  while (existingBlog) {
    finalSlug = `${baseSlug}-${slugCounter}`;
    existingBlog = await Blog.findOne({ slug: finalSlug, _id: { $ne: this._id } });
    slugCounter++;
    
    // Safety check
    if (slugCounter > 1000) {
      finalSlug = `${baseSlug}-${Date.now()}`;
      break;
    }
  }

  this.slug = finalSlug;
  next();
});

// Calculate read time based on content length
blogSchema.pre("save", function (next) {
  if (this.isModified("content")) {
    const wordsPerMinute = 200;
    const wordCount = this.content.split(" ").length;
    this.readTime = Math.ceil(wordCount / wordsPerMinute);
  }
  next();
});

module.exports = mongoose.model("Blog", blogSchema);
