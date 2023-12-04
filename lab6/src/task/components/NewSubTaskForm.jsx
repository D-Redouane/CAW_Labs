import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const NewSubTaskForm=({ addSubTask ,alldone})=> {
  const [subtaskText, setSubtaskText] = useState('');
  const [subtaskDescription, setSubtaskDescription] = useState('');


  const handleSubmit = (e) => {
    e.preventDefault();
    addSubTask(subtaskText,subtaskDescription);
    setSubtaskText('');
    setSubtaskDescription('');
  };

  const handleChangeText = (e) => {
    setSubtaskText(e.target.value);
  };

  const handleChangedescription = (e) => {
    setSubtaskDescription(e.target.value);
  };

  return (

    <form onSubmit={handleSubmit}>
      <h2>Add New Sub Task Form 👇</h2>
      <br />
      <label>
        Text :
      </label>
      <br />
      <input type="text" 
        value={subtaskText} 
        onChange={handleChangeText}
        disabled={alldone}
        required
      />
      <br />
      <br />
      <label>
        description :
      </label>
      <br />
      <input type="text" 
        value={subtaskDescription} 
        onChange={handleChangedescription}
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
