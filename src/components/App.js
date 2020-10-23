import React, { useState, useEffect } from 'react';
import taskService from '../services/taskService';

import Header from './Header'
import Table from './Table'
import Create from './Create'

const App = () => {
  const [tasks, setTasks] = useState([])

  const handleSubmitTask = (e) => {
    e.preventDefault();

    const task = {
      content: e.target.newTask.value,
      important: e.target.isImportant.checked
    }

    taskService
      .create(task)
      .then(returnedTask => setTasks([...tasks, returnedTask]))
  }

  useEffect(() => {
    taskService
      .fetchTasks()
      .then(tasks => setTasks(tasks))
  }, [])

  const handleEditTaskSave = (id, updatedTask, cb) => {
    taskService
      .update(id, updatedTask)
      .then(returnedTask => setTasks(tasks.map(task => task.id !== id ? task : returnedTask)))
      .then(() => cb())
  }

  const handleDeleteTask = (id) => {
    taskService
      .remove(id)
      .then(() => setTasks(tasks.filter(task => task.id !== id)))
  }

  return (
    <div>
      <Header />
      <Table tasks={tasks} handleEditTaskSave={handleEditTaskSave} handleDeleteTask={handleDeleteTask} />
      <Create handleSubmit={handleSubmitTask} />
    </div>
  )
}

export default App