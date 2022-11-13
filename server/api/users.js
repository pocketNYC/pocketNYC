const router = require("express").Router();
const {
  models: { User },
} = require("../db");
const checkForAdmin = require("./adminAuth");

module.exports = router;

// GET api/users
router.get("/", async (req, res, next) => {
  try {
    const user = await User.findByToken(req.headers.authorization);
    if (user.isAdmin === true) {
      const users = await User.findAll({
        attributes: [
          "id",
          "email",
          "firstName",
          "lastName",
          "borough",
          "isAdmin",
        ],
      });
      res.json(users);
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
    res.json(users);
  } catch (err) {
    next(err);
  }
});

// POST / api / users;
// router.post("/", async (req, res, next) => {
//   try {
//     const user = await User.create(req.body);
//     res.status(201).json(user);
//   } catch (error) {
//     next(error);
//   }
// });

// PUT /api/users/:userId
router.put("/:userId", async (req, res, next) => {
  try {
    const user = await User.findByPk(req.params.userId, {
      attributes: ["id", "email", "firstName", "lastName", "isAdmin"],
    });
    res.json(await user.update(req.body));
  } catch (error) {
    next(error);
  }
});

// DELETE /api/users/:userId
router.delete("/:userId", async (req, res, next) => {
  try {
    const user = await User.findByPk(req.params.userId);
    await user.destroy();
    res.sendStatus(204);
  } catch (error) {
    next(error);
  }
});
