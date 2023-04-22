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
  let errors = [];
  const idErrors = taskValidator.validateId(id);
  if (!idErrors.length) {
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
    errors = [...errors, ...idErrors];
  }

  return {
    code: httpStatus.BAD_REQUEST,
    errors: errors,
    msg: "inavlid request",
  };
};

const updateTask = (id, newTask) => {
  let errors = [];
  const idErrors = taskValidator.validateId(id);
  const taskErros = taskValidator.valdiateTask(newTask);
  if (!idErrors.length && !taskErros.length) {
    let updatingTask;
    const newTasks = data.tasks.map((task) => {
      if (task.id === id) {
        task = {
          id: task.id,
          title: newTask.title,
          description: newTask.description,
          completed: newTask.completed,
        };
        updatingTask = task;
      }
      return task;
    });
    if (!updatingTask) {
      return {
        code: httpStatus.NOT_FOUND,
        msg: "task not found",
      };
    } else {
      data.tasks = newTasks;
      return {
        code: httpStatus.OK,
        msg: "successfully updated task",
        data: updatingTask,
      };
    }
  } else {
    errors = [...errors, ...idErrors, ...taskErros];
  }

  return {
    code: httpStatus.BAD_REQUEST,
    errors: errors,
    msg: "inavlid request",
  };
};

const deleteTask = (id) => {
  let errors = [];
  const idErrors = taskValidator.validateId(id);
  if (!idErrors.length) {
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
    errors = [...errors, ...idErrors];
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
  updateTask,
  deleteTask,
};
