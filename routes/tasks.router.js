const tasksController = require("../controllers/tasks.controller");

const router = require("express").Router();

router.get("/", tasksController.GetAllTasks);
router.get("/:taskId", tasksController.GetTask);
router.post("/", tasksController.CreateTask);
router.put("/:taskId", tasksController.UpdateTask);
router.delete("/:taskId", tasksController.DeleteTask);

module.exports = router;
