const router = require("express").Router();

const {
  models: { Favorite_Resource },
} = require("../db");

const { getToken } = require("./adminAuth");
module.exports = router;

router.get("/", getToken, async (req, res, next) => {
  const userId = req.user.id;
  console.log(userId);

  try {
    const favorite = await Favorite_Resource.findAll({
      where: [{ userId: userId }],
    });
    res.json(favorite);
  } catch (err) {
    next(err);
  }
});

router.post("/", getToken, async (req, res, next) => {
  const userId = req.user.id;
  const resourceId = req.body.id;
  console.log(userId);
  console.log(resourceId);

  try {
    const addFavorite = await Favorite_Resource.findOrCreate({
      where: { userId: userId, resourceId: resourceId },
    });

    res.json(addFavorite);
  } catch (err) {
    next(err);
  }
});
