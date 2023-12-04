import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const NewTaskForm=({ addTask })=> {
  const [taskText, setTaskText] = useState('');
  const [taskDescription, setTaskDescription] = useState('');
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    addTask(taskText,taskDescription);
    setTaskText('');
    setTaskDescription('');
    navigate('/TaskList');
  };

  const handleChangetext = (e) => {
    setTaskText(e.target.value);
  };

  const handleChangedescription = (e) => {
    setTaskDescription(e.target.value);
  };

  return (
    <form onSubmit={handleSubmit}>
      <h2>Add New Task Form 👇</h2>
      <br />
      <label>
        Text :
      </label>
      <br />
      <input type="text" value={taskText} onChange={handleChangetext} required/>
      <br />
      <br />
      <label>
        description :
      </label>
      <br />
      <input type="text" value={taskDescription} onChange={handleChangedescription} />
      <br />
      <br />
      <button type="submit">Add Task</button>
    </form>
  );
}

export default NewTaskForm;
