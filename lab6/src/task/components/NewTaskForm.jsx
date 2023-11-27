// NewTaskForm.js
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

function NewTaskForm({ addTask }) {
  const [taskText, setTaskText] = useState('');
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    addTask(taskText);
    setTaskText('');
    navigate('/TaskList');
  };

  const handleChange = (e) => {
    setTaskText(e.target.value);
  };

  return (
    <form onSubmit={handleSubmit}>
      <label>
        New Task 👇
      </label>
      <br></br>
      <input type="text" value={taskText} onChange={handleChange} />
      <br></br>
      <br></br>
      <button type="submit">Add Task</button>
    </form>
  );
}

export default NewTaskForm;
