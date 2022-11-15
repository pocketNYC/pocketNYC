const router = require("express").Router();
const {
  models: { User, Event },
} = require("../db");

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
router.post("/", async (req, res, next) => {
  try {
    // const loggedInUser = await User.findByToken(req.headers.authorization);
    // if (loggedInUser) {
    const event = await Event.create(req.body);
    console.log('event', event)
    event ? res.json(event) : res.sendStatus(404);
    // } else {
    //   res.send('Please log in or sign up to submit an events.')
    // }
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
