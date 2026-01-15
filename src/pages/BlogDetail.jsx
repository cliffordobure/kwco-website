import React, { useState, useEffect } from "react";
import { useParams, Link } from "react-router-dom";
import {
  Calendar,
  Clock,
  Eye,
  Tag,
  ArrowLeft,
  Share2,
  Facebook,
  Twitter,
  Linkedin,
} from "lucide-react";
import { API_BASE_URL, getImageUrl } from "../config/api";

const BlogDetail = () => {
  const { slug } = useParams();
  const [blog, setBlog] = useState(null);
  const [loading, setLoading] = useState(true);
  const [relatedBlogs, setRelatedBlogs] = useState([]);

  useEffect(() => {
    fetchBlog();
  }, [slug]);

  const fetchBlog = async () => {
    setLoading(true);
    try {
      const response = await fetch(`${API_BASE_URL}/blogs/${slug}`);
      if (!response.ok) {
        if (response.status === 404) {
          throw new Error("Blog not found");
        }
        throw new Error(`HTTP error! status: ${response.status}`);
      }
      const data = await response.json();

      if (!data.blog) {
        throw new Error("Invalid blog data received");
      }

      console.log("Blog data received:", data.blog);
      console.log("Featured image path:", data.blog.featuredImage);
      console.log("Full image URL:", getImageUrl(data.blog.featuredImage));
      setBlog(data.blog);

      // Fetch related blogs
      if (data.blog.category && data.blog._id) {
        fetchRelatedBlogs(data.blog.category, data.blog._id);
      }
    } catch (error) {
      console.error("Error fetching blog:", error);
      setBlog(null);
    } finally {
      setLoading(false);
    }
  };

  const fetchRelatedBlogs = async (category, currentBlogId) => {
    try {
      const response = await fetch(
        `${API_BASE_URL}/blogs?category=${category}&limit=3`
      );

      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }

      const data = await response.json();
      const filteredBlogs = (data.blogs || []).filter(
        (blog) => blog._id !== currentBlogId
      );
      setRelatedBlogs(filteredBlogs.slice(0, 3));
    } catch (error) {
      console.error("Error fetching related blogs:", error);
      setRelatedBlogs([]);
    }
  };

  const formatDate = (dateString) => {
    try {
      const date = new Date(dateString);
      if (isNaN(date.getTime())) {
        return "Invalid date";
      }
      return date.toLocaleDateString("en-US", {
        year: "numeric",
        month: "long",
        day: "numeric",
      });
    } catch (error) {
      console.error("Error formatting date:", error);
      return "Invalid date";
    }
  };

  const shareOnSocial = (platform) => {
    if (!blog) return;

    const url = window.location.href;
    const title = blog.title || "Check out this blog post";

    let shareUrl = "";
    switch (platform) {
      case "facebook":
        shareUrl = `https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(
          url
        )}`;
        break;
      case "twitter":
        shareUrl = `https://twitter.com/intent/tweet?url=${encodeURIComponent(
          url
        )}&text=${encodeURIComponent(title)}`;
        break;
      case "linkedin":
        shareUrl = `https://www.linkedin.com/sharing/share-offsite/?url=${encodeURIComponent(
          url
        )}`;
        break;
      default:
        return;
    }

    window.open(shareUrl, "_blank", "width=600,height=400");
  };

  if (loading) {
    return (
      <div className="min-h-screen bg-gray-50 pt-20">
        <div className="container mx-auto px-4 py-8">
          <div className="text-center">
            <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-blue-600 mx-auto"></div>
            <p className="mt-4 text-gray-600">Loading blog post...</p>
          </div>
        </div>
      </div>
    );
  }

  if (!blog) {
    return (
      <div className="min-h-screen bg-gray-50 pt-20">
        <div className="container mx-auto px-4 py-8">
          <div className="text-center">
            <div className="text-gray-400 mb-4">
              <svg
                className="mx-auto h-16 w-16"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"
                />
              </svg>
            </div>
            <h3 className="text-lg font-medium text-gray-900 mb-2">
              Blog post not found
            </h3>
            <p className="text-gray-600 mb-4">
              The blog post you're looking for doesn't exist or has been
              removed.
            </p>
            <Link
              to="/blog"
              className="inline-flex items-center text-blue-600 hover:text-blue-800 font-semibold"
            >
              <ArrowLeft className="mr-2 h-4 w-4" />
              Back to Blog
            </Link>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-50 pt-20">
      {/* Back to Blog Button */}
      <div className="container mx-auto px-4 py-4">
        <Link
          to="/blog"
          className="inline-flex items-center text-blue-600 hover:text-blue-800 font-semibold transition-colors"
        >
          <ArrowLeft className="mr-2 h-4 w-4" />
          Back to Blog
        </Link>
      </div>

      <div className="container mx-auto px-4 pb-8">
        {/* Blog Header */}
        <div className="bg-white rounded-lg shadow-md overflow-hidden mb-8">
          {/* Featured Image */}
          <div className="relative h-96 overflow-hidden bg-gray-100">
            {blog.featuredImage ? (
              <img
                src={getImageUrl(blog.featuredImage)}
                alt={blog.title || "Blog image"}
                className="w-full h-full object-cover"
                style={{
                  display: "block",
                  position: "relative",
                  zIndex: 1,
                }}
                onError={(e) => {
                  console.error("Image failed to load:", blog.featuredImage);
                  console.error("Full URL:", getImageUrl(blog.featuredImage));
                  if (e.target) {
                    e.target.style.display = "none";
                  }
                }}
                onLoad={(e) => {
                  console.log("Image loaded successfully:", blog.featuredImage);
                  console.log("Image element:", e.target);
                  console.log(
                    "Image dimensions:",
                    e.target.naturalWidth,
                    "x",
                    e.target.naturalHeight
                  );
                }}
              />
            ) : (
              <div className="w-full h-full flex items-center justify-center">
                <div className="text-center">
                  <svg
                    className="mx-auto h-24 w-24 text-gray-400 mb-4"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z"
                    />
                  </svg>
                  <p className="text-gray-500 text-lg">No Featured Image</p>
                </div>
              </div>
            )}
            {/* Removed the black overlay that was hiding the image */}
            <div className="absolute bottom-4 left-4">
              <span
                className={`px-3 py-1 rounded-full text-sm font-semibold ${
                  (blog.category || "Uncategorized") === "Legal Updates"
                    ? "bg-blue-100 text-blue-800"
                    : (blog.category || "Uncategorized") === "Case Studies"
                    ? "bg-green-100 text-green-800"
                    : (blog.category || "Uncategorized") === "Legal Advice"
                    ? "bg-purple-100 text-purple-800"
                    : (blog.category || "Uncategorized") === "Company News"
                    ? "bg-orange-100 text-orange-800"
                    : "bg-gray-100 text-gray-800"
                }`}
              >
                {blog.category || "Uncategorized"}
              </span>
            </div>
          </div>

          {/* Blog Info */}
          <div className="p-8">
            <h1 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              {blog.title || "Untitled Blog Post"}
            </h1>

            <p className="text-xl text-gray-600 mb-6">
              {blog.excerpt || "No excerpt available"}
            </p>

            {/* Meta Information */}
            <div className="flex flex-wrap items-center justify-between gap-4 mb-6 pb-6 border-b border-gray-200">
              <div className="flex flex-wrap items-center gap-6 text-sm text-gray-500">
                <div className="flex items-center gap-2">
                  <Calendar className="h-4 w-4" />
                  {formatDate(blog.publishedAt || blog.createdAt)}
                </div>
                <div className="flex items-center gap-2">
                  <Clock className="h-4 w-4" />
                  {blog.readTime || 5} min read
                </div>
                <div className="flex items-center gap-2">
                  <Eye className="h-4 w-4" />
                  {blog.views || 0} views
                </div>
                {blog.author && blog.author.firstName && (
                  <div className="flex items-center gap-2">
                    <span>
                      By {blog.author.firstName} {blog.author.lastName || ""}
                    </span>
                  </div>
                )}
              </div>

              {/* Share Buttons */}
              <div className="flex items-center gap-2">
                <span className="text-sm text-gray-500 mr-2">Share:</span>
                <button
                  onClick={() => shareOnSocial("facebook")}
                  className="p-2 text-blue-600 hover:bg-blue-50 rounded-full transition-colors"
                  title="Share on Facebook"
                >
                  <Facebook className="h-4 w-4" />
                </button>
                <button
                  onClick={() => shareOnSocial("twitter")}
                  className="p-2 text-blue-400 hover:bg-blue-50 rounded-full transition-colors"
                  title="Share on Twitter"
                >
                  <Twitter className="h-4 w-4" />
                </button>
                <button
                  onClick={() => shareOnSocial("linkedin")}
                  className="p-2 text-blue-700 hover:bg-blue-50 rounded-full transition-colors"
                  title="Share on LinkedIn"
                >
                  <Linkedin className="h-4 w-4" />
                </button>
              </div>
            </div>

            {/* Tags */}
            {blog.tags && Array.isArray(blog.tags) && blog.tags.length > 0 && (
              <div className="flex flex-wrap gap-2 mb-6">
                {blog.tags.map((tag, index) => (
                  <span
                    key={index}
                    className="flex items-center gap-1 text-sm bg-gray-100 text-gray-600 px-3 py-1 rounded-full"
                  >
                    <Tag className="h-3 w-3" />
                    {tag || "Untagged"}
                  </span>
                ))}
              </div>
            )}
          </div>
        </div>

        {/* Blog Content */}
        <div className="bg-white rounded-lg shadow-md p-8 mb-8">
          {blog.content ? (
            <div
              className="prose prose-lg max-w-none prose-headings:text-gray-900 prose-p:text-gray-700 prose-strong:text-gray-900 prose-a:text-blue-600 prose-a:no-underline hover:prose-a:underline"
              dangerouslySetInnerHTML={{ __html: blog.content }}
            />
          ) : (
            <div className="text-center py-8">
              <p className="text-gray-500">
                No content available for this blog post.
              </p>
            </div>
          )}
        </div>

        {/* Related Blogs */}
        {relatedBlogs && relatedBlogs.length > 0 && (
          <div className="bg-white rounded-lg shadow-md p-8">
            <h2 className="text-2xl font-bold text-gray-900 mb-6">
              Related Articles
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {relatedBlogs.map((relatedBlog) => (
                <article
                  key={relatedBlog._id || relatedBlog.id}
                  className="group"
                >
                  <div className="relative h-48 overflow-hidden rounded-lg mb-4">
                    {relatedBlog.featuredImage ? (
                      <img
                        src={getImageUrl(relatedBlog.featuredImage)}
                        alt={relatedBlog.title || "Related blog image"}
                        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                        onError={(e) => {
                          if (e.target) {
                            e.target.style.display = "none";
                          }
                        }}
                      />
                    ) : (
                      <div className="w-full h-full bg-gray-200 flex items-center justify-center">
                        <span className="text-gray-400 text-sm">No image</span>
                      </div>
                    )}
                  </div>
                  <h3 className="font-semibold text-gray-900 mb-2 group-hover:text-blue-600 transition-colors">
                    <Link to={`/blog/${relatedBlog.slug || relatedBlog._id}`}>
                      {relatedBlog.title || "Untitled"}
                    </Link>
                  </h3>
                  <p className="text-sm text-gray-600 line-clamp-2">
                    {relatedBlog.excerpt || "No excerpt available"}
                  </p>
                  <div className="flex items-center gap-2 mt-2 text-xs text-gray-500">
                    <Calendar className="h-3 w-3" />
                    {formatDate(
                      relatedBlog.publishedAt || relatedBlog.createdAt
                    )}
                  </div>
                </article>
              ))}
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default BlogDetail;
