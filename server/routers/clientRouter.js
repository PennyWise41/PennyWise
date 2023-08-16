const express = require('express');
const clientRouter = express.Router();

const clientController = require('../controllers/clientController');
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
