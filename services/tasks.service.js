const httpStatus = require("http-status");

const data = require("../utils/data");
const taskValidator = require("../validations/tasks.validation");

const getAllTasks = () => {
  return {
    code: httpStatus.OK,
    msg: "successfully fetched tasks",
    data: data.tasks,
  };
};

const getTask = (id) => {
  const errors = [];
  const error = taskValidator.validateId(id);
  if (!error) {
    const task = data.tasks.find((task) => task.id == id);
    if (!task) {
      return {
        code: httpStatus.NOT_FOUND,
        msg: "task not found",
      };
    } else {
      return {
        code: httpStatus.OK,
        msg: "successfully fetched task",
        data: task,
      };
    }
  } else {
    errors.push(error);
  }

  return {
    code: httpStatus.BAD_REQUEST,
    errors: errors,
    msg: "inavlid request",
  };
};

const deleteTask = (id) => {
  const errors = [];
  const error = taskValidator.validateId(id);
  if (!error) {
    const newTasks = data.tasks.filter((task) => task.id !== id);
    if (data.tasks.length === newTasks.length) {
      return {
        code: httpStatus.NOT_FOUND,
        msg: "task not found",
      };
    } else {
      data.tasks = newTasks;
      return {
        code: httpStatus.OK,
        msg: "successfully deleted task",
        data: newTasks,
      };
    }
  } else {
    errors.push(error);
  }

  return {
    code: httpStatus.BAD_REQUEST,
    errors: errors,
    msg: "inavlid request",
  };
};

module.exports = {
  getAllTasks,
  getTask,
  deleteTask,
};
