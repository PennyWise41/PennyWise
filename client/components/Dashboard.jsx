import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
// import { updateBudget } from '../redux/ClientReducer';
import Table from './Table.jsx';
import Budget from './Budget.jsx';
import Expenses from './Expenses.jsx';

import {
  loggingIn,
  setID,
  setUserName,
  setFname,
  setLname,
} from '../redux/ClientReducer.js';

const Dashboard = () => {
  const dispatch = useDispatch();
  const user = useSelector((state) => state.reducer.fname);
  console.log(user);

  return (
    <div>
      <div className='dashboard'>
        {/* <button className='graphs-button'>Graphs</button> */}
        <span>Hello {user} </span>
        <Budget />
        <Expenses />
      
        <div>
          <Table />
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
