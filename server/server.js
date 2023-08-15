const express = require('express');
const path = require('path');
const clientRouter = require('./routers/clientRouter');
const dataRouter = require('./routers/dataRouter');
const cookieParser = require('cookie-parser');
const clientController = require('./controllers/clientController');

const PORT = 3000;
const app = express();

// const clientController = require('./controllers/clientController.js')

app.use(express.json());
app.use(express.urlencoded());
app.use(cookieParser());

// app.use('/assets', express.static(path.resolve(__dirname, '../client/assets')));


// app.get('/', (req, res) => {
//   return res.json({message: 'we are good'})
// })

// app.get('/clients', clientController.getClients, () => {
//   return res.json({message: 'goooooood'})
// })
app.get('/id', clientController.test, (req, res) => {
  return res.json(res.locals.id);
})

// set up routers
app.use('/client', clientRouter);
// app.use('/data', dataRouter);

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

