const getRecipes = (req, res) => {
  res.send("get recipes");
};

const postRecipes = (req, res) => {
  res.send("post recipes");
};

const putRecipes = (req, res) => {
  res.send("put recipes");
};

const deleteRecipes = (req, res) => {
  res.send("delete recipes");
};

module.exports = {
  getRecipes,
  postRecipes,
  putRecipes,
  deleteRecipes,
};
