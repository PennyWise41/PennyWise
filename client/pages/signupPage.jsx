import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { tryingToLogIn, loggingIn, setID, setUserName, setFname, setLname, setBudget, setRemaining, setExpenses } from '../reducers/reducer';
import { useNavigate } from 'react-router-dom';


export default function signupPage() {
  // const dispatch = useDispatch();
  // const triedToLogIn = useSelector((state) => state.reducer.triedToLogIn);
  // const navigate = useNavigate();

  // const login = (username, password, name, age, breed, gender, birthday, city) => {
  //   fetch('server/signup', {
  //     method: 'POST',
  //     headers: {
  //       'Content-Type': 'application/json',
  //     },
  //     body: JSON.stringify({ username, password, name, age, breed, gender, birthday, city }),
  //   })
  //     .then((res) => res.json())
  //     .then((res) => {
  //       dispatch(setUser(res.id));
  //       dispatch(tryingToLogIn(res.loggedIn));
  //       if (res.loggedIn) {
  //         dispatch(loggingIn(res.loggedIn));
  //         dispatch(setName(res.user.name));
  //         dispatch(setUserName(res.user.username));
  //         dispatch(setAge(res.user.age));
  //         dispatch(setBreed(res.user.breed));
  //         dispatch(setGender(res.user.gender));
  //         dispatch(setBirthday(res.user.birthday));
  //         dispatch(setCity(res.user.city));
  //         dispatch(setAppoinment(res.user.appointments));
  //         dispatch(setShotRecord(res.user.shotRecords));
  //         dispatch(setChats(res.chats));
  //         navigate('/user');
  //       }
  //     });
  // };
  const dispatch = useDispatch();
  
  // // const loggingIn = useSelector((state) => state.reducer.loggingIn);
  const navigate = useNavigate();

  const signup = (username, password, firstname, lastname) => {
    fetch('/server/client/signup', {
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
          // dispatch(setBudget(res.budget));
          // dispatch(setRemaining(res.remaining));
          // dispatch(setExpenses(res.user.expenses));
          navigate('/user');
        }
      });
  };


  return (
    <div className='background-pic-signup'>
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
          <div className='mb-3'>
            <label className='form-label'>First Name</label>
            <input placeholder='firstname' type='text' className='form-control' id='firstname' />
          </div>
          <div className='mb-3'>
            <label className='form-label'>Last Name</label>
            <input placeholder='lastname' type='text' className='form-control' id='lastname' />
          </div>
          <div>
            <input
              type='submit'
              value='Sign Up'
              onClick={(event) => {
                event.preventDefault();
                signup(document.querySelector('#username').value, document.querySelector('#password').value, 
                  document.querySelector('#firstname').value, document.querySelector('#lastname').value);
              }}
            />
          </div>
        </form>
      </div>
    </div>
  );
}
