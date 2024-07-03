const Task = require("../models/taskModel");

const getAllTasks = async (req, res) => {
  try {
    const task = await Task.find({});
    res.status(200).json({
      status: "success",
      results: task.length,
      data: {
        task,
      },
    });
  } catch (error) {
    res.status(500).json({
      status: "fail",
    });
  }
};

const createTask = async (req, res) => {
  try {
    const task = await Task.create(req.body);
    res.status(201).json({
      task,
    });
  } catch (error) {
    res.status(500).json({
      status: "fail",
    });
  }
};

const getSingleTask = async (req, res) => {
  try {
    const { id: taskId } = req.params;
    const task = await Task.findOne({ _id: taskId });
    if (!task) {
      return res.status(404).json({
        status: "fail",
        message: `requested ${taskId} doesn't exist`,
      });
    }
    res.status(200).json({
      status: "success",
      data: {
        task,
      },
    });
  } catch (error) {
    res.status(500).json({
      status: "fail",
    });
  }
};

const updateTask = async (req, res) => {
  try {
    const {id: taskId} = req.params
    const task = await Task.findOneAndUpdate({_id: taskId}, req.body, {
        new: true, // returns new updated patch
        runValidators: true, // doesnt accepts empty string or null
    })
    if (!task) {
        return res.status(404).json({
          status: "fail",
          message: `requested ${taskId} doesn't exist`,
        });
      }
    res.status(200).json({
      status: "success",
      data: {
        task
      },
    });
  } catch (error) {
    res.status(500).json({
        status: "fail",
      });
  }
};

const deleteTask = async (req, res) => {
  try {
    const { id: taskId } = req.params;
    const task = await Task.findOneAndDelete({ _id: taskId });

    if (!task) {
      return res.status(404).json({
        status: "fail",
        message: `no task with id ${taskId} `,
      });
    }

    res.status(200).json({
      status: "success",
      task,
    });
  } catch (error) {
    res.status(500).json({
      status: "fail",
    });
  }
};

module.exports = {
  getAllTasks,
  createTask,
  getSingleTask,
  updateTask,
  deleteTask,
};
