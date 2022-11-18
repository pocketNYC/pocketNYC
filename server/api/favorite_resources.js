const router = require("express").Router();

const {
  models: { Favorite_Resources, Resource },
} = require("../db");

const { getToken } = require("./adminAuth");

router.get("/", getToken, async (req, res, next) => {
  const userId = req.user.id;

  try {
    const favorite = await Favorite_Resources.findAll({
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
    const addFavorite = await Favorite_Resources.findOrCreate({
      where: { userId: userId, resourceId: resourceId },
    });

    res.json(addFavorite);
  } catch (err) {
    next(err);
  }
});

router.delete("/:id", getToken, async (req, res, next) => {
  const userId = req.user.id;
  const resourceId = req.params.id;

  try {
    const resource = await Favorite_Resources.destroy({
      where: { userId: userId, resourceId: resourceId },
    });
    res.json(resource);
  } catch (error) {
    next(error);
  }
});

module.exports = router;
