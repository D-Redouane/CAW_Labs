import React from 'react';

const SubTaskItem = ({ subtask, index, selectedSubTasks, toggleSubTaskSelection, deleteSubTask,subtaskname }) => {
  console.log(subtask)
  return (
    <div key={index} className='flexdiv'>
      <div className={`task-item ${selectedSubTasks.includes(index) ? 'selected' : ''}`}>
        <input
          type="checkbox"
          onChange={() => toggleSubTaskSelection(index)}
          checked={selectedSubTasks.includes(index)}
          className='checkbox-input'
        />
        <div className="task-link">{subtaskname}</div>
        <button onClick={() => deleteSubTask(index)}>Delete</button>
      </div>
    </div>
  );
};

export default SubTaskItem;
