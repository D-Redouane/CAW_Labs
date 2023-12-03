import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const NewSubTaskForm=({ addSubTask ,alldone})=> {
  const [subtaskText, setSubtaskText] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    addSubTask(subtaskText);
    setSubtaskText('');
  };

  const handleChange = (e) => {
    setSubtaskText(e.target.value);
  };

  return (
    
    <form onSubmit={handleSubmit}>
      <h2>SubTask Add Form</h2>
      <br />
      <label>
        New Sub Task 👇
      </label>
      <br />
      <input type="text" 
        value={subtaskText} 
        onChange={handleChange}
        disabled={alldone}
      />
      <br />
      <br />
      <button type="submit" disabled={alldone}>Add Sub Task</button>
      <br />
      <br />
      {alldone?
        <h6 style={{ color: 'red',fontSize:'10px' }}>You can't add subtasks because the task is done</h6>      
      :null}
    </form>
  );
}

export default NewSubTaskForm;
