import React, { useState } from 'react';
import { register } from '../api/auth';

import '../style/auth.scss'

const Register = () => {
  const [username, setUsername] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState(null);


  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const user = { username, email, password };
      const response = await register(user);

      if (response.error) setError(response.error);
    } catch (error) {
      setError(error.message);
    }
  };

  return (
    <main>
      <form onSubmit={handleSubmit}>
        <input
          autoFocus
          type="text"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
          placeholder="Username"
          required
        />
        <input
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          placeholder="Email"
          required
        />
        <input
          type="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          placeholder="Password"
          required
        />
        <button type="submit">Register</button>
      </form>
      {error && <p>{error}</p>}
    </main>
  );
};

export default Register;