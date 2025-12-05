const { isValidObjectId } = require("mongoose");
const Recipe = require("../model/recipeModel");

const getRecipes = async (req, res) => {
  const recipes = await Recipe.find({});
  res.send(recipes);
};

const getRecipeById = async (req, res) => {
  const { id } = req.params;

  try {
    const recipe = isValidObjectId(id) ? await Recipe.findById(id) : null;

    if (!recipe) {
      return res.status(404).json({ message: "Recipe not found" });
    }

    res.send(recipe);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

const createRecipe = async (req, res) => {
  const recipe = req.body;

  try {
    const newRecipe = await Recipe.create(recipe);
    res.status(201).json(newRecipe);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

const updateRecipe = async (req, res) => {
  const { id } = req.params;
  const recipeUpdates = req.body;

  const newRecipe = isValidObjectId(id)
    ? await Recipe.findByIdAndUpdate(id, recipeUpdates, { new: true })
    : null;

  if (!newRecipe) {
    return res.status(404).json({ message: "Recipe not found" });
  }
  res.status(200).json(newRecipe);
};

const deleteRecipe = async (req, res) => {
  const { id } = req.params;
  const deletedRecipe = isValidObjectId(id)
    ? await Recipe.findByIdAndDelete(id)
    : null;
  if (!deletedRecipe) {
    return res.status(404).json({ message: "Recipe not found" });
  }
  res.status(200).json(deletedRecipe);
};

module.exports = {
  getRecipes,
  getRecipeById,
  createRecipe,
  updateRecipe,
  deleteRecipe,
};
