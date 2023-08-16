import React, { useState } from 'react';

const Signup = () => {
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const handlefnChange = (event) => {
    setFirstName(event.target.value);
  };

  const handlelnChange = (event) => {
    setLastName(event.target.value);
  };

  const handleUsernameChange = (event) => {
    setUsername(event.target.value);
  };

  const handlePasswordChange = (event) => {
    setPassword(event.target.value);
  };

  //   function onSubmit({ username, password, firstName, lastName }) {
  //     console.log('submitted data:', { username, password, firstName, lastName });
  //   }

  return (
    <div className='signUpContainer'>
      <form action='/signup' method='POST'>
        <span className='signUpForm'>
          <input
            name='un'
            className='username'
            type='text'
            placeholder='Username'
            value={username}
            onChange={handleUsernameChange}
          />
        </span>
        <span className='signUpForm'>
          <input
            name='pw'
            className='password'
            type='password'
            placeholder='Password'
            value={password}
            onChange={handlePasswordChange}
          />
        </span>
        <span className='signUpForm'>
          <input
            name='fn'
            className='first-name'
            type='text'
            placeholder='First Name'
            value={firstName}
            onChange={handlefnChange}
          />
        </span>
        <span className='signUpForm'>
          <input
            name='ln'
            className='last-name'
            type='text'
            placeholder='Last Name'
            value={lastName}
            onChange={handlelnChange}
          />
        </span>
        <button className='signUpSubmitButton' type='submit'>Submit</button>
      </form>
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
