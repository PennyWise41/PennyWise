import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { tryingToLogIn, loggingIn, setID, setUserName, setFname, setLname, setBudget, setRemaining, setExpenses } from '../reducers/reducer';
import { useNavigate } from 'react-router-dom';

export default function logInPage() {
  const dispatch = useDispatch();
  
  // // const loggingIn = useSelector((state) => state.reducer.loggingIn);
  const navigate = useNavigate();

  const login = (username, password) => {
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
          // dispatch(setBudget(res.budget));
          // dispatch(setRemaining(res.remaining));
          // dispatch(setExpenses(res.user.expenses));
          navigate('/user');
        }
      });
  };


  return (
    <div className='background-pic-login'>
      <div className='main-div'>
        <form>
          <div className='mb-3'>
            <label className='form-label'>Username</label>
            <input placeholder='username' type='text' className='form-control' id='username' />
          </div>
          <div className='mb-3'>
            <label className='form-label'>Password</label>
            <input placeholder='password' type='password' className='form-control' id='password' />
          </div>
          <div>
            <input
              type='submit'
              value='Log In'
              onClick={(event) => {
                event.preventDefault();
                login(document.querySelector('#username').value, document.querySelector('#password').value);
              }}
            />
          </div>
        </form>
      </div>
    </div>
  );
}
