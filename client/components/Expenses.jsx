import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { setRemaining, setExpenses } from '../redux/ClientReducer.js';

const Expenses = () => {
  const dispatch = useDispatch();
  const id = useSelector((state) => state.reducer.id);
  const year = useSelector((state) => state.reducer.year);
  const month = useSelector((state) => state.reducer.month);

  const addExpenseClick = () => {
    fetch('http://localhost:3000/server/data/addExpense', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ id, year, month, category, total, tax }),
    })
      .then((res) => res.json())
      .then((res) => {
        console.log(res);
        dispatch(setExpenses(res.expenses));
        dispatch(setRemaining(res.remaining));
      });
  };
  return (
    <div>
      <form>
        <div>
          <div>
            <label className='category-label'>Category: </label>
            <input type='text' placeholder='Category' id='category' />
          </div>
          <div>
            <label className='category-label'>Total: </label>
            <input type='text' placeholder='Total' id='total' />
          </div>
          <div>
            <label className='category-label'>Tax Related: </label>
            <input type='text' placeholder='True/False' id='tax' />
            {/* <select id="tax">
              <option value="true">True</option>
              <option value="false">False</option>
            </select> */}



            {/* <input list='boolean' name='tax' />
            <datalist id='tax'>
              <option value='true' />
              <option value='false' />
            </datalist> */}
          </div>
        </div>
        <button
          onClick={(event) => {
            event.preventDefault();
            addExpenseClick(
              id,
              year,
              month,
              document.querySelector('#category').value,
              document.querySelector('#total').value,
              document.querySelector('#tax').value
            );
          }}
        >
          Add
        </button>
      </form>
    </div>
  );
};

export default Expenses;
