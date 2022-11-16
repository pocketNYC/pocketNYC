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
    const userAuth = await User.findByToken(req.headers.authorization); // see which user is logged in (if any)
    const user = await User.findByPk(req.body.userId); //find a user by their primary Key... ?
    //if (userAuth.isAdmin) {  //  if the logged in user is an Admin,
     // res.json(await user.update(req.body.isAdmin)); // update the req.body (which should only be req.body.isAdmin)
    //} else 
    if (userAuth && !userAuth.isAdmin) { //otherwise, if the user is NOT an Admin (but a regular user)
      res.json(await user.update(req.body)); // update everything
    } else {
      res.sendStatus(400);
    }
  } catch (error) {
    next(error);
  }
});

module.exports = router;
