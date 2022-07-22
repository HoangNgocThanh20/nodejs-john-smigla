const getAllTasks = (req, res) => {
  res.send("Get all tasks");
};

const addNewTask = (req, res) => {
  res.send("Add new task");
};

const getSingleTask = (req, res) => {
  res.send("Get single tasks");
};

const updateTask = (req, res) => {
  res.send("Update task");
};

const deleteTask = (req, res) => {
  res.send("Delete task");
};

module.exports = {
  getAllTasks,
  addNewTask,
  getSingleTask,
  updateTask,
  deleteTask,
};
