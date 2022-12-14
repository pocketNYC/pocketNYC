const router = require("express").Router();

const {
  models: { Favorite_Events, Event },
} = require("../db");

const { getToken } = require("./adminAuth");

router.get("/", getToken, async (req, res, next) => {
  const userId = req.user.id;

  try {
    const favorite = await Favorite_Events.findAll({
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
    const addFavorite = await Favorite_Events.findOrCreate({
      where: { userId: userId, eventId: eventId },
    });

    res.json(addFavorite);
  } catch (err) {
    next(err);
  }
});

router.delete("/:id", getToken, async (req, res, next) => {
  const userId = req.user.id;
  const eventId = req.params.id;

  try {
    const event = await Favorite_Events.destroy({
      where: { userId: userId, eventId: eventId },
    });
    res.json(event);
  } catch (error) {
    next(error);
  }
});

module.exports = router;
