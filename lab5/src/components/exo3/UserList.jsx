import React, { useState } from 'react';
import AuthForm from './AuthForm';

const UserList = () => {
  const [users, setUsers] = useState([]);

  const handleFormSubmit = (userData) => {
    // Ajoute le nouvel utilisateur à la liste
    setUsers([...users, userData]);
  };

  const handleDelete = (index) => {
    // Supprime l'utilisateur de la liste en utilisant son index
    const newUsers = [...users];
    newUsers.splice(index, 1);
    setUsers(newUsers);
  };

  return (
    <div>
      <AuthForm onSubmit={handleFormSubmit} />

      <ul>
        {users.map((user, index) => (
          <li key={index}>
            {`Nom d'utilisateur: ${user.username}, Mot de passe: ${user.password}`}
            <button onClick={() => handleDelete(index)}>Supprimer</button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default UserList;












