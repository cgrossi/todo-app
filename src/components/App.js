import React, { useState, useEffect } from 'react';
import axios from 'axios'

import Header from './Header'
import Table from './Table'
import Create from './Create'

const App = () => {
  const [tasks, setTasks] = useState([])

  const handleSubmitTask = (e) => {
    e.preventDefault();

    const task = {
      id: Math.floor(Math.random() * 100000),
      content: e.target.newTask.value,
      important: e.target.isImportant.checked
    }

    setTasks([...tasks, task])
  }

  useEffect(() => {
    axios.get('http://localhost:3001/tasks')
      .then(response => response.data)
      .then(tasks => {
        setTasks(tasks)
      })
  }, [])


  return (
    <div>
      <Header />
      <Table tasks={tasks} />
      <Create handleSubmit={handleSubmitTask} />
    </div>
  )
}

export default App