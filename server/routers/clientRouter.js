const express = require('express');
const clientRouter = express.Router();
// const { Router } = require('express');
// const router = Router();


const clientController = require('../controllers/clientController');
// const cookieController = require('../controllers/cookieController');
// const sessionController = require('../controllers/sessionController');

// ADD FUNCTIONALITY

clientRouter.post(
  '/signup',
  clientController.createClient,
  // cookieController.setSSIDCookie,
  // sessionController.startSession,
  (req, res) => {
    return res.status(200).json(res.locals);
    // return res.json({ loggedIn: res.locals.loggedIn, id: res.locals.clientId, data: res.locals.data});
  }
);

// clientRouter.post(
//   '/login',
//   clientController.verifyUser,
//   // cookieController.setSSIDCookie,
//   // sessionController.startSession,
//   (req, res) => {
//     return res.json({ loggedIn: res.locals.loggedIn, id: res.locals.clientId, data: res.locals.data});
//   }
// );

// clientRouter.get('/isLoggedIn', sessionController.isLoggedIn, (req, res) => {
//   return res.json({ loggedIn: res.locals.loggedIn, id: req.cookies.ssid });
// });

// clientRouter.get('/logout', (req, res) => {
//   return res.clearCookie('cookieId').redirect('/');
// });

// export clientRouter
module.exports = clientRouter;
