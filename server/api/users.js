const router = require("express").Router();
const {
  models: { User },
} = require("../db");

// GET api/users
router.get("/", async (req, res, next) => {
  try {
    const user = await User.findByToken(req.headers.authorization);
    if (user.isAdmin) {
      const users = await User.findAll({
        attributes: [
          "id",
          "email",
          "firstName",
          "lastName",
          "borough",
          "interests",
          "isAdmin",
        ],
      });
      res.json(users);
    } else {
      res.sendStatus(401);
    }
  } catch (err) {
    next(err);
  }
});

router.get("/getNewlySubmittedEvent", async (req, res, next) => {
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
//GET api/users/:userId
router.get("/:userId", async (req, res, next) => {
  try {
    const user = await User.findByPk(req.body.userId, {
      attributes: [
        "id",
        "email",
        "firstName",
        "lastName",
        "interests",
        "borough",
      ],
    });

    if (user) {
      res.json(user);
    } else {
      res.sendStatus(400);
    }
  } catch (err) {
    next(err);
  }
});

// PUT /api/users/:userId
router.put("/:userId/", async (req, res, next) => {
  try {
    const user = await User.findByPk(req.params.userId);
    res.json(await user.update(req.body));
  } catch (error) {
    next(error);
  }
});

module.exports = router;
