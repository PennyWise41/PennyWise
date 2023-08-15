const db = require('../dbConnection/elephantConnect');

const dataController = {};

dataController.setBudget = async (req, res, next) => {

  try {
    
    return next();
  } catch (err) {
    return next({
      log: 'Error occurred in dataController.setBudget',
      status: 500,
      message: { err: 'An error occurred in dataController.setBudget'}
    });
  }
};










module.exports = dataController;