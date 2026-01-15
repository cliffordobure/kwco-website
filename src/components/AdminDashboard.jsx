import React, { useState, useEffect } from "react";
import {
  Plus,
  Edit,
  Trash2,
  Eye,
  EyeOff,
  Calendar,
  User,
  Tag,
} from "lucide-react";
import { API_BASE_URL, getImageUrl } from "../config/api";

const AdminDashboard = () => {
  const [blogs, setBlogs] = useState([]);
  const [loading, setLoading] = useState(true);
  const [submitting, setSubmitting] = useState(false);
  const [showCreateForm, setShowCreateForm] = useState(false);
  const [editingBlog, setEditingBlog] = useState(null);
  const [formData, setFormData] = useState({
    title: "",
    excerpt: "",
    content: "",
    category: "Legal Updates",
    tags: "",
    status: "draft",
    featuredImage: null,
  });

  const token = localStorage.getItem("adminToken");

  useEffect(() => {
    if (token) {
      fetchBlogs();
    }
  }, [token]);

  const fetchBlogs = async () => {
    try {
      const response = await fetch(`${API_BASE_URL}/admin/blogs`, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });

      if (!response.ok) {
        if (response.status === 401) {
          console.error("Unauthorized access. Please log in again.");
          localStorage.removeItem("adminToken");
          window.location.href = "/admin/login";
          return;
        }
        throw new Error(`HTTP error! status: ${response.status}`);
      }

      const data = await response.json();
      setBlogs(data.blogs || []);
    } catch (error) {
      console.error("Error fetching blogs:", error);
      setBlogs([]);
    } finally {
      setLoading(false);
    }
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleFileChange = (e) => {
    setFormData((prev) => ({
      ...prev,
      featuredImage: e.target.files[0],
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setSubmitting(true);

    const formDataToSend = new FormData();
    Object.keys(formData).forEach((key) => {
      if (formData[key] !== null) {
        formDataToSend.append(key, formData[key]);
      }
    });

    try {
      const url = editingBlog
        ? `${API_BASE_URL}/admin/blogs/${editingBlog._id}`
        : `${API_BASE_URL}/admin/blogs`;

      const method = editingBlog ? "PUT" : "POST";

      const response = await fetch(url, {
        method,
        headers: {
          Authorization: `Bearer ${token}`,
        },
        body: formDataToSend,
      });

      if (response.ok) {
        const responseData = await response.json();
        const blogStatus = responseData.blog?.status || formData.status;
        
        setShowCreateForm(false);
        setEditingBlog(null);
        setFormData({
          title: "",
          excerpt: "",
          content: "",
          category: "Legal Updates",
          tags: "",
          status: "draft",
          featuredImage: null,
        });
        
        // Show success message with status info
        if (blogStatus === "published") {
          alert("Blog created successfully and is now visible on the public blog page!");
        } else {
          alert("Blog saved as draft. Change status to 'Published' to make it visible on the public blog page.");
        }
        
        fetchBlogs();
      } else {
        const errorData = await response.json();
        alert(`Error: ${errorData.message || "Failed to save blog"}`);
      }
    } catch (error) {
      console.error("Error saving blog:", error);
      alert(`Error: ${error.message || "Failed to save blog"}`);
    } finally {
      setSubmitting(false);
    }
  };

  const handleEdit = (blog) => {
    if (!blog) return;

    setEditingBlog(blog);
    setFormData({
      title: blog.title || "",
      excerpt: blog.excerpt || "",
      content: blog.content || "",
      category: blog.category || "Legal Updates",
      tags: Array.isArray(blog.tags) ? blog.tags.join(", ") : "",
      status: blog.status || "draft",
      featuredImage: null,
    });
    setShowCreateForm(true);
  };

  const handleDelete = async (blogId) => {
    if (!blogId) {
      console.error("No blog ID provided for deletion");
      return;
    }

    if (window.confirm("Are you sure you want to delete this blog?")) {
      try {
        const response = await fetch(`${API_BASE_URL}/admin/blogs/${blogId}`, {
          method: "DELETE",
          headers: {
            Authorization: `Bearer ${token}`,
          },
        });

        if (response.ok) {
          fetchBlogs();
        } else {
          console.error("Failed to delete blog:", response.status);
        }
      } catch (error) {
        console.error("Error deleting blog:", error);
      }
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
        month: "short",
        day: "numeric",
      });
    } catch (error) {
      console.error("Error formatting date:", error);
      return "Invalid date";
    }
  };

  if (!token) {
    return (
      <div className="min-h-screen bg-gray-50 pt-20">
        <div className="container mx-auto px-4 py-8">
          <div className="text-center">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">
              Admin Access Required
            </h2>
            <p className="text-gray-600">
              Please log in to access the admin dashboard.
            </p>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-50 pt-20" style={{ backgroundColor: '#f9fafb', color: '#111827' }}>
      <div className="container mx-auto px-4 py-8">
        {/* Header */}
        <div className="flex justify-between items-center mb-8">
          <h1 className="text-3xl font-bold" style={{ color: '#111827' }}>Blog Management</h1>
          <button
            onClick={() => setShowCreateForm(true)}
            className="bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition-colors flex items-center gap-2"
          >
            <Plus className="h-5 w-5" />
            New Blog Post
          </button>
        </div>

        {/* Create/Edit Form */}
        {showCreateForm && (
          <div className="bg-white rounded-lg shadow-md p-6 mb-8 relative z-10" style={{ backgroundColor: '#ffffff' }}>
            <h2 className="text-2xl font-bold mb-6" style={{ color: '#111827' }}>
              {editingBlog ? "Edit Blog Post" : "Create New Blog Post"}
            </h2>

            <form onSubmit={handleSubmit} className="space-y-4 admin-form">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-medium mb-1" style={{ color: '#374151' }}>
                    Title *
                  </label>
                  <input
                    type="text"
                    name="title"
                    value={formData.title}
                    onChange={handleInputChange}
                    required
                    className="w-full border border-gray-300 rounded-lg px-3 py-2 focus:ring-2 focus:ring-blue-500 focus:border-blue-500 focus:outline-none"
                    style={{ backgroundColor: '#ffffff', color: '#000000', fontSize: '16px' }}
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium mb-1" style={{ color: '#374151' }}>
                    Category *
                  </label>
                  <select
                    name="category"
                    value={formData.category}
                    onChange={handleInputChange}
                    required
                    className="w-full border border-gray-300 rounded-lg px-3 py-2 focus:ring-2 focus:ring-blue-500 focus:border-blue-500 focus:outline-none"
                    style={{ backgroundColor: '#ffffff', color: '#000000', fontSize: '16px' }}
                  >
                    <option value="Legal Updates">Legal Updates</option>
                    <option value="Case Studies">Case Studies</option>
                    <option value="Legal Advice">Legal Advice</option>
                    <option value="Company News">Company News</option>
                    <option value="Industry Insights">Industry Insights</option>
                  </select>
                </div>
              </div>

              <div>
                <label className="block text-sm font-medium mb-1" style={{ color: '#374151' }}>
                  Excerpt *
                </label>
                <textarea
                  name="excerpt"
                  value={formData.excerpt}
                  onChange={handleInputChange}
                  required
                  rows={3}
                  className="w-full border border-gray-300 rounded-lg px-3 py-2 focus:ring-2 focus:ring-blue-500 focus:border-blue-500 focus:outline-none resize-y"
                  style={{ backgroundColor: '#ffffff', color: '#000000', fontSize: '16px' }}
                />
              </div>

              <div>
                <label className="block text-sm font-medium mb-1" style={{ color: '#374151' }}>
                  Content *
                </label>
                <textarea
                  name="content"
                  value={formData.content}
                  onChange={handleInputChange}
                  required
                  rows={10}
                  className="w-full border border-gray-300 rounded-lg px-3 py-2 focus:ring-2 focus:ring-blue-500 focus:border-blue-500 focus:outline-none resize-y font-mono"
                  placeholder="You can use HTML tags for formatting..."
                  style={{ backgroundColor: '#ffffff', color: '#000000', fontSize: '14px' }}
                />
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-medium mb-1" style={{ color: '#374151' }}>
                    Tags (comma-separated)
                  </label>
                  <input
                    type="text"
                    name="tags"
                    value={formData.tags}
                    onChange={handleInputChange}
                    placeholder="legal, advice, kenya"
                    className="w-full border border-gray-300 rounded-lg px-3 py-2 focus:ring-2 focus:ring-blue-500 focus:border-blue-500 focus:outline-none"
                    style={{ backgroundColor: '#ffffff', color: '#000000', fontSize: '16px' }}
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium mb-1" style={{ color: '#374151' }}>
                    Status *
                  </label>
                  <select
                    name="status"
                    value={formData.status}
                    onChange={handleInputChange}
                    required
                    className="w-full border border-gray-300 rounded-lg px-3 py-2 focus:ring-2 focus:ring-blue-500 focus:border-blue-500 focus:outline-none"
                    style={{ backgroundColor: '#ffffff', color: '#000000', fontSize: '16px' }}
                  >
                    <option value="draft">Draft</option>
                    <option value="published">Published</option>
                  </select>
                </div>
              </div>

              <div>
                <label className="block text-sm font-medium mb-1" style={{ color: '#374151' }}>
                  Featured Image *
                </label>
                <input
                  type="file"
                  name="featuredImage"
                  onChange={handleFileChange}
                  accept="image/*"
                  required={!editingBlog}
                  className="w-full border border-gray-300 rounded-lg px-3 py-2 focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                />
                {editingBlog && (
                  <p className="text-sm text-gray-500 mt-1">
                    Leave empty to keep the current image
                  </p>
                )}
              </div>

              <div className="flex gap-4">
                <button
                  type="submit"
                  disabled={submitting}
                  className="bg-blue-600 text-white px-6 py-2 rounded-lg hover:bg-blue-700 transition-colors disabled:opacity-50 disabled:cursor-not-allowed flex items-center gap-2"
                >
                  {submitting ? (
                    <>
                      <div className="animate-spin rounded-full h-4 w-4 border-b-2 border-white"></div>
                      {editingBlog ? "Updating..." : "Creating..."}
                    </>
                  ) : (
                    editingBlog ? "Update Blog" : "Create Blog"
                  )}
                </button>
                <button
                  type="button"
                  onClick={() => {
                    setShowCreateForm(false);
                    setEditingBlog(null);
                    setFormData({
                      title: "",
                      excerpt: "",
                      content: "",
                      category: "Legal Updates",
                      tags: "",
                      status: "draft",
                      featuredImage: null,
                    });
                  }}
                  className="bg-gray-500 text-white px-6 py-2 rounded-lg hover:bg-gray-600 transition-colors"
                >
                  Cancel
                </button>
              </div>
            </form>
          </div>
        )}

        {/* Info Alert */}
        <div className="bg-blue-50 border-l-4 border-blue-400 p-4 mb-6 rounded">
          <div className="flex">
            <div className="flex-shrink-0">
              <svg className="h-5 w-5 text-blue-400" viewBox="0 0 20 20" fill="currentColor">
                <path fillRule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7-4a1 1 0 11-2 0 1 1 0 012 0zM9 9a1 1 0 000 2v3a1 1 0 001 1h1a1 1 0 100-2v-3a1 1 0 00-1-1H9z" clipRule="evenodd" />
              </svg>
            </div>
            <div className="ml-3">
              <p className="text-sm text-blue-700">
                <strong>Note:</strong> Only blogs with status "Published" will be visible on the public blog page. Make sure to set the status to "Published" when creating or editing a blog post.
              </p>
            </div>
          </div>
        </div>

        {/* Blogs List */}
        <div className="bg-white rounded-lg shadow-md overflow-hidden">
          <div className="px-6 py-4 border-b border-gray-200">
            <h3 className="text-lg font-semibold" style={{ color: '#111827' }}>
              All Blog Posts
            </h3>
          </div>

          {loading ? (
            <div className="p-6 text-center">
              <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-blue-600 mx-auto"></div>
              <p className="mt-2 text-gray-600">Loading blogs...</p>
            </div>
          ) : !blogs || blogs.length === 0 ? (
            <div className="p-6 text-center">
              <p className="text-gray-600">No blogs found.</p>
            </div>
          ) : (
            <div className="overflow-x-auto">
              <table className="min-w-full divide-y divide-gray-200">
                <thead className="bg-gray-50">
                  <tr>
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                      Blog Post
                    </th>
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                      Category
                    </th>
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                      Status
                    </th>
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                      Views
                    </th>
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                      Date
                    </th>
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                      Actions
                    </th>
                  </tr>
                </thead>
                <tbody className="bg-white divide-y divide-gray-200">
                  {(blogs || []).map((blog) => (
                    <tr key={blog._id || blog.id} className="hover:bg-gray-50">
                      <td className="px-6 py-4">
                        <div className="flex items-center">
                          <div className="h-12 w-12 flex-shrink-0">
                            {blog.featuredImage ? (
                              <img
                                className="h-12 w-12 rounded-lg object-cover"
                                src={getImageUrl(blog.featuredImage)}
                                alt={blog.title || "Blog image"}
                                onError={(e) => {
                                  e.target.style.display = "none";
                                }}
                              />
                            ) : (
                              <div className="h-12 w-12 rounded-lg bg-gray-200 flex items-center justify-center">
                                <span className="text-gray-400 text-xs">
                                  No img
                                </span>
                              </div>
                            )}
                          </div>
                          <div className="ml-4">
                            <div className="text-sm font-medium text-gray-900 line-clamp-2">
                              {blog.title || "Untitled"}
                            </div>
                            <div className="text-sm text-gray-500">
                              By {blog.author?.firstName || "Unknown"}{" "}
                              {blog.author?.lastName || ""}
                            </div>
                          </div>
                        </div>
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap">
                        <span
                          className={`px-2 py-1 text-xs font-medium rounded-full ${
                            (blog.category || "Uncategorized") ===
                            "Legal Updates"
                              ? "bg-blue-100 text-blue-800"
                              : (blog.category || "Uncategorized") ===
                                "Case Studies"
                              ? "bg-green-100 text-green-800"
                              : (blog.category || "Uncategorized") ===
                                "Legal Advice"
                              ? "bg-purple-100 text-purple-800"
                              : (blog.category || "Uncategorized") ===
                                "Company News"
                              ? "bg-orange-100 text-orange-800"
                              : "bg-gray-100 text-gray-800"
                          }`}
                        >
                          {blog.category || "Uncategorized"}
                        </span>
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap">
                        <span
                          className={`inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium ${
                            (blog.status || "draft") === "published"
                              ? "bg-green-100 text-green-800"
                              : "bg-yellow-100 text-yellow-800"
                          }`}
                        >
                          {(blog.status || "draft") === "published" ? (
                            <Eye className="h-3 w-3 mr-1" />
                          ) : (
                            <EyeOff className="h-3 w-3 mr-1" />
                          )}
                          {blog.status || "draft"}
                        </span>
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">
                        {blog.views || 0}
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                        {formatDate(
                          blog.createdAt || blog.updatedAt || new Date()
                        )}
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm font-medium">
                        <div className="flex space-x-2">
                          <button
                            onClick={() => handleEdit(blog)}
                            className="text-blue-600 hover:text-blue-900"
                            disabled={!blog || !blog._id}
                          >
                            <Edit className="h-4 w-4" />
                          </button>
                          <button
                            onClick={() => handleDelete(blog._id || blog.id)}
                            className="text-red-600 hover:text-red-900"
                          >
                            <Trash2 className="h-4 w-4" />
                          </button>
                        </div>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default AdminDashboard;
