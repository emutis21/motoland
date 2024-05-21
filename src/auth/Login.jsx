import React, { useState } from 'react';
import { login } from '../api/auth';

import '../style/Auth.scss'

const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState(null);
  

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const user = { email, password };
      const response = await login(user);

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
        <button type="submit">Login</button>
      </form>
      {error && <p>{error}</p>}
    </main>
  );
};

export default Login;