// API Configuration
// Update this file when the backend URL changes

export const API_BASE_URL = "https://kwco-website-j42s.onrender.com/api";
export const API_BASE_URL_WITHOUT_API = "https://kwco-website-j42s.onrender.com";

// For image URLs
export const getImageUrl = (path) => {
  if (!path) return "";
  if (path.startsWith("http")) return path;
  return `${API_BASE_URL_WITHOUT_API}${path}`;
};
