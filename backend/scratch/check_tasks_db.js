const Task = require('../models/Task');
const sequelize = require('../config/db');

async function checkTasks() {
  try {
    const tasks = await Task.findAll();
    console.log('Total tasks in DB:', tasks.length);
    tasks.forEach(t => {
      console.log(`ID: ${t.id}, Title: ${t.title}, Date: ${t.date}, Time: ${t.time}, UserID: ${t.userId}`);
    });
    process.exit(0);
  } catch (err) {
    console.error(err);
    process.exit(1);
  }
}

checkTasks();
