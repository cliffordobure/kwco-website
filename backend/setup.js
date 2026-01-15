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
    const existingAdmin = await User.findOne({ email: "admin@kwco.legal" });
    if (existingAdmin) {
      console.log("Admin user with email admin@kwco.legal already exists");
      console.log("Updating password...");
      existingAdmin.password = "admin1234567890";
      await existingAdmin.save();
      console.log("Admin user password updated successfully!");
      console.log("Email: admin@kwco.legal");
      console.log("Password: admin1234567890");
      process.exit(0);
    }

    // Create admin user
    const adminUser = new User({
      username: "admin",
      email: "admin@kwco.legal",
      password: "admin1234567890",
      firstName: "Admin",
      lastName: "User",
      role: "admin",
      isActive: true,
    });

    await adminUser.save();
    console.log("Admin user created successfully!");
    console.log("Email: admin@kwco.legal");
    console.log("Password: admin1234567890");
    console.log("Role: admin");
    console.log("\n⚠️  IMPORTANT: Change these credentials after first login!");

    process.exit(0);
  } catch (error) {
    console.error("Setup error:", error);
    process.exit(1);
  }
};

createAdminUser();
