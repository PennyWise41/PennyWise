import { configureStore } from '@reduxjs/toolkit';
import ClientReducer from './redux/ClientReducer.js';
import AuthReducer from './redux/AuthReducer.js';

// import { composeWithDevTools } from 'redux-devtools-extension';

// export default configureStore({
//   reducer: {
//      client: clientsReducer,
//   },
// });

const store = configureStore({
  reducer: { client: ClientReducer, auth: AuthReducer },
});

export default store;
