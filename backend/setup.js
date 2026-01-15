const mongoose = require("mongoose");
const User = require("./models/User");
require("dotenv").config();

const createAdminUser = async () => {
  try {
    const mongoUri = process.env.MONGODB_URI || "mongodb://localhost:27017/kwco-blog";
    console.log("Connecting to MongoDB...");
    console.log("URI:", mongoUri.replace(/\/\/.*@/, "//***:***@")); // Hide credentials in log
    
    // Connect to MongoDB
    await mongoose.connect(mongoUri, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });

    console.log("✅ Connected to MongoDB");
    console.log("Database:", mongoose.connection.db.databaseName);

    // Delete any existing admin users first to avoid conflicts
    const deleted = await User.deleteMany({ 
      $or: [
        { email: "admin@kwco.legal" },
        { username: "admin" }
      ]
    });
    if (deleted.deletedCount > 0) {
      console.log(`🗑️  Deleted ${deleted.deletedCount} existing admin user(s)`);
    }

    // Create new admin user
    console.log("Creating admin user...");
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
    
    console.log("\n✅ Admin user created successfully!");
    console.log("━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━");
    console.log("📧 Email: admin@kwco.legal");
    console.log("🔑 Password: admin1234567890");
    console.log("👤 Role: admin");
    console.log("━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━");
    console.log("\n⚠️  IMPORTANT: Change these credentials after first login!");
    
    // Verify the user was created
    const verifyUser = await User.findOne({ email: "admin@kwco.legal" });
    if (verifyUser) {
      console.log("\n✅ Verification: User found in database");
      console.log("User ID:", verifyUser._id);
      console.log("Is Active:", verifyUser.isActive);
    }

    await mongoose.connection.close();
    console.log("\n✅ Database connection closed");
    process.exit(0);
  } catch (error) {
    console.error("\n❌ Setup error:");
    console.error("Error message:", error.message);
    console.error("Error stack:", error.stack);
    
    if (error.code === 11000) {
      console.error("\n⚠️  Duplicate key error - User might already exist");
      console.error("Try deleting the existing user first");
    }
    
    if (mongoose.connection.readyState === 1) {
      await mongoose.connection.close();
    }
    process.exit(1);
  }
};

createAdminUser();
