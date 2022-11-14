const router = require("express").Router();

const {
  models: { Favorite_Event, Event },
} = require("../db");

const { getToken } = require("./adminAuth");
module.exports = router;

router.get("/", getToken, async (req, res, next) => {
  const userId = req.user.id;

  try {
    const favorite = await Favorite_Event.findAll({
      where: [{ userId: userId }],
      include: [Event],
    });
    res.json(favorite);
  } catch (err) {
    next(err);
  }
});

router.post("/", getToken, async (req, res, next) => {
  const userId = req.user.id;
  const eventId = req.body.id;

  try {
    const addFavorite = await Favorite_Event.findOrCreate({
      where: { userId: userId, eventId: eventId },
    });

    res.json(addFavorite);
  } catch (err) {
    next(err);
  }
});
