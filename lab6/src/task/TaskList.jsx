import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import NewTaskForm from './components/NewTaskForm';
import GoBackButton from '../components/GoBackButton';
import TaskItem from './components/TaskItem';

function TaskList() {
  const [tasks, setTasks] = useState([
    {
      id: 1,
      name: 'task1',
      description:'description1',
      alldone: false,
      sub: [
        {
          name: 'subtask1 of task1',
          description:'description1',
          done: true,
        },
        {
          name: 'subtask2 of task1',
          description:'description1',
          done: false,
        },
      ],
    },
    {
      id: 2,
      name: 'task2',
      description:'description1',
      alldone: true,
      sub: [
        {
          name: 'subtask1 of task2',
          description:'description1',
          done: true,
        },
        {
          name: 'subtask2 of task2',
          description:'description1',
          done: true,
        },
      ],
    },
  ]);
  const [selectedTasks, setSelectedTasks] = useState([]);
  const [selectAll, setSelectAll] = useState(false);
  // const navigate = useNavigate();

  // Load tasks from localStorage on component mount
  useEffect(() => {
    const storedTasks = JSON.parse(localStorage.getItem('tasks')) || [];
    setTasks(storedTasks);
  }, []);

  // Save tasks to localStorage whenever tasks change
  useEffect(() => {
    localStorage.setItem('tasks', JSON.stringify(tasks));
  }, [tasks]);

  const addTask = (name,description) => {
    if(name==null || name==''){
      // return null
    }
    else{
      const newTaskObject = {
        id: tasks.length + 1, // Assign a new unique id
        name: name,
        description:description,
        alldone: false,
        sub: [],
      };
  
      setTasks([...tasks, newTaskObject]);
    }
  };

  // const deleteTask = (taskId) => {
  //   const updatedTasks = tasks.filter((task) => task.id !== taskId);
  //   setTasks(updatedTasks);
  // };

  const deleteTask = (index) => {
    const updatedTasks = tasks.filter((_, i) => i !== index);
    setTasks(updatedTasks);
  };

  const toggleTaskSelection = (index) => {
    if (selectAll) {
      // If selectAll is true, toggle individual task
      if (selectedTasks.includes(index)) {
        setSelectedTasks(selectedTasks.filter((selectedIndex) => selectedIndex !== index));
      } else {
        setSelectedTasks([...selectedTasks, index]);
      }
    } else {
      // If selectAll is false, toggle individual task
      if (selectedTasks.includes(index)) {
        setSelectedTasks(selectedTasks.filter((selectedIndex) => selectedIndex !== index));
      } else {
        setSelectedTasks([...selectedTasks, index]);
      }
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

  const toggleTaskDone = (taskIndex) => {
    const updatedTasks = tasks.map((task, index) => {
      if (index === taskIndex) {
        const updatedTask = { ...task, alldone: !task.alldone };
        if (updatedTask.alldone) {
          const updatedSubtasks = updatedTask.sub.map((subtask) => ({
            ...subtask,
            done: true,
          }));
  
          updatedTask.sub = updatedSubtasks;
        }
        return updatedTask;
      }
  
      return task;
    });
    setTasks(updatedTasks);
  };

  const toggleSelectAll = () => {
    setSelectAll((prevSelectAll) => {
      if (!prevSelectAll) {
        setSelectedTasks([...Array(tasks.length).keys()]);
      } else {
        setSelectedTasks([]);
      }
      return !prevSelectAll;
    });
  };

  return (
    <div className="container">
      <GoBackButton />

      <div className="buttons-container">
        <div>
          <h2>Task List</h2>
          {tasks.map((task, index) => (
            <TaskItem
              key={index}
              task={task}
              index={index}
              selectedTasks={selectedTasks}
              toggleTaskSelection={toggleTaskSelection}
              deleteTask={deleteTask}
              toggleTaskDone={toggleTaskDone}
            />
            
          ))}

          <button 
            checked={selectAll}
            onClick={toggleSelectAll}
            className='delete-button'
            disabled={tasks.length === 0}
          >
            {selectedTasks.length===0 ? 'Select All' : 'Unselect All'}
          </button>
          <button
            onClick={deleteSelectedTasks}
            disabled={selectedTasks.length === 0}
            className='delete-button'
          >
            Delete {selectedTasks.length} {selectedTasks.length === 1 ? 'item' : 'items'}
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
