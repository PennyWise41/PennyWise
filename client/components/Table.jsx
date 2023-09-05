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
  const totalExpenses = USDollar.format(
    Number(totalBudget.replace(/[^0-9.-]+/g, '')) -
      Number(remainingBalance.replace(/[^0-9.-]+/g, ''))
  );

  allExpenses.map((expense) => {
    rows.push(
      <tr key={expense.category}>
        <td>
          {expense.category.replaceAll('_', ' ').charAt(0).toUpperCase() +
            expense.replaceAll('_', ' ').slice(1)}
        </td>
        <td>{expense.total}</td>
      </tr>
    );
  });

  return (
    <table className='table' cellspacing='100'>
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
