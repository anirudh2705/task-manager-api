const Task = require("../models/taskModel");
const asyncWarper = require("../middleware/asyncWarper");
const {customError} = require('../errors/customError')

const getAllTasks = asyncWarper(async (req, res) => {
  const task = await Task.find({});
  res.status(200).json({
    status: "success",
    results: task.length,
    data: {
      task,
    },
  });
});

const createTask = asyncWarper(async (req, res) => {
  const task = await Task.create(req.body);
  res.status(201).json({
    task,
  });
});

const getSingleTask = asyncWarper(async (req, res, next) => {
  const { id: taskId } = req.params;
  const task = await Task.findOne({ _id: taskId });
  if (!task) {
    return next (customError(`requested ${taskId} doesn't exist`, 404) )
    
  }
  res.status(200).json({
    status: "success",
    data: {
      task,
    },
  });
});

const updateTask = asyncWarper(async (req, res) => {
  const { id: taskId } = req.params;
  const task = await Task.findOneAndUpdate({ _id: taskId }, req.body, {
    new: true, // returns new updated patch
    runValidators: true, // doesnt accepts empty string or null
  });
  if (!task) {
    return next (customError(`requested ${taskId} doesn't exist`, 404) )
  }
  res.status(200).json({
    status: "success",
    data: {
      task,
    },
  });
});

const deleteTask = asyncWarper(async (req, res) => {
  const { id: taskId } = req.params;
  const task = await Task.findOneAndDelete({ _id: taskId });

  if (!task) {
    return next (customError(`requested ${taskId} doesn't exist`, 404) )
  }

  res.status(200).json({
    status: "success",
    task,
  });
});

module.exports = {
  getAllTasks,
  createTask,
  getSingleTask,
  updateTask,
  deleteTask,
};
