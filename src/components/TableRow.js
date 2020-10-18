import React from 'react';

const TableRow = ({ task }) => {
  return (
  <tr>
    <th scope="row">{task.id}</th>
    <td>{task.content}</td>
    <td>{task.important ? "Yes" : "Not really"}</td>
    <td><button>Edit</button><button>Delete</button></td>
  </tr>
  )
}

export default TableRow