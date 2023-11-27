// Task.js
import React, { useState } from 'react';
import SubTaskItem from './components/SubTaskItem';

function Task({ task, onDelete }) {
  const [subtasks, setSubtasks] = useState([]);
  const [subtaskText, setSubtaskText] = useState('');

  const addSubtask = () => {
    setSubtasks([...subtasks, subtaskText]);
    setSubtaskText('');
  };

  const deleteSubtask = (index) => {
    const updatedSubtasks = subtasks.filter((_, i) => i !== index);
    setSubtasks(updatedSubtasks);
  };

  return (
    <div>
      <div>{task}</div>
      <button onClick={onDelete}>Delete</button>
      
      <div>
        {subtasks.map((subtask, index) => (
          <div key={index}>
            <span>{subtask}</span>
            <button onClick={() => deleteSubtask(index)}>Delete Subtask</button>
          </div>
        ))}
      </div>

      <input
        type="text"
        value={subtaskText}
        onChange={(e) => setSubtaskText(e.target.value)}
      />
      <button onClick={addSubtask}>Add Subtask</button>
      <button onClick={() => console.log('Mark task as done')}>Done</button>
    </div>
  );
}

export default Task;