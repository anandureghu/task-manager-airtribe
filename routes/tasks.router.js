const { GetAllTasks } = require("../controllers/tasks.controller");

const router = require("express").Router();

router.get("/", GetAllTasks);

module.exports = router;
