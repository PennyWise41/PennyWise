import React from 'react';
import { createRoot } from 'react-dom/client';
import { Provider } from 'react-redux';
import App from './App.jsx';
import { store } from './store';
import { BrowserRouter } from 'react-router-dom';
import { render } from 'react-dom';
import ReactDOM from 'react-dom/client';

render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('app')
);

// const root = document.getElementById('app');
// ReactDOM.createRoot(root).render(
//     <App />
// );

// const container = document.getElementById('app');
// const app = createRoot(container);

// app.render(
//   <Provider store={store}>
//     <BrowserRouter>
//       <App />
//     </BrowserRouter>
//   </Provider>
// );
