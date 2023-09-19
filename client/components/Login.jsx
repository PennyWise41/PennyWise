import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';
// import { login } from '../redux/AuthReducer.js';
import { useNavigate } from 'react-router-dom';
import {
  loggingIn,
  setID,
  setUserName,
  setFname,
  setLname,
  setBudget,
  setRemaining,
  setExpenses,
} from '../redux/ClientReducer.js';

const Login = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const loginFetch = (username, password) => {
    fetch('server/client/login', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ username, password }),
    })
      .then((res) => res.json())
      .then((res) => {
        dispatch(loggingIn(res.loggedIn));
        if (res.loggedIn) {
          dispatch(setID(res.id));
          dispatch(setUserName(res.username));
          dispatch(setFname(res.firstname));
          dispatch(setLname(res.lastname));
          //UNCOMMENT LATER
          dispatch(setBudget(res.budget));
          dispatch(setRemaining(res.remaining));
          dispatch(setExpenses(res.expenses));
          navigate('/dashboard');
        }
      });
  };

  //onclick function to route to signup page

  return (
    <div>
      <div className='loginBox'>
        <form>
          <div>
            <label className='login-label'> Username</label>
            <input type='text' placeholder='Username' id='username' />
          </div>

          <div>
            <label className='login-label'> Password</label>
            <input
              className='login-input'
              type='password'
              placeholder='Password'
              id='password'
            />
          </div>
          <button
            type='submit'
            className='login-button'
            onClick={(event) => {
              event.preventDefault();
              loginFetch(
                document.querySelector('#username').value,
                document.querySelector('#password').value
              );
            }}
          >
            Login
          </button>
        </form>
      </div>
      <div>
        {/* <button type='submit' value='Log In' className='signUpButton'>
          Create an Account
        </button> */}
        <button>
          <Link className='answer' to='/signup'>
            Create an account
          </Link>
        </button>
      </div>
    </div>
  );
};

export default Login;
