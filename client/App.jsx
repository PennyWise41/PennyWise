import React from 'react';
import { Routes, Route, Link } from 'react-router-dom';
import Login from './components/Login.jsx';
import Signup from './components/Signup.jsx';
import Dashboard from './components/Dashboard.jsx';
import Chart from './components/Chart.jsx';
import Budget from './components/Budget.jsx';
// import HeaderContainer from './components/header.jsx';

const App = () => {
  return (
    <div>
      <div id='header'>
        <h1 id='title'>
  { /*<Link to='/'>PennyWise</Link> */}
        </h1>
      </div>
      <Routes>
        {/* <Route exact path='/' element={<Home />} /> */}
        <Route path='/signup' element={<Signup />} />
        <Route path='/' element={<Login />} />
        <Route path='/dashboard' element={<Dashboard />} /> 
        {/* <Route path='/chart' element={<Chart />} /> */}
      </Routes>
    </div>
  );
};

export default App;
