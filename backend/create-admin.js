const mongoose = require("mongoose");
const bcrypt = require("bcryptjs");
require("dotenv").config();

// Simple user schema for this script
const userSchema = new mongoose.Schema({
  username: { type: String, required: true, unique: true },
  email: { type: String, required: true, unique: true, lowercase: true },
  password: { type: String, required: true },
  firstName: { type: String, required: true },
  lastName: { type: String, required: true },
  role: { type: String, enum: ["admin", "editor"], default: "editor" },
  isActive: { type: Boolean, default: true },
}, { timestamps: true });

const User = mongoose.models.User || mongoose.model("User", userSchema);

async function createAdmin() {
  try {
    const mongoUri = process.env.MONGODB_URI;
    if (!mongoUri) {
      console.error("❌ MONGODB_URI not found in environment variables");
      process.exit(1);
    }

    console.log("🔌 Connecting to MongoDB...");
    await mongoose.connect(mongoUri, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });

    console.log("✅ Connected!");
    const dbName = mongoose.connection.db.databaseName;
    console.log("📊 Database:", dbName);
    
    // List all collections to verify we're in the right place
    const collections = await mongoose.connection.db.listCollections().toArray();
    console.log("📁 Collections found:", collections.map(c => c.name).join(", "));

    // Hash password manually
    const salt = await bcrypt.genSalt(12);
    const hashedPassword = await bcrypt.hash("admin1234567890", salt);

    // Delete existing admin if any
    await mongoose.connection.db.collection("users").deleteMany({
      $or: [
        { email: "admin@kwco.legal" },
        { username: "admin" }
      ]
    });
    console.log("🧹 Cleaned up existing admin users");

    // Create admin user directly in collection
    const adminDoc = {
      username: "admin",
      email: "admin@kwco.legal",
      password: hashedPassword,
      firstName: "Admin",
      lastName: "User",
      role: "admin",
      isActive: true,
      createdAt: new Date(),
      updatedAt: new Date()
    };

    const result = await mongoose.connection.db.collection("users").insertOne(adminDoc);
    
    console.log("\n✅ Admin user created successfully!");
    console.log("━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━");
    console.log("📧 Email: admin@kwco.legal");
    console.log("🔑 Password: admin1234567890");
    console.log("👤 Role: admin");
    console.log("🆔 User ID:", result.insertedId);
    console.log("━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━");

    await mongoose.connection.close();
    console.log("\n✅ Done!");
    process.exit(0);
  } catch (error) {
    console.error("\n❌ Error:", error.message);
    if (mongoose.connection.readyState === 1) {
      await mongoose.connection.close();
    }
    process.exit(1);
  }
}

createAdmin();
