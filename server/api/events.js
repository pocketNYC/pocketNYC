const router = require("express").Router();
const {
  models: { User, Event },
} = require("../db");
const { Op } = require("sequelize");

const { getToken, checkForAdmin } = require("./adminAuth");

// GET /api/events
router.get("/", async (req, res, next) => {
  try {
    const events = await Event.findAll();
    events ? res.json(events) : res.sendStatus(404);
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
    events ? res.json(events) : res.sendStatus(404);
  } catch (error) {
    next(error);
  }
});

// router.get("/getNewlySubmittedEvent", async (req, res, next) => {
//   const userId = req.user;
//   console.log(req.user);

//   try {
//     const events = await Event.findAll({
//       where: [
//         { userId: userId },
//         { status: "pending" },
//         // start: {
//         //   [Op.gt]: new Date(),
//         // },
//       ],
//       order: ["start"],
//     });
//     events ? res.json(events) : res.sendStatus(404);
//   } catch (error) {
//     next(error);
//   }
// });
// router.get("/featuredEvents", async (req, res, next) => {
//   try {
//     const events = await Event.findAll({
//       where: {
//         status: "approved",
//         start: {
//           [Op.gt]: new Date(),
//         },
//         tag: {
//           [Op.substring]: ["holidays"],
//         },
//       },
//       order: ["start"],
//     });
//     events ? res.json(events) : res.sendStatus(404);
//   } catch (error) {
//     next(error);
//   }
// });

//gets all pending events in ascending order
router.get("/sortedAscendingPending", async (req, res, next) => {
  try {
    const events = await Event.findAll({
      where: {
        status: "pending",
      },
      order: ["start"],
    });
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
