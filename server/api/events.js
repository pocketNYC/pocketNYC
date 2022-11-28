const router = require("express").Router();
const {
  models: { User, Event },
} = require("../db");
const { Op } = require("sequelize");

const { getToken, checkForAdmin } = require("./adminAuth");
// const { default: Events } = require("../../client/features/events/Events");

// GET /api/events
router.get("/", async (req, res, next) => {
  try {
    const events = await Event.findAll();
    if (events) {
      res.json(events);
    }
  } catch (error) {
    next(error);
  }
});

//gets all approved events in ascending order [only if they take place after today's date]
router.get("/sortedAscendingApproved", async (req, res, next) => {
  try {
    const events = await Event.findAll({
      where: {
        status: "approved",
        start: {
          [Op.gt]: new Date(),
        },
      },
      order: ["start"],
    });
    if (events) {
      res.json(events);
    } else {
      res.sendStatus(404);
    }
  } catch (error) {
    next(error);
  }
});

//gets all pending events in ascending order
router.get("/sortedAscendingPending", async (req, res, next) => {
  try {
    const events = await Event.findAll({
      where: {
        status: "pending",
      },
      order: ["start"],
    });
    if (events) {
      res.json(events);
    } else {
      res.sendStatus(404);
    }
  } catch (error) {
    next(error);
  }
});

// get events associated with userId

// router.get("/userEvents", getToken, async (req, res, next) => {
//   const userId = req.user.id;
//   try {
//     console.log(userId);
//     const events = await Event.findAll({
//       where: [
//         {
//           status: "pending",
//         },
//         {
//           userId: userId,
//         },
//       ],
//     });
//     res.json(events);
//   } catch (error) {
//     next(error);
//   }
// });

// get events associated with userId

router.get("/userEvents", getToken, async (req, res, next) => {
  const userId = req.user.id;
  try {
    console.log(userId);
    const events = await Event.findAll({
      where: [
        {
          status: "pending",
        },
        {
          userId: userId,
        },
      ],
    });
    res.json(events);
  } catch (error) {
    next(error);
  }
});

// GET /api/events/:id
router.get("/:id", async (req, res, next) => {
  try {
    const event = await Event.findByPk(req.params.id);
    if (event) {
      res.json(event);
    } else {
      res.sendStatus(404);
    }
  } catch (error) {
    next(error);
  }
});

// POST /api/events
router.post("/", getToken, async (req, res, next) => {
  try {
    const event = await Event.create(req.body);
    if (event) {
      res.json(event);
    } else {
      res.sendStatus(404);
    }
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
