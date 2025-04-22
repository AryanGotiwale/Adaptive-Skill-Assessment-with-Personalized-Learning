// models/CustomUser.js (New Table for New Project)

const mongoose = require("mongoose");

const CustomUserSchema = new mongoose.Schema({
  name: String,
  email: { type: String, unique: true },
  password: String,
  
  // Add project-specific fields here
}, {
    collection: "my_custom_users", // 👈 This forces a different collection
  }
);

module.exports = mongoose.model("CustomUser", CustomUserSchema);
