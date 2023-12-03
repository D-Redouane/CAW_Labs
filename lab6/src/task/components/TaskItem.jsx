import React from 'react';
import { Link } from 'react-router-dom';

const TaskItem = ({ task, index, selectedTasks, toggleTaskSelection,toggleTaskDone, deleteTask }) => {
  return (
    <div key={index} className={`flexdiv ${selectedTasks.alldone ? 'done' : ''}`} style={{position: 'relative'}}>
      <div className={`task-item ${selectedTasks.includes(index) ? 'selected' : ''} ${selectedTasks.alldone ? 'done' : ''}`}>
        <>
          <input
            type="checkbox"
            onChange={() => toggleTaskSelection(index)}
            checked={selectedTasks.includes(index)}
            className='checkbox-input'
          />
        </>

        {console.log(task)}
        <Link to={`/TaskList/${task.id}`} className="task-link">
          <div className={`task-link ${task.alldone ? 'subtask-done' : ''}`}>
            {task.alldone ? <del>{task.name}</del> : task.name}
          </div>
        </Link>

        {task.alldone ? null : (
          <>
            <button onClick={() => toggleTaskDone(index)}>done?</button>
          </>
        )}

        <button onClick={() => deleteTask(index)}>Delete 🗑</button>

        {task.alldone ? (
          <>
            <span style={{
              position: 'absolute',
              bottom: '64%',
              left: '102%',
              color: 'green',
              transform: 'translateX(-100%)',
              fontSize: '30px',
              padding: '0.2rem 0.5rem',  // Adjust padding as needed
              borderRadius: '0.25rem',  // Adjust border-radius as needed
            }}>✔</span>
          </>
        ) : null}
      </div>
    </div>
  );
};

export default TaskItem;
