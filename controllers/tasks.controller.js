const httpStatus = require("http-status");
const tasksService = require("../services/tasks.service");
const data = require("../utils/data");

const GetAllTasks = (req, res) => {
  try {
    const params = {};
    params.limit = req.query.limit ? +req.query.limit : data.tasks.length;
    params.offset = req.query.offset ? +req.query.offset : 0;
    params.status = req.query.status ? req.query.status : null;
    params.sortBy = req.query.sortBy ? req.query.sortBy : "id";
    params.sortOrder = req.query.sortOrder ? req.query.sortOrder : "asc";

    const result = tasksService.getAllTasks(params);
    res.status(result.code).send(result);
  } catch (error) {
    const result = {
      code: httpStatus.INTERNAL_SERVER_ERROR,
      msg: "something happend please try again later",
    };
    console.error(error);
    res.status(result.code).send(result);
  }
};

const GetTask = (req, res) => {
  try {
    const id = +req.params.taskId;
    const result = tasksService.getTask(id);
    res.status(result.code).send(result);
  } catch (error) {
    const result = {
      code: httpStatus.INTERNAL_SERVER_ERROR,
      msg: "something happend please try again later",
    };
    console.error(error);
    res.status(result.code).send(result);
  }
};

const CreateTask = (req, res) => {
  try {
    const task = req.body;
    const result = tasksService.createTask(task);
    res.status(result.code).send(result);
  } catch (error) {
    const result = {
      code: httpStatus.INTERNAL_SERVER_ERROR,
      msg: "something happend please try again later",
    };
    console.error(error);
    res.status(result.code).send(result);
  }
};

const UpdateTask = (req, res) => {
  try {
    const id = +req.params.taskId;
    const newTask = req.body.task;
    const result = tasksService.updateTask(id, newTask);
    res.status(result.code).send(result);
  } catch (error) {
    const result = {
      code: httpStatus.INTERNAL_SERVER_ERROR,
      msg: "something happend please try again later",
    };
    console.error(error);
    res.status(result.code).send(result);
  }
};

const DeleteTask = (req, res) => {
  try {
    const id = +req.params.taskId;
    const result = tasksService.deleteTask(id);
    res.status(result.code).send(result);
  } catch (error) {
    const result = {
      code: httpStatus.INTERNAL_SERVER_ERROR,
      msg: "something happend please try again later",
    };
    console.error(error);
    res.status(result.code).send(result);
  }
};

module.exports = {
  GetAllTasks,
  GetTask,
  CreateTask,
  DeleteTask,
  UpdateTask,
};
