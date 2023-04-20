const { tasks } = require("../utils/data");

const getAllTasks = () => {
  return tasks;
};

module.exports = {
  getAllTasks,
};
