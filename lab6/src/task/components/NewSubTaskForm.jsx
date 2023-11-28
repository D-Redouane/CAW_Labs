// NewSubTaskForm.js
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

function NewSubTaskForm({ addSubTask }) {
  const [subtaskText, setSubtaskText] = useState('');
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    addSubTask(subtaskText);
    setSubtaskText('');
    // navigate('/TaskList/:id');
  };

  const handleChange = (e) => {
    setSubtaskText(e.target.value);
  };

  return (
    <form onSubmit={handleSubmit}>
      <label>
        New Sub Task 👇
      </label>
      <br />
      <input type="text" value={subtaskText} onChange={handleChange} />
      <br />
      <br />
      <button type="submit">Add Sub Task</button>
    </form>
  );
}

export default NewSubTaskForm;
