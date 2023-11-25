// AuthForm.jsx
import React, { useState } from 'react';

const AuthForm = ({ onSubmit }) => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!username || !password) {
      setError('Veuillez saisir le nom d\'utilisateur et le mot de passe.');
      return;
    }

    onSubmit({ username, password });

    setUsername('');
    setPassword('');
    setError('');
  };

  return (
    <form onSubmit={handleSubmit}>
      {error && <p style={{ color: 'red' }}>{error}</p>}
      <label>
        Nom d'utilisateur:
        <input
          type="text"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
        />
      </label>
      <br></br>
      <label>
        Mot de passe:
        <input
          type="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
      </label>
      <br></br>
      <button type="submit">Soumettre</button>
    </form>
  );
};

export default AuthForm;
