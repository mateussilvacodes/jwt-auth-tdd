const routes = require("express").Router();
const SessionController = require("./app/Controllers/SessionController");
const authMiddleware = require("./app/middleware/auth");

routes.post("/sessions", SessionController.store);

routes.use(authMiddleware);

routes.get("/store/regions", (req, res) => {
  return res.status(200).send([
    "67CgogKJ6FOslvLBSSauw",
    [
      ["children", ["countryCode", "us", "d"], "children", "(main)", "children", "__PAGE__", ["__PAGE__", {}], null, null]
    ]
  ]);
});

module.exports = routes;
