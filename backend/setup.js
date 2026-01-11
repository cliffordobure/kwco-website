const mongoose = require("mongoose");
const User = require("./models/User");
require("dotenv").config();

const createAdminUser = async () => {
  try {
    // Connect to MongoDB
    await mongoose.connect(
      process.env.MONGODB_URI || "mongodb://localhost:27017/kwco-blog",
      {
        useNewUrlParser: true,
        useUnifiedTopology: true,
      }
    );

    console.log("Connected to MongoDB");

    // Check if admin user already exists
    const existingAdmin = await User.findOne({ role: "admin" });
    if (existingAdmin) {
      console.log("Admin user already exists");
      process.exit(0);
    }

    // Create admin user
    const adminUser = new User({
      username: "admin",
      email: "admin@kwco.com",
      password: "admin123456",
      firstName: "Admin",
      lastName: "User",
      role: "admin",
    });

    await adminUser.save();
    console.log("Admin user created successfully!");
    console.log("Username: admin");
    console.log("Password: admin123456");
    console.log("Email: admin@kwco.com");
    console.log("\n⚠️  IMPORTANT: Change these credentials after first login!");

    process.exit(0);
  } catch (error) {
    console.error("Setup error:", error);
    process.exit(1);
  }
};

createAdminUser();
