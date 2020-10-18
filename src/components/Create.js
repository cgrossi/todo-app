import React from 'react';

const Create = ({ handleSubmit }) => {

  return (
    <form className="container" onSubmit={handleSubmit}>
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
      <button type="submit" className="btn btn-primary">Submit</button>
    </form>
  )
}

export default Create