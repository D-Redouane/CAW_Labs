import React from 'react';
import { Link } from 'react-router-dom';

const TaskItem = ({ task, index, selectedTasks, toggleTaskSelection, deleteTask }) => {
  return (
    <div key={index} className='flexdiv'>
      <div className={`task-item ${selectedTasks.includes(index) ? 'selected' : ''}`}>
        <input
          type="checkbox"
          onChange={() => toggleTaskSelection(index)}
          checked={selectedTasks.includes(index)}
          className='checkbox-input'
        />
        {/* Use Link to redirect to Task component with corresponding index */}
        <Link to={`/TaskList/${task.id}`} className="task-link">
          {task.name}
        </Link>
        <button onClick={() => deleteTask(index)}>Delete</button>
      </div>
    </div>
  );
};

export default TaskItem;
