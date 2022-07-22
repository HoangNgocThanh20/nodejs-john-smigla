const express = require("express");
const router = express.Router();
const {
  getAllTasks,
  addNewTask,
  getSingleTask,
  updateTask,
  deleteTask,
  editTask,
} = require("../controllers/tasks");

router.route("/").get(getAllTasks).post(addNewTask);

router
  .route("/:id")
  .get(getSingleTask)
  .patch(updateTask)
  .delete(deleteTask)
  .put(editTask);

module.exports = router;
