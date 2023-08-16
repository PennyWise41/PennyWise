import React from 'react';
import NavLink from '../components/navLink.jsx';
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';

export default function header() {
  const loggedIn = useSelector((state) => state.reducer.loggedIn);
  let navlinks;
  if (!loggedIn)
    navlinks = [
      <NavLink nav='Sign Up' link='/signup' key='signup' />,
      <NavLink nav='Log In' link='/login' key='login' />,
    ];
  else {
    navlinks = [
      <NavLink nav='Log out' link='/logout' key='logout' />,
    ];
  }

  return (
    <div>
      <nav className='navbar fixed-top navbar-expand-lg'>
        <div className='container-fluid'>
          <h1>Welcome to PennyWise</h1>
          <div className='collapse navbar-collapse' id='navbarNavAltMarkup'>
            <ul className='navbar-nav ms-auto'>{navlinks}</ul>
          </div>
        </div>
      </nav>
    </div>
  );
}
