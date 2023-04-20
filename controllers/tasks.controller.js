const { getAllTasks } = require('../services/tasks.service')

const GetAllTasks = (req, res) => {
  const tasks = getAllTasks()
  res.send(tasks)
};

module.exports = {
  GetAllTasks
};
