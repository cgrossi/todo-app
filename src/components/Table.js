import React from 'react';

import TableRow from './TableRow'

const Table = ({ tasks, handleEditTaskSave }) => {

  return (
  <table className="table table-striped table-bordered table-hover table-dark container">
    <thead>
      <tr>
        <th style={{width: "8%"}}>ID</th>
        <th style={{width: "59%"}}>Task</th>
        <th style={{width: "13%"}}>Important?</th>
        <th style={{width: "20%"}}>Edit / Delete</th>
      </tr>
    </thead>
    <tbody>
    {tasks.map(task => <TableRow key={task.id} task={task} handleEditTaskSave={handleEditTaskSave} />)}
    </tbody>
  </table>
  )
}

export default Table