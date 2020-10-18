import React from 'react';

import TableRow from './TableRow'

const Table = ({ tasks }) => {

  return (
  <table className="table table-striped table-bordered table-hover table-dark container">
    <thead>
      <tr>
        <th style={{width: "8%"}}>ID</th>
        <th style={{width: "64%"}}>Task</th>
        <th style={{width: "13%"}}>Important?</th>
        <th style={{width: "15%"}}>Edit / Delete</th>
      </tr>
    </thead>
    <tbody>
    {tasks.map(task => <TableRow key={task.id} task={task} />)}
    </tbody>
  </table>
  )
}

export default Table