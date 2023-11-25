// App.jsx
import React, { useState } from 'react';
import UserList from './UserList';
import GoBackButton from '../GoBackButton';


const Exo3 = () => {
  const [allUsers, setAllUsers] = useState([]);

  const handleFormSubmit = (userData) => {
    setAllUsers([...allUsers, userData]);
  };

  return (
    <div>
      <GoBackButton/>

      <h2>Formulaire d'authentification et liste d'utilisateurs</h2>
      <UserList onSubmit={handleFormSubmit} users={allUsers} />
    </div>
  );
};

export default Exo3;
