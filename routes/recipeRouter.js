const express = require("express");
const router = express.Router();
const recipeController = require("../controllers/recipeController");

router.get("/", recipeController.getRecipes);

router.post("/", recipeController.postRecipes);

router.put("/", recipeController.putRecipes);

router.delete("/", recipeController.deleteRecipes);

module.exports = router;
