import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Login from './components/Login.jsx';
import Signup from './components/Signup.jsx';
import Dashboard from './components/Dashboard.jsx';
import Chart from './components/Chart.jsx';
import Budget from './components/Budget.jsx';

const App = () => {
  return (
    <div>
      {/* <div>
        <Budget />
      </div> */}
      <Routes>
        <Route exact path='/' element={<Login />} />
        <Route exact path='/signup' element={<Signup />} />
        <Route exact path='/dashboard' element={<Dashboard />} />
        <Route exact path='/chart' element={<Chart />} />
      </Routes>
    </div>
  );
};

export default App;
