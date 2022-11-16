const router = require("express").Router();
module.exports = router;

router.use("/users", require("./users"));
router.use("/events", require("./events"));
router.use("/resources", require("./resources"));
router.use("/favoriteResources", require("./favorite_resources"));
router.use("/favoriteEvents", require("./favorite_events"));

router.use((req, res, next) => {
  const error = new Error("Not Found");
  error.status = 404;
  next(error);
});
