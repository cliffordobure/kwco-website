const cloudinary = require("cloudinary").v2;
const fs = require("fs").promises;
const path = require("path");

// Configure Cloudinary if credentials are provided
if (process.env.CLOUDINARY_CLOUD_NAME) {
  cloudinary.config({
    cloud_name: process.env.CLOUDINARY_CLOUD_NAME,
    api_key: process.env.CLOUDINARY_API_KEY,
    api_secret: process.env.CLOUDINARY_API_SECRET,
  });
}

/**
 * Upload image to Cloudinary or save locally
 * @param {Buffer} imageBuffer - Image buffer
 * @param {string} filename - Original filename
 * @returns {Promise<string>} - URL or path to the image
 */
const uploadImage = async (imageBuffer, filename) => {
  // If Cloudinary is configured, use it
  if (process.env.CLOUDINARY_CLOUD_NAME) {
    return new Promise((resolve, reject) => {
      cloudinary.uploader
        .upload_stream(
          {
            resource_type: "image",
            folder: "kwco-blog",
            public_id: path.parse(filename).name,
            transformation: [
              { width: 800, height: 600, crop: "limit" },
              { quality: "auto" },
            ],
          },
          (error, result) => {
            if (error) {
              console.error("Cloudinary upload error:", error);
              reject(error);
            } else {
              console.log("Image uploaded to Cloudinary:", result.secure_url);
              resolve(result.secure_url);
            }
          }
        )
        .end(imageBuffer);
    });
  }

  // Fallback to local storage
  const uploadsDir = path.join(__dirname, "../uploads");
  try {
    await fs.access(uploadsDir);
  } catch {
    await fs.mkdir(uploadsDir, { recursive: true });
  }

  const filepath = path.join(uploadsDir, filename);
  await fs.writeFile(filepath, imageBuffer);
  return `/uploads/${filename}`;
};

/**
 * Delete image from Cloudinary or local storage
 * @param {string} imageUrlOrPath - URL (Cloudinary) or path (local)
 */
const deleteImage = async (imageUrlOrPath) => {
  if (!imageUrlOrPath) return;

  // If it's a Cloudinary URL
  if (imageUrlOrPath.includes("cloudinary.com")) {
    try {
      // Extract public_id from URL
      const urlParts = imageUrlOrPath.split("/");
      const publicIdWithFolder = urlParts
        .slice(urlParts.indexOf("kwco-blog"))
        .join("/")
        .replace(/\.[^/.]+$/, ""); // Remove extension

      await cloudinary.uploader.destroy(publicIdWithFolder);
      console.log("Image deleted from Cloudinary:", publicIdWithFolder);
    } catch (error) {
      console.error("Error deleting from Cloudinary:", error);
    }
  } else {
    // Local file
    const filepath = path.join(__dirname, "..", imageUrlOrPath);
    try {
      await fs.unlink(filepath);
      console.log("Local image deleted:", filepath);
    } catch (error) {
      console.error("Error deleting local image:", error);
    }
  }
};

module.exports = {
  uploadImage,
  deleteImage,
};
