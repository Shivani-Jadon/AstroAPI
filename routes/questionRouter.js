const express = require("express");
const router = express.Router();

const questionController = require("../controller/questionController");

// route to create question category
router.post("/createQuestion", questionController.addQuestionCategory);

// route to fetch all questions
router.get("/fetchQuestions", questionController.fetchAllQuestions);

// route to fetch question based on category
router.get("/category/get", questionController.fetchQuestion);

// route to update question suggestion
router.put("/suggestion", questionController.addSuggestions);

// route to delete a question category
router.delete("/remove", questionController.removeCategory);

module.exports = router;