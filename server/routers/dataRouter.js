const express = require('express');
const dataRouter = express.Router();

const dataController = require('../controllers/dataController');

// ADD FUNCTIONALITY

dataRouter.post(
  '/setBudget',
  dataController.setBudget,
  (req, res) => {
    return res.status(200).json(res.locals);
  }
);

dataRouter.post(
  '/addExpense',
  dataController.addExpense,
  dataController.updateBudget,
  (req, res) => {
    return res.status(200).json(res.locals);
  }
);


// export clientRouter
module.exports = dataRouter;
