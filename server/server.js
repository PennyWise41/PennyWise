const express = require('express');
const path = require('path');
const clientRouter = require('./routers/clientRouter');
const dataRouter = require('./routers/dataRouter');
const cookieParser = require('cookie-parser');
const clientController = require('./controllers/clientController');

const PORT = 3000;
const app = express();

app.use(express.json());
app.use(express.urlencoded());
app.use(cookieParser());

app.use('/assets', express.static(path.resolve(__dirname, '../client/assets')));

// set up routers
app.use('/server/client', clientRouter);
app.use('/server/data', dataRouter);

/**
 * 404 handler
 */
app.use('*', (req,res) => {
  return res.status(404).send('Not Found');
});

/**
 * Global error handler
 */
app.use((err, req, res, next) => {
  const defaultErr = {
    log : 'Express error handler caught unknown middleware error',
    status : 400,
    message : {err: 'An error occurred'}
  }

  const errObj = Object.assign({}, defaultErr, err);
  console.log(errObj.log);

  return res.status(errObj.status).json(errObj.message);
});

// set app listen to port 3000
app.listen(PORT, ()=> {
    console.log(`Listening on port ${PORT}...`); 
});

// export app
module.exports = app;

