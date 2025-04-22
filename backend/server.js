// const express = require("express");
// const mongoose = require("mongoose");
// const cors = require("cors");
// require("dotenv").config();

// const app = express();

// const authRoutes = require("./routes/AuthRoutes");


// app.use("/api/auth", authRoutes);
// app.use(cors({ origin: "*", methods: "GET,POST,PUT,DELETE", allowedHeaders: "Content-Type,Authorization" }));


// // Connect to MongoDB
// const MONGO_URI = process.env.MONGO_URI;
// if (!MONGO_URI) {
//   console.error("Error: MONGO_URI is not defined in .env file");
//   process.exit(1);
// }

// mongoose
//   .connect(MONGO_URI)
//   .then(() => console.log("MongoDB Connected"))
//   .catch((err) => {
//     console.error("MongoDB Connection Error:", err);
//     process.exit(1);
//   });

// // Test route
// app.get("/", (req, res) => {
//   res.send("API is running...");
// });

// // Start server
// const PORT = process.env.PORT || 5000;
// app.listen(PORT, () => console.log(`Server running on port ${PORT}`));



const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
require("dotenv").config();

const app = express();

// CORS middleware — should come before routes
app.use(cors({
  origin: "*", // 🔒 Replace "*" if using credentials
  methods: ["GET", "POST", "PUT", "DELETE"],
  allowedHeaders: ["Content-Type", "Authorization"],
  credentials: true // if you're sending cookies or auth headers
}));

app.use(express.json()); // Add this to parse JSON bodies

// Import and use auth routes
const authRoutes = require("./routes/AuthRoutes");
app.use("/api/auth", authRoutes);

const questionRoutes = require("./routes/QuestionsRoutes")
app.use("/api/questions", questionRoutes)

// MongoDB connection
const MONGO_URI = process.env.MONGO_URI;
if (!MONGO_URI) {
  console.error("Error: MONGO_URI is not defined in .env file");
  process.exit(1);
}

mongoose
  .connect(MONGO_URI)
  .then(() => console.log("MongoDB Connected"))
  .catch((err) => {
    console.error("MongoDB Connection Error:", err);
    process.exit(1);
  });

// Test route
app.get("/", (req, res) => {
  res.send("API is running...");
});

// Start server
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
