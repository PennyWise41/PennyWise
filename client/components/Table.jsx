import React from 'react';
import { useDispatch, useSelector } from 'react-redux';

const USDollar = new Intl.NumberFormat('en-US', {
  style: 'currency',
  currency: 'USD',
});

function Table() {
  const allExpenses = useSelector((state) => state.reducer.expenses);
  const rows = [];
  const totalBudget = useSelector((state) => state.reducer.budget);
  const remainingBalance = useSelector((state) => state.reducer.remaining);

  let totalExpenses = '$0.00';
   
  if (totalBudget && remainingBalance) {
    totalExpenses = USDollar.format(
      Number(totalBudget.replace(/[^0-9.-]+/g, '')) -
        Number(remainingBalance.replace(/[^0-9.-]+/g, ''))
    );
  }


  if (allExpenses.length > 0) {
    allExpenses.forEach((expense) => {
      rows.push(
        <tr key={expense.category}>
          <td>
            {expense.category}
          </td>
          <td>{expense.total}</td>
        </tr>
      );
    });
  }

  return (
    <table className='table' cellSpacing='100'>
      <thead>
        <tr>
          <th className='tableHeader'>Expense</th>
          <th className='tableHeader'>Amount</th>
        </tr>
      </thead>

      <tbody>{rows}</tbody>

      <tfoot>
        <tr>
          <td className='tableHeader'>Total Expenses</td>
          <td className='tableHeader'>{totalExpenses}</td>
        </tr>
      </tfoot>
    </table>
  );
}

export default Table;
