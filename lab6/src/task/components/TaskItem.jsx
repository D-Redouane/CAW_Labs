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
          <div className={`task-link ${task.done ? 'subtask-done' : ''}`}>
            {task.alldone ? 

              <del>
                {task.name}
                <br />
                {task.description?
                  <h6 style={{fontSize: '12px',color: 'gray',maring:'0', padding:'0'}}>{task.description}</h6>
                :null}
              </del>

            :

              <div>
                <b>{task.name}</b>
                {task.description?
                  <h6 style={{fontSize: '12px',color: 'gray',maring:'0', padding:'0'}}>{task.description}</h6>
                :null}
              </div>
            
            }
          </div>
        </Link>

        {task.alldone ? null : (
          <>
            <button onClick={() => toggleTaskDone(index)}>done?</button>
          </>
        )}

        <button onClick={() => deleteTask(index)}>Delete 🗑</button>

        {task.alldone ? (
          task.description?
          <>
            <span style={{
              position: 'absolute',
              bottom: '82%',
              left: '102%',
              color: 'green',
              transform: 'translateX(-100%)',
              fontSize: '30px',
              padding: '0.2rem 0.5rem',  // Adjust padding as needed
              borderRadius: '0.25rem',  // Adjust border-radius as needed
            }}>✔</span>
          </>
          :
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
