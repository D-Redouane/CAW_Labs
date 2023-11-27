import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import NewTaskForm from './components/NewTaskForm';
import GoBackButton from '../components/GoBackButton';
import TaskItem from './components/TaskItem';

function TaskList() {
  const [tasks, setTasks] = useState([]);
  const [selectedTasks, setSelectedTasks] = useState([]);
  const navigate = useNavigate();

  const addTask = (task) => {
    if (task.trim() !== '') {
      setTasks([...tasks, task]);
    }
  };

  const deleteTask = (index) => {
    const updatedTasks = tasks.filter((_, i) => i !== index);
    setTasks(updatedTasks);
  };

  const toggleTaskSelection = (index) => {
    if (selectedTasks.includes(index)) {
      setSelectedTasks(selectedTasks.filter((selectedIndex) => selectedIndex !== index));
    } else {
      setSelectedTasks([...selectedTasks, index]);
    }
  };

  const deleteSelectedTasks = () => {
    const updatedTasks = tasks.filter((_, index) => !selectedTasks.includes(index));
    setTasks(updatedTasks);
    setSelectedTasks([]);
  };

  const deleteAllTasks = () => {
    setTasks([]);
    setSelectedTasks([]);
  };

  return (
    <div className="container">
      <GoBackButton />

      <div className="buttons-container">
        <div>
          <h1>Task List</h1>
          {tasks.map((task, index) => (
            <TaskItem
              key={index}
              task={task}
              index={index}
              selectedTasks={selectedTasks}
              toggleTaskSelection={toggleTaskSelection}
              deleteTask={deleteTask}
            />
          ))}
          <button
            onClick={deleteSelectedTasks}
            disabled={selectedTasks.length === 0}
            className='delete-button'
          >
            Delete Selected
          </button>
          <button
            onClick={deleteAllTasks}
            disabled={tasks.length === 0}
          >
            Delete All
          </button>
        </div>
      </div>

      <div className='line'></div>

      <div className="counter-container">
        <NewTaskForm addTask={addTask} />
      </div>
    </div>
  );
}

export default TaskList;
