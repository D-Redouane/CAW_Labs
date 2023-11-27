import React from 'react';
import { Link } from 'react-router-dom';

const TaskItem = ({ task, index, selectedTasks, toggleTaskSelection, deleteTask }) => {

  const handleClick = () => {
    // Redirect to the Task component with the corresponding index
//     history.push(`/TaskList/${index}`);
  };

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
        <button onClick={() => deleteTask(index)}>Delete</button>
      </div>
    </div>
  );
};

export default TaskItem;
