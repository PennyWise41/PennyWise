import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router';
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

const Signup = () => {
  const dispatch = useDispatch();

  const navigate = useNavigate();
  // const [firstName, setFirstName] = useState('');
  // const [lastName, setLastName] = useState('');
  // const [username, setUsername] = useState('');
  // const [password, setPassword] = useState('');

  // http://localhost:3000/server
  // 'localhost:3000/server/client/signup'

  const signUpFetch = (username, password, firstname, lastname) => {
    

    fetch('http://localhost:3000/server/client/signup', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ username, password, firstname, lastname }),
    })
      .then((res) => res.json())
      .then((res) => {
        dispatch(loggingIn(res.loggedIn));
        if (res.loggedIn) {
          dispatch(setID(res.id));
          dispatch(setUserName(res.username));
          dispatch(setFname(res.firstname));
          dispatch(setLname(res.lastname));
          dispatch(setBudget(null));
          dispatch(setRemaining(null));
          dispatch(setExpenses([]));
          navigate('/dashboard');
        }
      });
  };

  // const handlefnChange = (event) => {
  //   setFirstName(event.target.value);
  // };

  // const handlelnChange = (event) => {
  //   setLastName(event.target.value);
  // };

  // const handleUsernameChange = (event) => {
  //   setUsername(event.target.value);
  // };

  // const handlePasswordChange = (event) => {
  //   setPassword(event.target.value);
  // };

  //   function onSubmit({ username, password, firstName, lastName }) {
  //     console.log('submitted data:', { username, password, firstName, lastName });
  //   }

  return (
    <div className='background-pic-signup'>
      <div className='signUpContainer'>
        <form>
          <div>
            <label className='signup-label'>First Name</label>
            <input type='text' placeholder='First Name ' id='firstname' />
          </div>
          <div>
            <label className='signup-label'>Last Name</label>
            <input type='text' placeholder='Last Name ' id='lastname' />
          </div>
          <div>
            <label className='signup-label'>Username</label>
            <input type='text' placeholder='Username ' id='username' />
          </div>

          <div>
            <label className='signup-label'>Password</label>
            <input type='password' placeholder='Password ' id='password' />
          </div>
          <button
            className='signUpSubmitButton'
            type='submit'
            value='Sign Up'
            onClick={(event) => {
              event.preventDefault();
              signUpFetch(
                document.querySelector('#username').value,
                document.querySelector('#password').value,
                document.querySelector('#firstname').value,
                document.querySelector('#lastname').value
              );
            }}
          >
            Submit
          </button>
        </form>
      </div>
    </div>
  );
};

export default Signup;

// {
//   /* <form id="signin" action="/http://localhost:3333/signin" method="POST">
// <input id="user" name="user" placeholder="user" type="text"></input>
// <br>
// <input id="pass" name="pass" placeholder="pass" type="text"></input>
// <br>
// <button id="submit" type="submit">Sign In</button>
// </form> */
// }
