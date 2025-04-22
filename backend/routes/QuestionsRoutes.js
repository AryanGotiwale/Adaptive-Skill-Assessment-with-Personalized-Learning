const express = require("express");
const router = express.Router();
const Question = require("../models/Questions");

// Add a new question
// router.post("/", async (req, res) => {
//   try {
//     const { question, options, correctAnswer, topic, difficulty } = req.body;

//     if (!question || !options || options.length !== 4 || !correctAnswer) {
//       return res.status(400).json({ message: "All fields are required and 4 options must be provided." });
//     }

//     const newQuestion = new Question({ question, options, correctAnswer, topic, difficulty });
//     await newQuestion.save();
//     res.status(201).json({ message: "Question added successfully!" });
//   } catch (err) {
//     res.status(500).json({ message: "Failed to add question", error: err.message });
//   }
// });

router.post("/", async (req, res) => {
    try {
      const { question, options, correctAnswer, topic, difficulty } = req.body;
  
      if (!question || !options || options.length !== 4 || !correctAnswer || !topic || !difficulty) {
        return res.status(400).json({ message: "All fields are required and 4 options must be provided." });
      }
  
      // ✅ Check if correctAnswer exists in options
      if (!options.includes(correctAnswer)) {
        return res.status(400).json({ message: "Correct answer must match one of the provided options." });
      }
  
      const newQuestion = new Question({ question, options, correctAnswer, topic, difficulty });
      await newQuestion.save();
      res.status(201).json({ message: "Question added successfully!" });
    } catch (err) {
      res.status(500).json({ message: "Failed to add question", error: err.message });
    }
  });
  
// Get all questions (optional: filter by topic)
router.get("/", async (req, res) => {
    
    try {
      const { topic } = req.query;
      const query = topic ? { topic } : {};
      const questions = await Question.find(query);
      res.json(questions);
    } catch (err) {
      res.status(500).json({ message: "Error fetching questions", error: err.message });
    }
  });
  
  // Update a question
  router.put("/:id", async (req, res) => {
    try {
      const updated = await Question.findByIdAndUpdate(req.params.id, req.body, { new: true });
      res.json({ message: "Question updated successfully", updated });
    } catch (err) {
      res.status(500).json({ message: "Failed to update question", error: err.message });
    }
  });
  
  // Delete a question
  router.delete("/:id", async (req, res) => {
    try {
      await Question.findByIdAndDelete(req.params.id);
      res.json({ message: "Question deleted successfully" });
    } catch (err) {
      res.status(500).json({ message: "Failed to delete question", error: err.message });
    }
  });
  
module.exports = router;
