const express = require('express');
const clientRouter = express.Router();

const clientController = require('../controllers/clientController');
const dataController = require('../controllers/dataController');
// const cookieController = require('../controllers/cookieController');

// ADD FUNCTIONALITY

clientRouter.post(
  '/signup',
  clientController.createClient,
  // cookieController.setSSIDCookie,
  (req, res) => {
    return res.status(200).json(res.locals);
  }
);

clientRouter.post(
  '/login',
  clientController.verifyClient,
  dataController.loadData,
  // cookieController.setSSIDCookie,
  (req, res) => {
    return res.status(200).json(res.locals);
  }
);

clientRouter.get('/logout', (req, res) => {
  return res.clearCookie('cookieId').redirect('/');
});

// export clientRouter
module.exports = clientRouter;
