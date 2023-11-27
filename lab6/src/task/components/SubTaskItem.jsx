import React from 'react';
import { Link } from 'react-router-dom';

const SubTaskItem = ({ task, index, selectedTasks, toggleTaskSelection, deleteTask }) => {

  return (
    <div key={index} className='flexdiv'>
      <div className={`task-item ${selectedTasks.includes(index) ? 'selected' : ''}`}>
        <input
          type="checkbox"
          onChange={() => toggleTaskSelection(index)}
          checked={selectedTasks.includes(index)}
          className='checkbox-input'
        />
        <Link to={`/TaskList/${index}`} className="task-link">
          {task}
        </Link>
        <button onClick={handleClick}>View Details</button>
        <button onClick={() => deleteTask(index)}>Delete</button>
      </div>
    </div>
  );
};

export default SubTaskItem;
