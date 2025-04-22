const express = require("express");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
const CustomUser = require("../models/UserModel");

require("dotenv").config(); // Load env variables

const router = express.Router();

// register

router.post("/register", async (req, res) => {
    const { name, email, password } = req.body;
  
    try {
      const existingUser = await CustomUser.findOne({ email });
      if (existingUser)
        return res.status(400).json({ message: "Email already registered" });
  
      const hashedPassword = await bcrypt.hash(password, 10);
  
      const user = new CustomUser({
        name,
        email,
        password: hashedPassword,
      });
  
      await user.save();
  
      const token = jwt.sign({ userId: user._id }, process.env.JWT_SECRET, {
        expiresIn: "1h",
      });
  
      res.status(201).json({
        token,
        user: { id: user._id, name: user.name, email: user.email },
      });
    } catch (err) {
      console.error("❌ Registration error:", err.message);
      res.status(500).json({ message: "Server error" });
    }
  });
  

// login

router.post("/login", async (req, res) => {
  console.log("✅ Login route hit!");
  console.log("Received request body:", req.body);

  try {
    const { email, password } = req.body;
    console.log("Received email:", email, "password:", password);

    const user = await CustomUser.findOne({ email });
    if (!user) return res.status(400).json({ message: "User not found" });

    const isMatch = await bcrypt.compare(password, user.password);
    if (!isMatch) return res.status(400).json({ message: "Invalid credentials" });

    const token = jwt.sign({ userId: user._id }, process.env.JWT_SECRET, { expiresIn: "1h" });

    console.log("🧪 JWT_SECRET in use (login route):", process.env.JWT_SECRET);
    console.log("✅ Login successful! Token generated:", token);

    res.json({
      token,
      user: {
        id: user._id,
        name: user.name,
      },
    });
  } catch (error) {
    console.error("Error in Login route:", error);
    res.status(500).json({ message: "Server error", error });
  }
});

module.exports = router;
