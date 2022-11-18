const router = require("express").Router();
const {
  models: { Resource },
} = require("../db");

router.get("/", async (req, res, next) => {
  try {
    const resources = await Resource.findAll();
    res.json(resources);
  } catch (err) {
    next(err);
  }
});

router.get("/:id", async (req, res, next) => {
  try {
    const resource = await Resource.findByPk(req.params.id);
    if (resource) {
      res.json(resource);
    } else {
      res.sendStatus(404);
    }
  } catch (err) {
    next(err);
  }
});

router.post("/", async (req, res, next) => {
  try {
    const resource = await Resource.create(req.body);
    res.json(resource);
  } catch (err) {
    next(err);
  }
});

router.put("/:id", async (req, res, next) => {
  try {
    const resource = await Resource.findByPk(req.params.id);
    if (resource) {
      res.send(await resource.update(req.body));
    } else {
      res.json({ error: "Event not found" });
    }
  } catch (err) {
    next(err);
  }
});

router.delete("/:id", async (req, res, next) => {
  try {
    const resource = await Resource.findByPk(req.params.id);
    if (resource) {
      await resource.destroy();
      res.sendStatus(204);
    } else {
      res.sendStatus(401);
    }
  } catch (err) {
    next(err);
  }
});

module.exports = router;
