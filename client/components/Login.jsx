import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { login } from '../redux/AuthReducer.js';

const Login = () => {
  const dispatch = useDispatch();

  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const handleUsernameChange = (event) => {
    setUsername(event.target.value);
  };

  const handlePasswordChange = (event) => {
    setPassword(event.target.value);
  };

  const onSubmit = (event) => {
    event.preventDefault()
    // send username, password to db, verify somewhere - FETCH POST (TO DB)
    // of verified, client comes back.
    // dispatch ({type: 'loggedIn, client: client, isloggedIn: true})

    return dispatch(login(username));
  }

  return (
    <div>
      <div className='loginBox'>
        <form onSubmit={onSubmit}>
          <input
            className='login-input'
            type='text'
            placeholder='Username'
            onChange={handleUsernameChange}
            value={username}
          />
          <input
            className='login-input'
            type='password'
            placeholder='Password'
            value={password}
            onChange={handlePasswordChange}
          />
          <button type='submit' className='login-button'>
            Login
          </button>
        </form>
      </div>
      <div>
        <button className='signUp'>Create an Account</button>
      </div>
    </div>
  );
};

export default Login;
