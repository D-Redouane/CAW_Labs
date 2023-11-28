// Task.js
import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import SubTaskItem from './components/SubTaskItem';
import GoBackButton from '../components/GoBackButton';
import NewSubTaskForm from './components/NewSubTaskForm';

function Task({ onDelete }) {
  const { id } = useParams(); // Get the id parameter from the route
  const [tasks, setTasks] = useState([]);
  const [subtaskText, setSubtaskText] = useState('');
  const [selectedSubTasks, setSelectedSubTasks] = useState([]);

  // const addTask = (newTask) => {
  //   const newTaskObject = {
  //     id: tasks.length + 1, // Assign a new unique id
  //     name: newTask,
  //     alldone: false,
  //     sub: [],
  //   };

  //   setTasks([...tasks, newTaskObject]);
  // };

  const addSubtask = (subtaskText) => {
    const updatedTasks = tasks.map(task => {
      if (task.id.toString() === id) {
        return {
          ...task,
          sub: [...task.sub, { name: subtaskText, done: false }],
        };
      }
      return task;
    });

    setTasks(updatedTasks);
  };

  const deleteSubtask = (index) => {
    const updatedTasks = tasks.map(task => {
      if (task.id.toString() === id) {
        const updatedSubtasks = task.sub.filter((_, i) => i !== index);
        return {
          ...task,
          sub: updatedSubtasks,
        };
      }
      return task;
    });

    setTasks(updatedTasks);
  };

  useEffect(() => {
    // Load tasks from localStorage on component mount
    const storedTasks = JSON.parse(localStorage.getItem('tasks')) || [];
    setTasks(storedTasks);
  }, []);

  useEffect(() => {
    // Save tasks to localStorage whenever tasks change
    localStorage.setItem('tasks', JSON.stringify(tasks));
  }, [tasks]);

  const toggleSubTaskSelection = (index) => {
    const updatedSelectedSubTasks = [...selectedSubTasks];
    const indexOfSubTask = updatedSelectedSubTasks.indexOf(index);
  
    if (indexOfSubTask !== -1) {
      updatedSelectedSubTasks.splice(indexOfSubTask, 1);
    } else {
      updatedSelectedSubTasks.push(index);
    }
  
    setSelectedSubTasks(updatedSelectedSubTasks);
  };
  
  const deleteSelectedSubTasks = () => {
    const updatedTasks = tasks.map((task) => {
      if (task.id.toString() === id) {
        const updatedSubtasks = task.sub.filter((_, index) => !selectedSubTasks.includes(index));
        return {
          ...task,
          sub: updatedSubtasks,
        };
      }
      return task;
    });
  
    setTasks(updatedTasks);
    setSelectedSubTasks([]);
  };
  
  const deleteAllSubTasks = () => {
    const updatedTasks = tasks.map((task) => {
      if (task.id.toString() === id) {
        return {
          ...task,
          sub: [],
        };
      }
      return task;
    });
  
    setTasks(updatedTasks);
    setSelectedSubTasks([]);
  };

  return (
    <div className="container">
      <GoBackButton />

      <div>
        <div>
          <h2>{id} - {tasks.map((task) => {
                if (task.id.toString() === id) {
                  return task.name
                }
                return null;
              })}</h2>
        </div>
        <div className='container'>
          <div className="buttons-container">
            <div>
              <h1>SubTask List</h1>
              {tasks.map((task) => {
                if (task.id.toString() === id) {
                  return task.sub.map((subtask, index) => (
                    <SubTaskItem
                      key={index}
                      subtask={subtask}
                      subtaskname={subtask.name}
                      index={index}
                      selectedSubTasks={selectedSubTasks}
                      toggleSubTaskSelection={toggleSubTaskSelection}
                      deleteSubTask={deleteSubtask}
                    />
                  ));
                }
                return null;
              })}
              <button
                onClick={deleteSelectedSubTasks}
                disabled={selectedSubTasks.length === 0}
                className='delete-button'
              >
                Delete {selectedSubTasks.length} {selectedSubTasks.length === 1 ? 'item' : 'items'}
              </button>
              <button
                onClick={deleteAllSubTasks}
                disabled={tasks.length === 0 || tasks.find(task => task.id.toString() === id)?.sub.length === 0}
              >
                Delete All
              </button>
            </div>
          </div>

          <div className='line'></div>

          <div className="counter-container">
            <NewSubTaskForm addSubTask={addSubtask} />
          </div>
        </div>
      </div>
        
    </div>
  );
}

export default Task;
