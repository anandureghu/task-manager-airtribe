const tasksService = require("../services/tasks.service");

const GetAllTasks = (req, res) => {
  const result = tasksService.getAllTasks();
  res.status(result.code).send(result);
};

const GetTask = (req, res) => {
  const id = +req.params.taskId;
  const result = tasksService.getTask(id);
  res.status(result.code).send(result);
};

const DeleteTask = (req, res) => {
  const id = +req.params.taskId;
  const result = tasksService.deleteTask(id);
  res.status(result.code).send(result);
}

module.exports = {
  GetAllTasks,
  GetTask,
  DeleteTask
};
