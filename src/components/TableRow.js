import React, {useState} from 'react';

const TableRow = ({ task, handleEditTaskSave, handleDeleteTask }) => {
  const [isEdit, setIsEdit] = useState(false);
  const [isImportant, setIsImportant] = useState(task.important);
  const [taskContent, setTaskContent] = useState("");

  const saveAndResetEdit = () => {
    handleEditTaskSave(task.id, {content: taskContent, important: isImportant}, resetEdit)
  }

  const resetEdit = () => {
    setIsEdit(false)
  }

  if(isEdit) {
    return (
      <tr>
        <th cope="row">{task.id}</th>
        <td><div className="form-row"><input className="form-control" placeholder="Enter your new task here. Click save on the right when you are done." value={taskContent} onChange={(e) => setTaskContent(e.target.value)} /></div></td>
        <td>
          <div className="btn-group btn-group-toggle" data-toggle="buttons">
            <label className="btn btn-secondary">
              <input className="form-check-input" type="radio" name="important" value="yes" defaultChecked={isImportant === true} onClick={() => setIsImportant(true)} /> Yes
            </label>
            <label className="btn btn-secondary">
              <input type="radio" name="important" value="no" defaultChecked={isImportant === false} onClick={() => setIsImportant(false)} /> No
            </label>
          </div>
        </td>
        <td><button type="button" className="btn btn-light btn-block" onClick={saveAndResetEdit}>Save</button></td>
      </tr>
    )
  } else {
    return (
    <tr>
      <th scope="row">{task.id}</th>
      <td>{task.content}</td>
      <td>{task.important ? "Yes" : "Not really"}</td>
      <td><button type="button" className="btn btn-light" onClick={() => setIsEdit(!isEdit)}>Edit</button> <button type="button" className="btn btn-light" onClick={() => handleDeleteTask(task.id)}>Delete</button></td>
    </tr>
    )
  }
}

export default TableRow