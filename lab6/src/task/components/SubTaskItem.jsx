import React from 'react';

const SubTaskItem = ({
  subtask,
  index,
  selectedSubTasks,
  toggleSubTaskSelection,
  toggleSubTaskDone,
  deleteSubTask,
  subtaskname
}) => {
  return (
    <div key={index} className={`flexdiv ${subtask.done ? 'done' : ''}`} style={{position: 'relative'}}>
      <div className={`task-item ${selectedSubTasks.includes(index) ? 'selected' : ''} ${subtask.done ? 'done' : ''}`}>
        <>
          <input
            type="checkbox"
            onChange={() => toggleSubTaskSelection(index)}
            checked={selectedSubTasks.includes(index)}
            className='checkbox-input'
          />
        </>

        <div className={`task-link ${subtask.done ? 'subtask-done' : ''}`}>
          {subtask.done ? 

            <del>
              {subtaskname}
              <br />
              {subtask.description?
                <h6 style={{fontSize: '12px',color: 'gray',maring:'0', padding:'0'}}>{subtask.description}</h6>
              :null}
            </del>

          :

            <div>
              <b>{subtaskname}</b>
              {subtask.description?
                <h6 style={{fontSize: '12px',color: 'gray',maring:'0', padding:'0'}}>{subtask.description}</h6>
              :null}
            </div>
          
          }
        </div>

        {subtask.done ? null : (
          <>
            <button onClick={() => toggleSubTaskDone(index)}>done?</button>
          </>
        )}

        <button onClick={() => deleteSubTask(index)}>Delete 🗑</button>

        {!subtask.done ? null : (
          subtask.description?
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
        )}
      </div>
    </div>
  );
};

export default SubTaskItem;