











// lab6\src\components\GoBackButton.jsx
import React from 'react';
import { useNavigate } from 'react-router-dom';

const GoBackButton = () => {
  const navigate = useNavigate();

  const goBack = () => {
    navigate(-1); // Navigate back one step in the history
  };

  return (
    <div className="go-back-button">
      <button onClick={goBack}>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 19l-7-7 7-7" />
        </svg>
        <h4>Go Back</h4>
      </button>
    </div>
      
  );
};

export default GoBackButton;








// lab6\src\components\ThemeSwitchButton.jsx
import React, { useEffect, useState } from 'react';

function ThemeSwitchButton() {
  const [isDarkMode, setIsDarkMode] = useState(false);

  useEffect(() => {
    applyTheme();
  }, [isDarkMode]);

  const toggleTheme = () => {
    setIsDarkMode((prevMode) => !prevMode);
  };

  const applyTheme = () => {
    document.body.classList.toggle('dark-theme', isDarkMode);
    document.body.classList.toggle('light-theme', !isDarkMode);
  };

  return (
    <div className="theme-switch-container">
      <button className="theme-switch-button" onClick={toggleTheme}>
        <div className={`status-indicator ${isDarkMode ? 'dark' : 'light'}`}>
          {isDarkMode ? 'Dark Mode' : ''}
        </div>
        {isDarkMode ? (
          <svg className="dark-svg" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 256 256">
            <g transform="translate(1.4065934065934016 1.4065934065934016) scale(2.81 2.81)" >
              <rect x="42" y="0" rx="0" ry="0" width="6" height="15.79"  transform=" matrix(1 0 0 1 0 0) "/>
              <rect x="42" y="74.21" rx="0" ry="0" width="6" height="15.79"  transform=" matrix(1 0 0 1 0 0) "/>
              <rect x="0" y="42" rx="0" ry="0" width="15.79" height="6"  transform=" matrix(1 0 0 1 0 0) "/>
              <rect x="74.21" y="42" rx="0" ry="0" width="15.79" height="6"  transform=" matrix(1 0 0 1 0 0) "/>
              <path d="M 74.698 11.059 l -15.71 15.71 C 54.99 23.689 50.129 22 45 22 c -12.682 0 -23 10.318 -23 23 c 0 5.13 1.689 9.991 4.769 13.989 L 11.059 74.698 l 4.242 4.242 L 78.94 15.301 L 74.698 11.059 z M 28 45 c 0 -9.374 7.626 -17 17 -17 c 3.522 0 6.875 1.076 9.704 3.053 L 31.053 54.704 C 29.076 51.875 28 48.523 28 45 z"  transform=" matrix(1 0 0 1 0 0) " />
              <rect x="15.76" y="10.87" rx="0" ry="0" width="6" height="15.79"  transform=" matrix(0.7071 -0.7071 0.7071 0.7071 -7.7721 18.7634) "/>
              <rect x="68.24" y="63.34" rx="0" ry="0" width="6" height="15.79"  transform=" matrix(0.7071 -0.7071 0.7071 0.7071 -29.5071 71.2363) "/>
            </g>
          </svg>
        ) : (
          <svg className="light-svg" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 256 256">
            <g transform="translate(1.4065934065934016 1.4065934065934016) scale(2.81 2.81)" >
              <rect x="42" y="0" rx="0" ry="0" width="6" height="15.79"  transform=" matrix(1 0 0 1 0 0) "/>
              <rect x="42" y="74.21" rx="0" ry="0" width="6" height="15.79"  transform=" matrix(1 0 0 1 0 0) "/>
              <rect x="0" y="42" rx="0" ry="0" width="15.79" height="6"  transform=" matrix(1 0 0 1 0 0) "/>
              <rect x="74.21" y="42" rx="0" ry="0" width="15.79" height="6"  transform=" matrix(1 0 0 1 0 0) "/>
              <path d="M 74.698 11.059 l -15.71 15.71 C 54.99 23.689 50.129 22 45 22 c -12.682 0 -23 10.318 -23 23 c 0 5.13 1.689 9.991 4.769 13.989 L 11.059 74.698 l 4.242 4.242 L 78.94 15.301 L 74.698 11.059 z"  transform=" matrix(1 0 0 1 0 0) " />
              <rect x="15.76" y="10.87" rx="0" ry="0" width="6" height="15.79"  transform=" matrix(0.7071 -0.7071 0.7071 0.7071 -7.7721 18.7634) "/>
              <rect x="68.24" y="63.34" rx="0" ry="0" width="6" height="15.79"  transform=" matrix(0.7071 -0.7071 0.7071 0.7071 -29.5071 71.2363) "/>
            </g>
          </svg>
        )}
        <div className={`status-indicator ${isDarkMode ? 'dark' : 'light'}`}>
          {isDarkMode ? '' : 'Light Mode'}
        </div>
      </button>
    </div>
  );
}

export default ThemeSwitchButton;










// lab6\src\main\App.jsx
import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import TaskList from '../task/TaskList';
import Task from '../task/Task';  // Import the Task component

import Main from './AppDefault';
import ThemeSwitchButton from '../components/ThemeSwitchButton';

const App = () => {
  return (
    <>
      <div className="theme-switch-container">
        <ThemeSwitchButton />
      </div>
      
      <Router>
        <Routes>
          <Route path="/" element={<Main />} />
          <Route path="/TaskList" element={<TaskList />} />
          <Route path="/TaskList/:id" element={<Task />} />  {/* Dynamic index parameter */}
        </Routes>
      </Router>
    </>
  );
};

export default App;








// lab6\src\main\AppDefault.jsx
import React from 'react';
import reactLogo from '../assets/react.svg';
import viteLogo from '../assets/vite.svg';
import '../assets/App.css';
import { Link } from 'react-router-dom';

function Main() {
  return (
    <>
      <div>
        <a href="https://vitejs.dev" target="_blank" rel="noreferrer">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank" rel="noreferrer">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <br></br>
      <h1>Vite + React</h1>
      <br></br>
      <div>This is Lab6 solution</div>
      <br></br>
      <div>
        <Link to="/TaskList">
          <button>Go To TaskList</button>
        </Link>
      </div>
    </>
  );
}

export default Main;










// lab6\src\task\components\NewSubTaskForm.jsx
import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useParams } from 'react-router-dom';


const NewSubTaskForm=({ addSubTask })=> {
  const { id } = useParams();
  const [subtaskText, setSubtaskText] = useState('');
  const [alldone,setAlldone] = useState[null];
  const [tasks, setTasks] = useState([]);

  useEffect(() => {
    // Load tasks from localStorage on component mount
    const storedTasks = JSON.parse(localStorage.getItem('tasks')) || [];
    setTasks(storedTasks);

    const currentTask = tasks.find(task => task.id.toString() === id);
    if (currentTask) {
      setAlldone(currentTask.alldone);
    }
  }, []);

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
      <label>
        New Sub Task 👇
      </label>
      <br />
      <input type="text" 
        value={subtaskText} 
        onChange={handleChange}
      />
      <br />
      <br />
      <button type="submit" disabled={alldone}>Add Sub Task</button>
    </form>
  );
}

export default NewSubTaskForm;








// lab6\src\task\components\NewTaskForm.jsx
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const NewTaskForm=({ addTask })=> {
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








// lab6\src\task\components\SubTaskItem.jsx
import React from 'react';

const SubTaskItem = ({
  subtask,
  index,
  selectedSubTasks,
  toggleSubTaskSelection,
  toggleSubTaskDone,
  deleteSubTask,
  subtaskname
}) => {
  return (
    <div key={index} className={`flexdiv ${subtask.done ? 'done' : ''} position-relative`}>
      <div className={`task-item ${selectedSubTasks.includes(index) ? 'selected' : ''} ${subtask.done ? 'done' : ''}`}>
        <>
          <input
            type="checkbox"
            onChange={() => toggleSubTaskSelection(index)}
            checked={selectedSubTasks.includes(index)}
            className='checkbox-input'
          />
        </>

        <div className={`task-link ${subtask.done ? 'subtask-done' : ''}`}>
          {subtask.done ? <del>{subtaskname}</del> : subtaskname}
        </div>

        {subtask.done ? null : (
          <>
            <button onClick={() => toggleSubTaskDone(index)}>done?</button>
          </>
        )}

        <button onClick={() => deleteSubTask(index)}>Delete 🗑</button>
        
        {!subtask.done ? null : (
          <>
          <span className="position-absolute badge rounded-pill badge-danger" style={{ bottom: '70%', left: '105%', transform: 'translateX(-100%)', fontSize: '24px' }}>✔</span>
          </>
        )}
      </div>
    </div>
  );
};

export default SubTaskItem;







// lab6\src\task\components\TaskItem.jsx
import React from 'react';
import { Link } from 'react-router-dom';

const TaskItem = ({ task, index, selectedTasks, toggleTaskSelection,toggleTaskDone, deleteTask }) => {
  return (
    <div key={index} className={`flexdiv ${selectedTasks.alldone ? 'done' : ''} position-relative`}>
      <div className={`task-item ${selectedTasks.includes(index) ? 'selected' : ''} ${selectedTasks.alldone ? 'done' : ''}`}>
        <>
          <input
            type="checkbox"
            onChange={() => toggleTaskSelection(index)}
            checked={selectedTasks.includes(index)}
            className='checkbox-input'
          />
        </>

        {console.log(task)}
        <Link to={`/TaskList/${task.id}`} className="task-link">
          <div className={`task-link ${task.alldone ? 'subtask-done' : ''}`}>
            {task.alldone ? <del>{task.name}</del> : task.name}
          </div>
        </Link>

        {task.alldone ? null : (
          <>
            <button onClick={() => toggleTaskDone(index)}>done?</button>
          </>
        )}

        <button onClick={() => deleteTask(index)}>Delete 🗑</button>

        {task.alldone ? (
          <>
            <span className="position-absolute badge rounded-pill badge-danger" style={{ bottom: '70%', left: '105%', transform: 'translateX(-100%)', fontSize: '24px' }}>✔</span>
          </>
        ) : null}
      </div>
    </div>
  );
};

export default TaskItem;
undefined









// lab6\src\task\Task.jsx
import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import SubTaskItem from './components/SubTaskItem';
import GoBackButton from '../components/GoBackButton';
import NewSubTaskForm from './components/NewSubTaskForm';

function Task({ onDelete }) {
  const { id } = useParams();
  const [tasks, setTasks] = useState([]);
  // const [subtaskText, setSubtaskText] = useState('');
  const [selectedSubTasks, setSelectedSubTasks] = useState([]);

  // const [alldoned, setAlldone] = useState([]);

  // const currentTask = tasks.find(task => task.id.toString() === id);

  // if (currentTask) {
  //   setAlldone(currentTask.alldone);
  // }

  // const alldone=()=>{
  //   return alldoned?true:false;
  // };

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

  const toggleSubTaskDone = (subtaskIndex) => {
    const updatedTasks = tasks.map((task) => {
      if (task.id.toString() === id) {
        const updatedSubtasks = task.sub.map((subtask, index) => {
          if (index === subtaskIndex) {
            return { ...subtask, done: !subtask.done };
          }
          return subtask;
        });
        return { ...task, sub: updatedSubtasks };
      }
      return task;
    });

    setTasks(updatedTasks);
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
                      toggleSubTaskDone={toggleSubTaskDone}
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

          <div className="line"></div>

          <div className="counter-container">
            <NewSubTaskForm 
              addSubTask={addSubtask} 
              // alldone={alldone}
            />
          </div>
        </div>
      </div>

    </div>
  );
}

export default Task;








// lab6\src\task\TaskList.jsx
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
      alldone: false,
      sub: [
        {
          name: 'subtask1 of task1',
          done: true,
        },
        {
          name: 'subtask2 of task1',
          done: false,
        },
      ],
    },
    {
      id: 2,
      name: 'task2',
      alldone: true,
      sub: [
        {
          name: 'subtask1 of task2',
          done: true,
        },
        {
          name: 'subtask2 of task2',
          done: true,
        },
      ],
    },
  ]);
  const [selectedTasks, setSelectedTasks] = useState([]);
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

  const addTask = (newTask) => {
    const newTaskObject = {
      id: tasks.length + 1, // Assign a new unique id
      name: newTask,
      alldone: false,
      sub: [],
    };

    setTasks([...tasks, newTaskObject]);
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

  const toggleTaskDone = (taskIndex) => {
    const updatedTasks = tasks.map((task, index) => {
      if (index === taskIndex) {
        return { ...task, alldone: !task.alldone };
      }
      return task;
    });
  
    setTasks(updatedTasks);
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
              toggleTaskDone={toggleTaskDone}
            />
            
          ))}
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
undefinedundefinedundefinedundefined









// lab6\src\main.jsx
import React from 'react';
import { createRoot } from 'react-dom/client';
import App from './main/App.jsx';
import 'bootstrap/dist/css/bootstrap.min.css';
import './assets/index.css';


createRoot(document.getElementById('root')).render(<App />);