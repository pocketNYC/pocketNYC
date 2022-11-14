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
    res.json(user);
  } catch (err) {
    next(err);
  }
});

// PUT /api/users/:userId
router.put("/:userId", async (req, res, next) => {
  try {
    const userAuth = await User.findByToken(req.headers.authorization);
    if (userAuth.isAdmin === true) {
      const user = await User.findByPk(req.body.userId);
      res.json(await user.update(req.body.isAdmin));
    }
  } catch (error) {
    next(error);
  }
});
