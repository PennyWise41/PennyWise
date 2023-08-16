import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import {
  setBudget,
  setRemaining,
  setExpenses,
} from '../redux/ClientReducer.js';

const Budget = () => {
  // const handleClick = async () => {
  //   const reply = await fetch('http://localhost:3000/clients')
  // };
  const dispatch = useDispatch(); 
  const id = useSelector((state) => state.reducer.id);
  const year = useSelector((state) => state.reducer.year);
  const month = useSelector((state) => state.reducer.month);

  const setBudgetClick = (id, year, month, total) => {
    fetch('http://localhost:3000/server/data/setBudget', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ id, year, month, total }),
    })
      .then((res) => res.json())
      .then((res) => {
        dispatch(setBudget(res.total));
        dispatch(setRemaining(res.remaining));
      });
  };

  const budgetLeft = useSelector((state) => state.reducer.remaining)
  

  return (
    <div>
      <form>
        <div>
          <label className='login-label'>Budget: </label>
          <input type='text' placeholder='Budget' id='budget' />
        
        <button
          onClick={(event) => {
            event.preventDefault();
            setBudgetClick(
              id,
              year,
              month,
              document.querySelector('#budget').value
            );
          }}
        >
          Submit
        </button>
        </div>
      </form>
      <span>Budget Left: {budgetLeft}</span>
    </div>
  );
};
export default Budget;
