import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { updateBudget } from '../redux/ClientReducer';

const Dashboard = () => {
  const dispatch = useDispatch();
  const budgetLeft = useSelector((state) => state.client.budgetLeft);

  const [budgetInput, setBudgetInput] = useState('');
  const [totalSpent, setTotalSpent] = useState('');

  const handleBudgetChange = (event) => {
    setBudgetInput(event.target.value);
  };

  const handleTotalSpentChange = (event) => {
    setTotalSpent(event.target.value);
  };

  const onSubmit = (event) => {
    event.preventDefault();
    const newBudget = parseFloat(budgetInput)
    return dispatch(updateBudget(newBudget));
  };

  return (
    <div>
      <div className='dashboard'>
        <button className='graphs-button'>Graphs</button>
        <span>Hello User</span>
        <form onSubmit={onSubmit}>
          <input
            className='budget'
            placeholder='Enter your budget'
            value={budgetInput}
            onChange={handleBudgetChange}
          />
          <button className='budget-button' type='submit'>
            Submit
          </button>
        </form>
      </div>
    </div>
  );
};

export default Dashboard;
