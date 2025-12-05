const express = require("express");
const bodyParser = require("body-parser");
const app = express();
const port = process.env.PORT || 3000;

const mongoose = require("mongoose");
mongoose.connect(
  process.env.MONGODB_URI || "mongodb://localhost:27017/test",
  {}
);

const recipesDB = mongoose.connection;
recipesDB.on("error", (error) => {
  console.error("connection error:", error);
});
recipesDB.once("open", () => {
  console.log("Connected to MongoDB");
});

app.get("/", (req, res) => {
  res.send("Hello World!");
});

app.use(express.urlencoded({ extended: true }));
app.use(express.json());
const recipeRouter = require("./routes/recipeRouter");
app.use("/recipes", recipeRouter);

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`);
});
