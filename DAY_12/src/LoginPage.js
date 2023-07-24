import React, { useState } from 'react';
import axios from 'axios';
import './LoginPage.css'; 

const LoginPage = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [phoneNumber, setPhoneNumber] = useState('');
  const [error, setError] = useState('');

  const handleLogin = async (e) => {
    e.preventDefault();

    setError('');

    // Form validation
    if (!email || !password || !phoneNumber) {
      setError('Please fill in all fields');
      return;
    }

    try {
      // Make the login request
      const response = await axios.post('/api/login', { email, password, phoneNumber });
      console.log(response.data);
      // Handle successful login or redirect to another page
    } catch (error) {
      console.error(error);
      setError('Invalid email or password');
    }
  };

  return (
    <div className="container">
    <div class="background-image">
    </div>
      <div className="login-form">
        <h2>Login</h2>
        {error && <div className="error-message">{error}</div>}
        <form onSubmit={handleLogin}>
          <input
            type="email"
            placeholder="Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
          <input
            type="password"
            placeholder="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />
          <input
            type="tel"
            placeholder="Phone Number"
            value={phoneNumber}
            onChange={(e) => setPhoneNumber(e.target.value)}
            required
          />
          <button type="submit">Login</button>
        </form>
        <div className="register-link">
          NEW ONE ?? <a href="/register">Register here</a>
        </div>
        
      </div>
    </div>
  );
};

export default LoginPage;
