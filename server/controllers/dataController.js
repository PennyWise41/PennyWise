const db = require('../dbConnection/elephantConnect');

// helper function to convert num to currency
const USDollar = new Intl.NumberFormat('en-US', {
  style: 'currency',
  currency: 'USD',
});

const dataController = {};

// set budget for client in db budget table
dataController.setBudget = async (req, res, next) => {
  const { id, year, month, total } = req.body;
  // console.log(req.body);

  try {
    // get next id# for new data row entry
    const budgetID = await db.query('SELECT COUNT(*) + 1 as nextid FROM Budget');
    const newID = budgetID.rows[0].nextid;

    // add new budget row to db
    const sqlQuery = 'INSERT INTO Budget (id, clientID, year, month, total, remaining) VALUES ($1, $2, $3, $4, $5, $6)';
    await db.query(sqlQuery, [newID, id, year, month, total, total]);

    // query added budget row
    const data = await db.query(`SELECT * FROM Budget WHERE id = ${newID}`);
    // console.log(data);
    res.locals.total = data.rows[0].total;
    res.locals.remaining = data.rows[0].remaining;
    return next();
  } catch (err) {
    return next({
      log: 'Error occurred in dataController.setBudget',
      status: 500,
      message: { err: 'An error occurred in dataController.setBudget'}
    });
  }
};

dataController.addExpense = async (req, res, next) => {
  const { id, year, month, category, total, tax } = req.body;
  // console.log(req.body);

  try {
    // get current expense total for given category and month/year for this client
    const sqlQuery = 'SELECT * FROM Expenses WHERE clientid = $1 and year = $2 and month = $3 and category = $4';
		const data = await db.query(sqlQuery, [id, year, month, category]);
    // console.log(data);
    const oldTotal = data.rows[0].total;

    // add new expense to total
    const newTotal = Number(oldTotal.replace(/[^0-9.-]+/g,"")) + total;
    // console.log(oldTotal, newTotal);

    // update to expense total to db
    const sqlQueryUpdate = 'UPDATE Expenses SET total = $5 WHERE clientid = $1 and year = $2 and month = $3 and category = $4';
    const updated = await db.query(sqlQueryUpdate, [id, year, month, category, newTotal]);

    // query all expenses for the month/year for this client
    const sqlQueryExpenses = 'SELECT * FROM Expenses WHERE clientid = $1 and year = $2 and month = $3';
		const expenses = await db.query(sqlQueryExpenses, [id, year, month]);
    res.locals.expenses = expenses.rows;
    return next();
  } catch (err) {
    // if category not exist in table for the given month/year for the user, insert new entry, find next id#
    const expenseID = await db.query('SELECT COUNT(*) + 1 as nextid FROM Expenses');
    const newID = expenseID.rows[0].nextid;
    
    // add new expense category for the month/year to expenses table for this client
    const sqlQuery = 'INSERT INTO Expenses (id, clientID, year, month, category, total, taxrelated) VALUES ($1, $2, $3, $4, $5, $6, $7)';
    await db.query(sqlQuery, [newID, id, year, month, category, total, tax]);
    
    // query all expenses for the month/year for this client
    const sqlQueryExpenses = 'SELECT * FROM Expenses WHERE clientid = $1 and year = $2 and month = $3';
		const expenses = await db.query(sqlQueryExpenses, [id, year, month]);
    res.locals.expenses = expenses.rows;
    return next();
  }

};

// update budget remaining balance in db with new expense
dataController.updateBudget = async (req, res, next) => {
  const { id, year, month, total } = req.body;
  // console.log(req.body);

  try {
    // query curr client's budget with the given month/year
    const sqlQuery = 'SELECT * FROM Budget WHERE clientid = $1 and year = $2 and month = $3';
		const data = await db.query(sqlQuery, [id, year, month]);
    const oldRemaining = data.rows[0].remaining;
    // calculate new remaining balance
    const newRemaining = Number(oldRemaining.replace(/[^0-9.-]+/g,"")) - total;
    // update remaining balance to db table
    const sqlQueryUpdate = 'UPDATE Budget SET remaining = $4 WHERE clientid = $1 and year = $2 and month = $3';
    const updated = await db.query(sqlQueryUpdate, [id, year, month, newRemaining]);
    // convert num to currency
    const remainingBudget = USDollar.format(newRemaining);
    res.locals.remaining = remainingBudget;
    return next();
  } catch (err) {
    return next({
      log: 'Error occurred in dataController.updateBudget',
      status: 500,
      message: { err: 'An error occurred in dataController.updateBudget'}
    });
  }
}












module.exports = dataController;