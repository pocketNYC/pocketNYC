const router = require("express").Router();
const {
  models: { Resources },
} = require("../db");
module.exports = router;

router.get("/", async (req, res, next) => {
  try {
    const resources = await Resources.findAll();
    res.json(resources);
  } catch (err) {
    next(err);
  }
});

router.get("/:id", async (req, res, next) => {
  try {
    const resource = await Resources.findByPk(req.params.id);
    console.log("PARAMS", req.params.id);
    res.json(resource);
  } catch (err) {
    next(err);
  }
});

router.post("/", async (req, res, next) => {
  try {
    const resource = await Resources.create(req.body);
    res.json(resource);
  } catch (err) {
    next(err);
  }
});

router.put("/:id", async (req, res, next) => {
  try {
    const resource = await Resources.findByPk(req.params.id);
    res.send(await resource.update(req.body));
  } catch (err) {
    next(err);
  }
});

router.delete("/:id", async (req, res, next) => {
  try {
    const resource = await Resources.findByPk(req.params.id);

    await resource.destroy();
    res.sendStatus(204);
  } catch (err) {
    next(err);
  }
});
