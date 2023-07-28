// LoginPage.jsx

import React, { useState } from 'react';
import './LoginPage.css';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

const LoginPage = () => {
  const [name, setName] = useState('');
  const [password, setPassword] = useState('');
  const [errors, setErrors] = useState({});
  const [isSubmit, setIsSubmit] = useState(false);
  const navigate = useNavigate();

  const handleName = (event) => {
    event.preventDefault();
    setName(event.target.value);
  };

  const handlePassword = (event) => {
    event.preventDefault();
    setPassword(event.target.value);
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    setErrors(validateForm({ name, password }));
    try {
      const response = await axios.post(
        'http://localhost:8181/api/v1/auth/authenticate',
        {
          email: name,
          password: password,
        }
      );
      navigate('/Home');
      let token = response.data.token;
      localStorage.setItem('token', token);
      console.log(response.status);
      if (response.status === 200) {
        setName('');
        setPassword('');
      }
    } catch (error) {
      console.log(error);
      alert('USER/PASSWORD MISMATCH');
      setIsSubmit(false);
    }
  };

  const validateForm = (values) => {
    const errors = {};

    if (values.name.trim() === '') {
      errors.name = 'Email is required';
      setIsSubmit(false);
    } else if (values.password.trim() === '') {
      errors.password = 'Password is required';
      setIsSubmit(false);
    } else if (values.password.length < 6) {
      errors.password = 'Password must be at least 6 characters long';
      setIsSubmit(false);
    } else {
      setIsSubmit(true);
    }
    return errors;
  };

  return (
    <>
      <div className='login'>
        {}
        <div className='animated-background'></div>

        <form className='login_form' onSubmit={handleSubmit}>
          <h1>Login</h1>
          <div className='gogo'>
            <div className='form-floating mb-3'>
              <label htmlFor='nm'>Email</label>
              <br />
              <input
                type='email'
                className='form-control'
                placeholder='abc@gmail.com'
                value={name}
                id='nm'
                onChange={handleName}
                required
              />
            </div>
            {errors.name && <span className='error'>{errors.name}</span>}
          </div>

          <div className='loginbox'>
            <div className='jo'>
              <div className='form-floating mb-3'>
                <label htmlFor='pwd'>Password</label>
                <input
                  type='password'
                  className='form-control'
                  placeholder='password'
                  id='pwd'
                  value={password}
                  onChange={handlePassword}
                  required
                />
              </div>
            </div>
            {errors.password && <span className='error'>{errors.password}</span>}
          </div>

          <button
            type='submit'
            className='btn btn-secondary'
            style={{ background: 'black', color: 'white', width: 180, height: 50, margin: 40 }}
          >
            Sign In
          </button>
        </form>
        <br />
        <br />
        <h2>
          Don't have an account? <a href='/SignUp'>SignUp</a>
        </h2>
      </div>
    </>
  );
};

export default LoginPage;
