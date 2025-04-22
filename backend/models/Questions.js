const mongoose = require("mongoose");

const QuestionSchema = new mongoose.Schema({
  question: { type: String, required: true },
  options: {
    type: [String],
    validate: [arr => arr.length === 4, 'Exactly 4 options required']
  },
  correctAnswer: { type: String, required: true },
  topic: { type: String },
  difficulty: { type: String, enum: ["easy", "medium", "hard"] },
});

module.exports = mongoose.model("Question", QuestionSchema);
