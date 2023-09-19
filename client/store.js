import { configureStore } from '@reduxjs/toolkit';
import reducer from './redux/ClientReducer.js';

// import { composeWithDevTools } from 'redux-devtools-extension';

// export default configureStore({
//   reducer: {
//      client: clientsReducer,
//   },
// });

const store = configureStore({
  reducer: { reducer: reducer },
});

export default store;
