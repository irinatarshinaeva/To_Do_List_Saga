const Task = require('../models/task.model');

const getTask = async (req, res) => {
  const tasksList = await Task.find();
  res.json(tasksList);
};

const createTask = async (req, res) => {
  const { text } = req.body;
  try {
    if (text.trim()) {
      const newTask = await Task.create({
        text,
      });
      return res.json(newTask);
    }
  } catch (error) {
    return res.sendStatus(418);
  }
};
const changeTask = async (req, res) => {
  const { id } = req.params;
  const currentTask = await Task.findById(id);
  try {
    if (!currentTask.status) {
      await Task.findByIdAndUpdate(id, { status: true });
      return res.json(200);
    } else {
      await Task.findByIdAndUpdate(id, { status: false });
      return res.json(200);
    }
  } catch (error) {
    return res.sendStatus(418);
  }
};

const deleteTask = async (req, res) => {
  const { id } = req.params;
  try {
    await Task.findByIdAndDelete(id);
    return res.json(200);
  } catch (error) {
    return res.sendStatus(418);
  }
};

module.exports = {
  getTask,
  createTask,
  changeTask,
  deleteTask,
};
