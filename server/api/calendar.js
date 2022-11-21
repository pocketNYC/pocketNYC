const router = require("express").Router();

const {
  models: { UserCalendar, Event },
} = require("../db");

const { getToken } = require("./adminAuth");

router.get("/", getToken, async (req, res, next) => {
  const userId = req.user.id;

  try {
    const calendarEvent = await UserCalendar.findAll({
      where: [{ userId: userId }],
      include: [Event],
    });
    res.json(calendarEvent);
  } catch (err) {
    next(err);
  }
});

router.post("/", getToken, async (req, res, next) => {
  const userId = req.user.id;
  const eventId = req.body.id;

  try {
    const addEvent = await UserCalendar.findOrCreate({
      where: { userId: userId, eventId: eventId },
    });

    res.json(addEvent);
  } catch (err) {
    next(err);
  }
});

router.delete("/:id", getToken, async (req, res, next) => {
  const userId = req.user.id;
  const eventId = req.params.id;

  try {
    const event = await UserCalendar.destroy({
      where: { userId: userId, eventId: eventId },
    });
    res.json(event);
  } catch (error) {
    next(error);
  }
});

module.exports = router;
