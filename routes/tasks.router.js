const tasksController = require("../controllers/tasks.controller");

const router = require("express").Router();

router.get("/", tasksController.GetAllTasks);
router.get("/:taskId", tasksController.GetTask);

module.exports = router;
