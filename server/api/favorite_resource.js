const router = require("express").Router();

const {
  models: { Favorite_Resource, Resource },
} = require("../db");

const { getToken } = require("./adminAuth");

// o: put this line at the bottom for readability
module.exports = router;

router.get("/", getToken, async (req, res, next) => {
  const userId = req.user.id;

  try {
    // o: this should be called favorite resources
    const favorite = await Favorite_Resource.findAll({
      where: [{ userId: userId }],
      include: [Resource],
    });
    res.json(favorite);
  } catch (err) {
    next(err);
  }
});

router.post("/", getToken, async (req, res, next) => {
  const userId = req.user.id;
  const resourceId = req.body.id;

  try {
    const addFavorite = await Favorite_Resource.findOrCreate({
      where: { userId: userId, resourceId: resourceId },
    });

    res.json(addFavorite);
  } catch (err) {
    next(err);
  }
});
