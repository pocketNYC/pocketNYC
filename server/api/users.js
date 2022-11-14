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
    const users = await User.findByPk(req.params.userId, {
      attributes: [
        "id",
        "email",
        "firstName",
        "lastName",
        "interests",
        "borough",
      ],
    });
    if (users) {
      res.json(users);
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
    const user = await User.findByPk(req.params.userId);
    if (user) {
      res.json(await user.update(req.body));
    } else {
      res.sendStatus(400);
    }
  } catch (error) {
    next(error);
  }
});

// DELETE /api/users/:userId
router.delete("/:userId", async (req, res, next) => {
  try {
    const user = await User.findByPk(req.params.userId);
    if (user) {
      await user.destroy();
      res.send(user);
    } else {
      res.sendStatus(400);
    }
    res.sendStatus(204);
  } catch (error) {
    next(error);
  }
});

module.exports = router;
