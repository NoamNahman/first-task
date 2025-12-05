const mongoose = require("mongoose");

const recipeSchema = new mongoose.Schema({
  title: { type: String, required: true },
  instructions: { type: String, required: true },
});

module.exports = mongoose.model("Recipe", recipeSchema);
