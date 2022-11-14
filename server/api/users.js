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

//GET api/users/:userId
router.get("/:userId", async (req, res, next) => {
  try {
    const user = await User.findByPk(req.params.userId, {
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
router.put("/:userId", async (req, res, next) => {
  try {
    const userAuth = await User.findByToken(req.headers.authorization);
    if (userAuth.isAdmin) {
      const user = await User.findByPk(req.body.userId);
      res.json(await user.update(req.body.isAdmin));
    } else {
      res.sendStatus(400);
    }
  } catch (error) {
    next(error);
  }
});

module.exports = router;
