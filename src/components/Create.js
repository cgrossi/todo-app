import React, { useState } from 'react';

const Create = ({ handleSubmit }) => {
  const [showForm, setShowForm] = useState(false);

  if(!showForm) {
    return (
      <div className="container">
        <button type="button" className="btn btn-primary mx-auto" style={{width: 500, display: "block"}} onClick={() => setShowForm(true)}>Add a New Task To The List</button>
      </div>
    )
  } else {
    return (
      <form className="container mx-auto" onSubmit={handleSubmit} style={{width: 500}}>
        <div className="form-group">
          <label>Add a new task</label>
          <input type="text" name="newTask" className="form-control" />
          <small className="form-text text-muted">Have something to do? Type it in the box.</small>
  
          <div className="form-check">
            <label className="form-check-label">
            <input name="isImportant" className="form-check-input" type="checkbox" />
              Mark this task as important
            </label>
          </div>
        </div>
        <button type="submit" className="btn btn-primary btn-block">Submit</button>
      </form>
    )
  }
}

export default Create