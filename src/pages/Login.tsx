import React, { useState } from 'react';
import { useAuth } from '../context/AuthContext';
import { apiLogin } from '../services/AuthService';
import { useNavigate } from 'react-router-dom';

const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const { login } = useAuth();
  const navigate = useNavigate();

  const handleSubmit = async (e: React.FormEvent) => {
    try {
      e.preventDefault();
      const response = await apiLogin({ email, password });
      const data = response.data;
      login(data);
      navigate('/user');
    } catch (error) {
      console.log({ error });
    }
  };

  return (
    <form onSubmit={handleSubmit} className="container">
      <label>
        Email:
        <input
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
      </label>
      <label>
        Password:
        <input
          type="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
      </label>
      <button type="submit">Login</button>
    </form>
  );
};

export default Login;
