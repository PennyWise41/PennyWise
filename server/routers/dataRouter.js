const express = require('express');
const dataRouter = express.Router();

const dataController = require('../controllers/dataController');

// ADD FUNCTIONALITY

dataRouter.post(
  '/setBudget',
  dataController.setBudget,
  // cookieController.setSSIDCookie,
  // sessionController.startSession,
  (req, res) => {
    return res.status(200).json(res.locals);
    // return res.json({ loggedIn: res.locals.loggedIn, id: res.locals.clientId, data: res.locals.data});
  }
);











// export clientRouter
module.exports = dataRouter;
