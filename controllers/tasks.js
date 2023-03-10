const { findOneAndUpdate } = require("../models/task");
const Task = require("../models/task");

const getAllTasks = async (req, res) => {
  // res.send("all items from the file");
  try {
    const tasks = await Task.find({});
    res.status(200).json({ tasks });
  } catch (error) {
    //sends back the error message
    res.status(500).json({ msg: error });
    // console.log(error);
  }
};

// using asynchrounous for creating tasks
const createTask = async (req, res) => {
  // res.json(req.body);
  // using try and catch for error handling
  try {
    const task = await Task.create(req.body);
    res.status(201).json({ task });
  } catch (error) {
    //sends back the error message
    res.status(500).json({ msg: error });
    // console.log(error);
  }
};

const getTask = async (req, res) => {
  // res.json({ id: req.params.id });
  try {
    const { id: taskID } = req.params;
    const task = await Task.findOne({ _id: taskID });

    if (!task) {
      return res.status(404).json({ msg: `No Task with id :${taskID} ` });
    }

    res.status(201).json({ task });
  } catch (error) {
    //sends back the error message
    res.status(500).json({ msg: error });
    // console.log(error);
  }
};
//

const deleteTask = async (req, res) => {
  try {
    const { id: taskID } = req.params;
    const task = await Task.findOneAndDelete({ _id: taskID });
    if (!task) {
      return res.status(404).json({ msg: `No Task with id ${taskID}` });
    }
    res.status(201).json({ task: null, status: `success` });
  } catch (error) {
    res.status(500).json({ msg: error });
  }
  // res.send("Delete Task");
};

// Update Task//

const updateTask = async (req, res) => {
  try {
    const { id: taskId } = req.params;
    const task = await Task.findOneAndUpdate({ _id: taskId }, req.body, {
      new: true,
      runValidators: true,
    });

    if (!task) {
      return res.status(404).json({ msg: `No Task with id ${taskId}` });
    }

    res.status(200).json({ task });
  } catch (error) {
    res.status(500).json({ msg: error });
  }
  // res.send("Update Task");
};

//

module.exports = {
  getAllTasks,
  createTask,
  getTask,
  updateTask,
  deleteTask,
};
