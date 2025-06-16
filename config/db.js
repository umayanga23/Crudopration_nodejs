const mongoose = require("mongoose");
require("dotenv").config();

const connectDB = async () => {
  try {
    await mongoose.connect(process.env.MONGO_URI);
    console.log("MongoDB Connected to database:", mongoose.connection.name);
  } catch (err) {
    console.error(" MongoDB Connection Failed:");
    console.error("- Verify your .env MONGO_URI is correct");
    console.error("- Check IP is whitelisted in Atlas");
    console.error("- Confirm database user exists with proper privileges");
    console.error("Full error:", err.message);
    process.exit(1);
  }
};

module.exports = connectDB;
