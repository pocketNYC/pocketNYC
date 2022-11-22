const router = require("express").Router();
const {
  models: { User, Event },
} = require("../db");

const { getToken, checkForAdmin } = require("./adminAuth");

// GET /api/events
router.get("/", async (req, res, next) => {
  try {
    const events = await Event.findAll();

    // o: there will never be an instance where events will not be set
    events ? res.json(events) : res.sendStatus(404);
  } catch (error) {
    next(error);
  }
});

// GET /api/events/:id
router.get("/:id", async (req, res, next) => {
  try {
    const event = await Event.findByPk(req.params.id);

    // o: I would avoid using a ternary in this way, just use an if statement
    event ? res.json(event) : res.sendStatus(404);
  } catch (error) {
    next(error);
  }
});

// POST /api/events
router.post("/", getToken, async (req, res, next) => {
  try {
    const event = await Event.create(req.body);

    // o: I would avoid using a ternary in this way, just use an if statement
    event ? res.json(event) : res.sendStatus(404);
  } catch (error) {
    next(error);
  }
});

//PUT /api/events ADMIN ONLY
router.put("/:id", getToken, checkForAdmin, async (req, res, next) => {
  try {
    const event = await Event.findByPk(req.params.id);
    if (event) {
      const editEvent = await event.update(req.body);
      res.json(editEvent);
    } else {
      res.json({ error: "Event not found" });
    }
  } catch (error) {
    next(error);
  }
});

// DELETE /api/events/:id
router.delete("/:id", async (req, res, next) => {
  try {
    const loggedInUser = await User.findByToken(req.headers.authorization);
    if (loggedInUser.isAdmin) {
      const event = await Event.findByPk(req.params.id);
      if (event) {
        await event.destroy();
        res.json(event);
      } else {
        res.sendStatus(404);
      }
    } else {
      res.sendStatus(401);
    }
  } catch (error) {
    next(error);
  }
});

module.exports = router;
