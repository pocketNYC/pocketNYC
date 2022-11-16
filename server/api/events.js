const router = require("express").Router();
const {
  models: { User, Event },
} = require("../db");
const { getToken } = require("./adminAuth");

// GET /api/events
router.get("/", async (req, res, next) => {
  try {
    const events = await Event.findAll();
    events ? res.json(events) : res.sendStatus(404);
  } catch (error) {
    next(error);
  }
});

// GET /api/events/:id
router.get("/:id", async (req, res, next) => {
  try {
    const event = await Event.findByPk(req.params.id);
    event ? res.json(event) : res.sendStatus(404);
  } catch (error) {
    next(error);
  }
});

// POST /api/events
router.post("/", getToken, async (req, res, next) => {
  try {
    const event = await Event.create(req.body);
    event ? res.json(event) : res.sendStatus(404);
  } catch (error) {
    next(error);
  }
});

router.delete("/:id", async (req, res, next) => {
  try {
    const loggedInUser = await User.findByToken(req.headers.authorization);
    if (loggedInUser.isAdmin) {
      const event = await Event.findByPk(req.params.id);
      await event.destroy();
      res.send(event);
    } else {
      res.sendStatus(401);
    }
  } catch (error) {
    next(error);
  }
});

module.exports = router;
