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

const CreateTask = (req, res) => {
  const task = req.body;
  const result = tasksService.createTask(task);
  res.status(result.code).send(result);
};

const UpdateTask = (req, res) => {
  const id = +req.params.taskId;
  const newTask = req.body.task;
  const result = tasksService.updateTask(id, newTask);
  res.status(result.code).send(result);
};

const DeleteTask = (req, res) => {
  const id = +req.params.taskId;
  const result = tasksService.deleteTask(id);
  res.status(result.code).send(result);
};

module.exports = {
  GetAllTasks,
  GetTask,
  CreateTask,
  DeleteTask,
  UpdateTask,
};
