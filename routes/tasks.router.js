const tasksController = require("../controllers/tasks.controller");

const router = require("express").Router();

router.get("/", tasksController.GetAllTasks);
router.get("/:taskId", tasksController.GetTask);
router.delete("/:taskId", tasksController.DeleteTask);

module.exports = router;
