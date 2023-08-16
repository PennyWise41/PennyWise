import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
// import { tryingToLogIn, loggingIn, setUser } from '../reducers/reducer';
import { useNavigate } from 'react-router-dom';


export default function userPage() {
  // const loggedIn = useSelector((state) => state.reducer.loggedIn);
  const user = useSelector((state) => state.reducer.username);
  // const state = useSelector((state) => state.reducer);
  // const dispatch = useDispatch();
  // const navigate = useNavigate();


  return (
    <div className='background-pic-user'>
      <h1>User Page</h1>
      <h1>hello {user}</h1>
      {/* <UserProfile />
      <UserContent />
      <Chats /> */}
    </div>
  )
}