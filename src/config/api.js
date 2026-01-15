// API Configuration
// Update this file when the backend URL changes

export const API_BASE_URL = "https://kwco-website-j42s.onrender.com/api";
export const API_BASE_URL_WITHOUT_API = "https://kwco-website-j42s.onrender.com";

// For image URLs
export const getImageUrl = (path) => {
  if (!path) {
    return "";
  }
  
  // If already a full URL, return as is
  if (path.startsWith("http://") || path.startsWith("https://")) {
    return path;
  }
  
  // Ensure path starts with /
  const normalizedPath = path.startsWith("/") ? path : `/${path}`;
  
  // Construct full URL
  const fullUrl = `${API_BASE_URL_WITHOUT_API}${normalizedPath}`;
  
  // Debug logging (remove in production if needed)
  if (process.env.NODE_ENV === 'development') {
    console.log(`getImageUrl: ${path} -> ${fullUrl}`);
  }
  
  return fullUrl;
};
