const express = require('express');
const fs = require('fs');
const path = require('path');
const { v4: uuidv4 } = require('uuid');

const router = express.Router();
const dataPath = path.join(__dirname, 'data', 'tasks.json');

const readTasks = () => {
  const jsonData = fs.readFileSync(dataPath);
  return JSON.parse(jsonData);
};

const writeTasks = (tasks) => {
  fs.writeFileSync(dataPath, JSON.stringify(tasks, null, 2));
};

router.get('/', (req, res) => {
  const tasks = readTasks();
  // res.sendStatus(404);
  res.json(tasks);
});

router.post('/', (req, res) => {
  const { name, description } = req.body;
  const tasks = readTasks();
  const newTask = {
    id: uuidv4(),
    name,
    description,
    created: new Date().toISOString(),
  };
  tasks.push(newTask);
  writeTasks(tasks);
  res.status(201).json(newTask);
});

router.delete('/:id', (req, res) => {
  let tasks = readTasks();
  const taskIndex = tasks.findIndex((t) => t.id === req.params.id);

  if (taskIndex !== -1) {
    tasks.splice(taskIndex, 1);
    writeTasks(tasks);
    res.status(204).send();
  } else {
    res.status(404).send('Task not found');
  }
});

module.exports = router;
