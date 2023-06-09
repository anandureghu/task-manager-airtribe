const httpStatus = require("http-status");

const data = require("../utils/data");
const utils = require("../utils/utils");
const taskValidator = require("../validations/tasks.validation");

const getAllTasks = (params) => {
  let tasks = data.tasks;
  tasks = tasks.slice(params.offset, params.offset + params.limit);

  if (params.status) {
    tasks = tasks.filter((task) => task.completed == utils.getBooleanValue(params.status));
  }

  if (params.sortBy) {
    tasks.sort((a, b) => {
      if (params.sortBy === "createdAt") {
        return new Date(a.createdAt) - new Date(b.createdAt);
      } else {
        if (a[params.sortBy] < b[params.sortBy]) {
          return -1;
        }
        if (a[params.sortBy] > b[params.sortBy]) {
          return 1;
        }
        return 0;
      }
    });

    if (params.sortOrder === "desc") {
      tasks.reverse();
    }
  }

  return {
    code: httpStatus.OK,
    msg: "successfully fetched tasks",
    data: tasks,
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

const createTask = (task) => {
  let errors = [];
  const taskErros = taskValidator.valdiateTask(task);
  if (!taskErros.length) {
    data.id = data.id + 1;
    const newTask = {
      id: data.id,
      title: task.title,
      description: task.description,
      completed: task.completed ? task.completed : false,
      createdAt: new Date(),
    };
    data.tasks.push(newTask);
    return {
      code: httpStatus.CREATED,
      msg: "successfully created task",
      data: newTask,
    };
  } else {
    errors = [...errors, ...taskErros];
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
          ...task,
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
  createTask,
};
