const express = require('express');
const path = require('path');
// const serverRouter = require('./routes/serverRouter');
// const cookieParser = require('cookie-parser');

const PORT = 3000;
const app = express();

const clientController = require('./controllers/clientController.js')

// app.use(express.json());
// app.use(express.urlencoded());
// app.use(cookieParser());

// app.use('/assets', express.static(path.resolve(__dirname, '../client/assets')));


app.get('/', (req, res) => {
  return res.json({message: 'we are good'})
})

app.get('/clients', clientController.getClients, () => {
  return res.json({message: 'goooooood'})
})

/**
 * 404 handler
 */
// app.use('*', (req,res) => {
//   return res.status(404).send('Not Found');
// });

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

app.listen(PORT, ()=> {
    console.log(`Listening on port ${PORT}...`); 
});
module.exports = app;

